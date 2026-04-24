import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db, loginWithGoogle, logout } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, onSnapshot, increment } from 'firebase/firestore';

interface UserContextType {
  user: User | null;
  loading: boolean;
  balance: number;
  login: () => Promise<void>;
  logoutUser: () => Promise<void>;
  addBalance: (amount: number) => Promise<void>;
  subtractBalance: (amount: number) => Promise<boolean>;
  setBalanceExact: (amount: number) => Promise<void>;
  recordBet: (game: string, betAmount: number, multiplier: number, payout: number) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Init or fetch user document
        const userRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(userRef);
        if (!docSnap.exists()) {
          const newUser = {
            userId: currentUser.uid,
            email: currentUser.email || '',
            displayName: currentUser.displayName || 'Player',
            photoURL: currentUser.photoURL || '',
            balance: 1000,
            totalWagered: 0,
            totalWon: 0,
            createdAt: Date.now(),
            updatedAt: Date.now()
          };
          await setDoc(userRef, newUser);
          setBalance(1000);
        } else {
          setBalance(docSnap.data().balance);
        }

        // Listen for balance visually
        const unsubSnap = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            setBalance(doc.data().balance);
          }
        });
        
        setLoading(false);
        return () => unsubSnap();
      } else {
        setBalance(0);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const login = async () => {
    await loginWithGoogle();
  };

  const logoutUser = async () => {
    await logout();
  };

  const addBalance = async (amount: number) => {
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      balance: increment(amount),
      updatedAt: Date.now()
    });
  };

  const subtractBalance = async (amount: number) => {
    if (!user) return false;
    if (balance < amount) return false;
    
    const userRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userRef, {
        balance: increment(-amount),
        updatedAt: Date.now()
      });
      return true;
    } catch(e) {
      console.error(e);
      return false;
    }
  };

  const setBalanceExact = async (amount: number) => {
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      balance: amount,
      updatedAt: Date.now()
    });
  };

  const recordBet = async (game: string, betAmount: number, multiplier: number, payout: number) => {
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    
    // Safely parse numbers to avoid Firebase 'unsupported field value' errors with undefined/NaN
    const safeBetAmount = typeof betAmount === 'number' && !isNaN(betAmount) ? betAmount : 0;
    const safeMultiplier = typeof multiplier === 'number' && !isNaN(multiplier) ? multiplier : 0;
    const safePayout = typeof payout === 'number' && !isNaN(payout) ? payout : 0;

    // Attempt to record to global bets (fire and forget for UI speed)
    const betId = Math.random().toString(36).substring(2, 11);
    setDoc(doc(db, 'bets', betId), {
      userId: user.uid,
      userName: user.displayName || 'Player',
      game,
      betAmount: safeBetAmount,
      multiplier: safeMultiplier,
      payout: safePayout,
      timestamp: Date.now()
    }).catch(console.error);

    // Update user stats
    const updates: any = {
      totalWagered: increment(safeBetAmount),
      updatedAt: Date.now()
    };
    if (safePayout > 0) {
      updates.totalWon = increment(safePayout);
    }
    
    await updateDoc(userRef, updates).catch(console.error);
  };

  return (
    <UserContext.Provider value={{ user, loading, balance, login, logoutUser, addBalance, subtractBalance, setBalanceExact, recordBet }}>
      {!loading ? children : <div className="h-screen w-screen flex items-center justify-center bg-bg-base text-accent"><div className="animate-spin text-4xl">💰</div></div>}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
