import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { LogIn, LogOut, Trophy, Menu, Bell, Search, ChevronDown, Wallet as WalletIcon, X } from 'lucide-react';
import { Leaderboard } from './Leaderboard';

export function Header({ setView }: { setView: (view: 'home' | 'mines' | 'roulette' | 'keno' | 'dice' | 'plinko' | 'crash' | 'limbo' | 'wheel') => void }) {
  const { user, balance, setBalanceExact, addBalance, subtractBalance, login, logoutUser } = useUser();
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [walletAmount, setWalletAmount] = useState<string>('1000');

  const handleSetBalance = () => {
    const amt = parseFloat(walletAmount);
    if (!isNaN(amt) && amt >= 0) {
      setBalanceExact(amt);
      setShowWallet(false);
    }
  };

  return (
    <>
      <header className="h-20 border-b border-border-subtle flex items-center justify-between px-4 md:px-8 bg-bg-panel/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 md:gap-6">
          <Menu className="text-text-secondary cursor-pointer hover:text-white" />
          <div 
            className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setView('home')}
          >
            <span className="text-2xl font-black italic tracking-tighter text-white font-sans drop-shadow-md">Stake</span>
          </div>
        </div>

        {user ? (
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Wallet Group */}
            <div className="flex items-center gap-2">
               <div 
                 onClick={() => setShowWallet(true)}
                 className="bg-bg-inner/80 hover:bg-bg-inner border border-border-medium pl-4 pr-3 py-2.5 rounded flex items-center gap-3 shadow-inner cursor-pointer transition-colors max-w-[200px]"
               >
                 <span className="font-bold text-sm tracking-tight text-white truncate shrink">
                   {Math.floor(balance).toLocaleString('en-US')}
                 </span>
                 <span className="text-emerald-500 font-bold font-mono text-[10px] leading-none bg-emerald-500/20 w-4 h-4 flex items-center justify-center rounded-full shrink-0">T</span>
                 <ChevronDown size={14} className="text-text-secondary ml-1 shrink-0" />
               </div>
               
               <button 
                 onClick={() => setShowWallet(true)}
                 className="bg-[#1475e1] hover:bg-[#1b80f0] text-white text-sm px-5 py-2.5 rounded font-bold shadow-md transition-colors h-full flex items-center"
               >
                 Portefeuille
               </button>
            </div>
            
            <div className="hidden md:flex items-center gap-5 text-text-secondary ml-4">
               <Search size={18} className="hover:text-white transition-colors cursor-pointer" />
               <button onClick={() => setShowLeaderboard(true)} className="hover:text-white transition-colors">
                 <Trophy size={18} />
               </button>
               <Bell size={18} className="hover:text-white transition-colors cursor-pointer" />
            </div>

            <div className="flex items-center ml-2 border border-border-medium rounded hover:border-text-secondary transition-colors group relative cursor-pointer">
              <div className="w-9 h-9 bg-border-medium overflow-hidden rounded">
                 {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                 ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs font-bold text-white bg-indigo-500">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                 )}
              </div>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-bg-panel border border-border-medium rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                 <button onClick={logoutUser} className="w-full px-4 py-3 text-left hover:bg-white/5 flex items-center gap-2 text-red-400 font-medium">
                   <LogOut size={16} /> Logout
                 </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button 
              onClick={login}
              className="text-white hover:text-accent font-bold text-sm"
            >
              Sign In
            </button>
            <button 
              onClick={login}
              className="bg-[#1475e1] hover:bg-[#1b80f0] text-white text-sm px-6 py-2.5 rounded font-bold shadow transition-colors"
            >
              Register
            </button>
          </div>
        )}
      </header>

      {/* Wallet Modal */}
      {showWallet && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-bg-panel border border-border-subtle rounded-xl w-full max-w-sm shadow-2xl overflow-hidden scale-in animate-in zoom-in-95 duration-200">
             <div className="flex items-center justify-between p-4 border-b border-border-medium bg-bg-inner/50">
               <div className="flex items-center gap-2 text-white font-bold">
                 <WalletIcon size={18} className="text-[#1475e1]" />
                 <span>Modifier la balance</span>
               </div>
               <button onClick={() => setShowWallet(false)} className="text-text-secondary hover:text-white">
                 <X size={20} />
               </button>
             </div>
             
             <div className="p-6 flex flex-col gap-5">
               <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Nouveau Montant (SC)</label>
                 <div className="relative bg-bg-inner border border-border-medium rounded-sm flex items-center shadow-inner hover:border-text-secondary transition-colors focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
                    <span className="pl-3 text-emerald-500 font-bold font-mono text-sm leading-none bg-emerald-500/20 w-5 h-5 flex items-center justify-center rounded-full shrink-0">T</span>
                    <input 
                      type="number"
                      value={walletAmount}
                      onChange={(e) => setWalletAmount(e.target.value)}
                      className="w-full bg-transparent text-white font-mono p-3 outline-none"
                      placeholder="0.00"
                      min="0"
                      step="1"
                    />
                 </div>
               </div>
               
               <div className="flex gap-3">
                 <button 
                   onClick={handleSetBalance}
                   className="w-full py-3 bg-[#1475e1] hover:bg-[#1b80f0] text-white font-bold rounded shadow-lg shadow-[#1475e1]/20 transition-all"
                 >
                   Définir le solde
                 </button>
               </div>
             </div>
          </div>
        </div>
      )}

      {showLeaderboard && user && (
        <Leaderboard onClose={() => setShowLeaderboard(false)} />
      )}
    </>
  );
}
