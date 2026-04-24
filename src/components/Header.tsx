import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { LogIn, LogOut, Trophy, Menu, Bell, Search, ChevronDown, Wallet as WalletIcon, X } from 'lucide-react';
import { Leaderboard } from './Leaderboard';

export function Header({ setView, toggleSidebar }: { setView: (view: 'home' | 'originals' | 'mines' | 'roulette' | 'keno' | 'dice' | 'plinko' | 'crash' | 'limbo' | 'wheel' | 'hilo' | 'dragon-tower' | 'flip') => void, toggleSidebar: () => void }) {
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
      <header className="h-20 border-b border-border-medium flex items-center justify-between px-4 md:px-8 bg-bg-panel sticky top-0 z-50">
        <div className="flex items-center gap-4 md:gap-6">
          <Menu className="text-text-secondary cursor-pointer hover:text-white transition-colors" onClick={toggleSidebar} />
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in bg-black/60 backdrop-blur-sm" onClick={() => setShowWallet(false)}>
          <div className="bg-bg-panel border border-border-medium rounded-lg w-full max-w-md shadow-2xl overflow-hidden scale-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
             <div className="flex items-center justify-between p-4 border-b border-border-medium bg-bg-inner/50">
               <div className="flex items-center gap-2 text-white font-bold text-lg">
                 <WalletIcon size={20} className="text-[#1475e1]" />
                 <span>Mon Portefeuille</span>
               </div>
               <button onClick={() => setShowWallet(false)} className="text-text-secondary hover:text-white transition-colors bg-bg-base p-1.5 rounded-md hover:bg-bg-inner">
                 <X size={20} />
               </button>
             </div>
             
             <div className="p-6 flex flex-col gap-6 relative overflow-hidden">
                <div className="bg-bg-inner p-4 rounded-lg flex flex-col gap-1 border border-border-medium relative overflow-hidden">
                   <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1475e1]/10 to-transparent pointer-events-none"></div>
                   <span className="text-text-secondary text-sm font-semibold">Solde Actuel</span>
                   <div className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold font-mono text-sm leading-none bg-emerald-500/20 w-6 h-6 flex items-center justify-center rounded-full shrink-0">T</span>
                      <span className="text-white text-3xl font-black font-mono tracking-tight">{Math.floor(balance).toLocaleString('en-US')}</span>
                   </div>
                </div>

                <div className="flex flex-col gap-3 p-4 bg-bg-base fill-blue-500 rounded-lg border border-border-medium shadow-inner">
                   <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse"></span>
                      Terminal de transaction
                   </h3>
                   <div className="flex gap-2">
                      <input 
                         type="number" 
                         placeholder="Montant fictif"
                         value={walletAmount}
                         onChange={(e) => setWalletAmount(e.target.value)}
                         className="flex-1 bg-bg-inner border border-border-medium rounded px-3 py-2.5 text-white font-mono text-sm outline-none focus:border-[#1475e1] focus:ring-1 focus:ring-[#1475e1] transition-all"
                      />
                      <button 
                         onClick={() => setWalletAmount('1000')}
                         className="px-4 bg-bg-inner border border-border-medium rounded text-xs font-bold text-text-secondary hover:text-white transition-colors"
                      >MAX</button>
                   </div>
                   <div className="flex gap-2 mt-1">
                      <button 
                         onClick={() => {
                            if (!walletAmount) return;
                            const btn = document.getElementById('btn-depot');
                            if (btn) {
                               btn.innerHTML = 'Traitement...';
                               btn.classList.add('opacity-50', 'pointer-events-none');
                            }
                            setTimeout(() => {
                               addBalance(Number(walletAmount));
                               setWalletAmount('');
                               if (btn) {
                                  btn.innerHTML = 'Succès !';
                                  btn.classList.remove('opacity-50');
                                  btn.classList.replace('text-[#00e676]', 'text-white');
                                  btn.classList.replace('bg-[#00e676]/10', 'bg-[#00e676]');
                               }
                               setTimeout(() => {
                                  if (btn) {
                                     btn.innerHTML = 'Dépôt';
                                     btn.classList.replace('bg-[#00e676]', 'bg-[#00e676]/10');
                                     btn.classList.replace('text-white', 'text-[#00e676]');
                                     btn.classList.remove('pointer-events-none');
                                  }
                               }, 1500);
                            }, 1200);
                         }} 
                         id="btn-depot"
                         className="flex-1 py-3 rounded bg-[#00e676]/10 text-[#00e676] font-bold text-sm border border-[#00e676]/30 hover:bg-[#00e676]/20 transition-all flex items-center justify-center uppercase"
                      >
                         Dépôt
                      </button>
                      <button 
                         onClick={() => {
                            if (!walletAmount) return;
                            const val = Number(walletAmount);
                            if (val > balance) {
                               alert('Fonds insuffisants');
                               return;
                            }
                            const btn = document.getElementById('btn-retrait');
                            if (btn) {
                               btn.innerHTML = 'Traitement...';
                               btn.classList.add('opacity-50', 'pointer-events-none');
                            }
                            setTimeout(() => {
                               subtractBalance(val);
                               setWalletAmount('');
                               if (btn) {
                                  btn.innerHTML = 'Succès !';
                                  btn.classList.remove('opacity-50');
                                  btn.classList.replace('text-[#ed4163]', 'text-white');
                                  btn.classList.replace('bg-white/5', 'bg-[#ed4163]');
                               }
                               setTimeout(() => {
                                  if (btn) {
                                     btn.innerHTML = 'Retrait';
                                     btn.classList.replace('bg-[#ed4163]', 'bg-white/5');
                                     btn.classList.replace('text-white', 'text-[#ed4163]');
                                     btn.classList.remove('pointer-events-none');
                                  }
                               }, 1500);
                            }, 1200);
                         }} 
                         id="btn-retrait"
                         className="flex-1 py-3 rounded bg-white/5 text-[#ed4163] font-bold text-sm border border-border-medium hover:bg-white/10 transition-all flex items-center justify-center uppercase"
                      >
                         Retrait
                      </button>
                   </div>
                </div>

               <div className="flex gap-3">
                 <button 
                   onClick={handleSetBalance}
                   className="w-full py-3.5 bg-[#1475e1] hover:bg-[#1b80f0] text-white font-bold rounded shadow-lg shadow-[#1475e1]/20 transition-all text-sm uppercase tracking-wide"
                 >
                   Définir le solde total
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
