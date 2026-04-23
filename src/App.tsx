import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Mines } from './components/Mines';
import { Roulette } from './components/Roulette';
import { Keno } from './components/Keno';
import { Dice } from './components/Dice';
import { Plinko } from './components/Plinko';
import { Crash } from './components/Crash';
import { Limbo } from './components/Limbo';
import { Wheel } from './components/Wheel';

export default function App() {
  const [view, setView] = useState<'home' | 'mines' | 'roulette' | 'keno' | 'dice' | 'plinko' | 'crash' | 'limbo' | 'wheel'>('home');

  return (
    <UserProvider>
      <div className="min-h-screen bg-bg-base text-text-primary selection:bg-accent selection:text-bg-base overflow-x-hidden">
        <Header setView={setView as any} />
        <main className="w-full">
           {view === 'home' && <Home setView={setView as any} />}
           {view === 'mines' && <Mines />}
           {view === 'roulette' && <Roulette />}
           {view === 'keno' && <Keno />}
           {view === 'dice' && <Dice />}
           {view === 'plinko' && <Plinko />}
           {view === 'crash' && <Crash />}
           {view === 'limbo' && <Limbo />}
           {view === 'wheel' && <Wheel />}
        </main>
      </div>
    </UserProvider>
  );
}
