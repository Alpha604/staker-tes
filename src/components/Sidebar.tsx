import React from 'react';
import { cn } from '../lib/utils';
import { Home, Trophy, Swords, Zap, Wallet, Menu } from 'lucide-react';

export function Sidebar({ view, setView }: { view: string, setView: (v: string) => void }) {
  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-80px)] bg-bg-panel border-r border-border-medium sticky top-20 left-0 overflow-y-auto z-40">
       <div className="p-4 flex flex-col gap-2">
         <button 
           onClick={() => setView('home')}
           className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-md font-bold transition-colors", view === 'home' ? 'bg-bg-inner text-white' : 'text-text-secondary hover:bg-bg-inner hover:text-white')}
         >
           <Home size={18} />
           Accueil
         </button>
         <button 
           onClick={() => setView('originals')}
           className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-md font-bold transition-colors", view === 'originals' ? 'bg-bg-inner text-white' : 'text-text-secondary hover:bg-bg-inner hover:text-white')}
         >
           <Zap size={18} />
           Stake Originals
         </button>
         <div className="h-px w-full bg-border-medium my-2"></div>
         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md font-bold text-text-secondary hover:bg-bg-inner hover:text-white transition-colors">
           <Trophy size={18} />
           Leaderboard
         </button>
         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md font-bold text-text-secondary hover:bg-bg-inner hover:text-white transition-colors">
           <Swords size={18} />
           Défis
         </button>
       </div>
    </aside>
  );
}
