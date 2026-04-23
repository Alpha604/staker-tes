import React from 'react';
import { cn } from '../lib/utils';
import { Target } from 'lucide-react';

export function Home({ setView }: { setView: (view: 'home' | 'mines' | 'roulette' | 'keno' | 'dice' | 'plinko' | 'crash' | 'limbo' | 'wheel') => void }) {

  const games = [
    { 
      name: "MINES", players: "3 521", bg: "from-[#2094f3] to-[#0c439c]", action: () => setView('mines'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl translate-y-[-5%] overflow-visible">
           <polygon points="50,15 85,40 50,85 15,40" fill="#00e676" />
           <polygon points="50,15 85,40 50,45 15,40" fill="#69f0ae" opacity="0.8" />
           <polygon points="15,40 50,45 50,85" fill="#00c853" opacity="0.6" />
           <circle cx="25" cy="25" r="14" fill="#d50000" />
           <path d="M 25 11 Q 35 0 45 15" stroke="#fff" strokeWidth="2" fill="none" strokeDasharray="2 2" />
           <circle cx="45" cy="15" r="4" fill="#ffea00" />
        </svg>
      )
    },
    { 
      name: "DICE", players: "2 608", bg: "from-[#ab47bc] to-[#4a148c]", action: () => setView('dice'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl translate-y-[-5%]">
           <rect x="25" y="15" width="45" height="45" rx="8" fill="#fff" transform="rotate(-15 45 35)" />
           <circle cx="35" cy="25" r="4" fill="#000" transform="rotate(-15 45 35)"/>
           <circle cx="55" cy="45" r="4" fill="#000" transform="rotate(-15 45 35)"/>
           
           <rect x="40" y="40" width="50" height="50" rx="8" fill="#ff1744" transform="rotate(10 65 65)" />
           <circle cx="50" cy="50" r="4" fill="#fff" transform="rotate(10 65 65)"/>
           <circle cx="65" cy="65" r="4" fill="#fff" transform="rotate(10 65 65)"/>
           <circle cx="80" cy="80" r="4" fill="#fff" transform="rotate(10 65 65)"/>
        </svg>
      )
    },
    { 
      name: "PLINKO", players: "1 573", bg: "from-[#f50057] to-[#880e4f]", action: () => setView('plinko'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl translate-y-[-5%]">
           <circle cx="30" cy="70" r="3" fill="#fff" opacity="0.5" />
           <circle cx="50" cy="70" r="3" fill="#fff" opacity="0.5" />
           <circle cx="70" cy="70" r="3" fill="#fff" opacity="0.5" />
           <circle cx="40" cy="55" r="3" fill="#fff" opacity="0.5" />
           <circle cx="60" cy="55" r="3" fill="#fff" opacity="0.5" />
           <circle cx="50" cy="40" r="3" fill="#fff" opacity="0.5" />
           
           <circle cx="50" cy="30" r="8" fill="#ffea00" />
           <circle cx="50" cy="30" r="5" fill="#fbc02d" />
           
           <rect x="-10" y="5" width="70" height="25" fill="#ffea00" transform="rotate(-15)" />
           <text x="10" y="22" fill="#d50000" fontSize="12" fontWeight="900" transform="rotate(-15)">10000×</text>
        </svg>
      )
    },
    { 
      name: "LIMBO", players: "2 226", bg: "from-[#ff9100] to-[#e65100]", action: () => setView('limbo'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] drop-shadow-2xl translate-y-[-10%] translate-x-[-10%]">
           <path d="M 0 100 C 30 80, 50 30, 100 0 L 100 100 Z" fill="#ffb300" opacity="0.3" />
           <rect x="20" y="40" width="70" height="30" rx="4" fill="#fff" transform="rotate(-30 50 50)" />
           <text x="40" y="60" fill="#e65100" fontSize="16" fontWeight="900" transform="rotate(-30 50 50)">900×</text>
        </svg>
      )
    },
    { 
      name: "BLACKJACK", players: "1 215", bg: "from-[#ff1744] to-[#b71c1c]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] drop-shadow-2xl translate-y-[-10%]">
           <rect x="15" y="30" width="35" height="50" rx="3" fill="#fff" transform="rotate(-20 30 55)" />
           <text x="25" y="45" fill="#1565c0" fontSize="16" fontWeight="900" transform="rotate(-20 30 55)">Stake</text>
           
           <rect x="40" y="20" width="40" height="55" rx="3" fill="#fff" transform="rotate(15 60 45)" />
           <text x="45" y="35" fill="#d50000" fontSize="14" fontWeight="bold" transform="rotate(15 60 45)">A</text>
           <polygon points="60,40 65,48 60,56 55,48" fill="#d50000" transform="rotate(15 60 45)"/>
        </svg>
      )
    },
    { 
      name: "CHICKEN", players: "682", bg: "from-[#29b6f6] to-[#0277bd]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl translate-y-[-5%] relative">
           {/* Bone */}
           <path d="M 75 30 L 85 40 L 90 35 L 85 25 Z" fill="#fff" />
           <circle cx="85" cy="25" r="4" fill="#fff" />
           <circle cx="90" cy="35" r="4" fill="#fff" />
           {/* Chicken body */}
           <circle cx="50" cy="55" r="22" fill="#fff" />
           <circle cx="45" cy="35" r="14" fill="#fff" />
           <path d="M 33 25 Q 40 10 48 20" fill="#ff3d00" />
           <circle cx="40" cy="32" r="2" fill="#000" />
           <polygon points="32,35 25,38 32,41" fill="#ffea00" />
           {/* Wing */}
           <path d="M 50 50 Q 30 50 35 65 Z" fill="#eee" />
        </svg>
      )
    },
    { 
      name: "KENO", players: "1 411", bg: "from-[#26c6da] to-[#006064]", action: () => setView('keno'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl translate-y-[5%]">
           <rect x="15" y="15" width="20" height="20" rx="4" fill="#1565c0" opacity="0.6"/>
           <rect x="40" y="15" width="20" height="20" rx="4" fill="#00e676" />
           <text x="50" y="30" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
           <rect x="65" y="15" width="20" height="20" rx="4" fill="#1565c0" opacity="0.6"/>
           
           <rect x="15" y="40" width="20" height="20" rx="4" fill="#1565c0" opacity="0.6"/>
           <text x="25" y="55" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.5">10</text>
           <rect x="40" y="40" width="20" height="20" rx="4" fill="#1565c0" opacity="0.6"/>
           <rect x="65" y="40" width="20" height="20" rx="4" fill="#1565c0" opacity="0.6"/>
           <text x="75" y="55" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.5">11</text>
        </svg>
      )
    },
    { 
      name: "MOLES", players: "675", bg: "from-[#29b6f6] to-[#01579b]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] drop-shadow-xl translate-y-[-5%] overflow-visible">
           <path d="M 20 80 Q 50 90 80 80 L 90 100 L 10 100 Z" fill="#1565c0" />
           <circle cx="50" cy="50" r="20" fill="#ffb300" />
           <rect x="40" y="45" width="20" height="8" rx="4" fill="#fff" />
           <circle cx="45" cy="40" r="3" fill="#000" />
           <circle cx="55" cy="40" r="3" fill="#000" />
           {/* Mallet */}
           <rect x="70" y="20" width="8" height="40" fill="#8d6e63" transform="rotate(-30 75 40)" />
           <rect x="60" y="20" width="25" height="15" rx="4" fill="#9e9e9e" transform="rotate(-30 75 40)" />
           <circle cx="85" cy="27.5" r="7.5" fill="#3f51b5" transform="rotate(-30 75 40)" />
           <circle cx="55" cy="27.5" r="7.5" fill="#3f51b5" transform="rotate(-30 75 40)" />
        </svg>
      )
    },
    // Standard rows starting here
    { 
      name: "CRASH", players: "1 419", bg: "from-[#ffca28] to-[#f57c00]", action: () => setView('crash'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] drop-shadow-xl translate-y-[5%]">
           <path d="M -10 90 Q 50 80 90 -10 L 100 -10 L 100 100 L -10 100 Z" fill="#fff" opacity="0.3" />
           <path d="M -10 90 Q 50 80 90 -10" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
           <circle cx="90" cy="-10" r="12" fill="#fff" />
        </svg>
      )
    },
    { 
      name: "DRAGON TOWER", players: "656", bg: "from-[#ff7043] to-[#bf360c]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] drop-shadow-xl translate-y-[-5%] overflow-visible">
           <path d="M 20 100 L 30 40 Q 50 20 70 40 L 80 100 Z" fill="#ffab91" />
           <circle cx="50" cy="50" r="15" fill="#d84315" />
           <path d="M 10 60 Q 30 10 50 0 Q 70 10 90 60" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.8"/>
        </svg>
      )
    },
    { 
      name: "HILO", players: "566", bg: "from-[#66bb6a] to-[#1b5e20]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] drop-shadow-xl translate-y-[-10%] translate-x-[5%] overflow-visible">
           <rect x="30" y="30" width="50" height="70" rx="4" fill="#fff" transform="rotate(15 55 65)" />
           <text x="40" y="55" fill="#d50000" fontSize="16" fontWeight="bold" transform="rotate(15 55 65)">A</text>
           <polygon points="55,60 65,75 55,90 45,75" fill="#d50000" transform="rotate(15 55 65)"/>
           {/* Up down toggle */}
           <rect x="-5" y="30" width="25" height="50" rx="12.5" fill="#fff" opacity="0.8" />
           <circle cx="7.5" cy="40" r="8" fill="#1e88e5" />
           <circle cx="7.5" cy="65" r="8" fill="#e53935" />
        </svg>
      )
    },
    { 
      name: "WHEEL", players: "291", bg: "from-[#ffca28] to-[#ef6c00]", action: () => setView('wheel'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] drop-shadow-xl translate-y-[10%] overflow-visible">
           <circle cx="50" cy="50" r="40" fill="none" stroke="#fff" strokeWidth="10" opacity="0.8" />
           <circle cx="50" cy="50" r="40" fill="none" stroke="#ff3d00" strokeWidth="10" strokeDasharray="30 200" />
           <circle cx="50" cy="50" r="40" fill="none" stroke="#00e676" strokeWidth="10" strokeDasharray="0 60 30 200" />
           <circle cx="50" cy="50" r="40" fill="none" stroke="#1e88e5" strokeWidth="10" strokeDasharray="0 130 30 200" />
           <polygon points="45,5 55,5 50,20" fill="#d50000" />
        </svg>
      )
    },
    { 
      name: "FLIP", players: "303", bg: "from-[#66bb6a] to-[#2e7d32]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
           <ellipse cx="50" cy="30" rx="25" ry="10" fill="#1e88e5" />
           <path d="M 25 30 L 25 40 Q 50 60 75 40 L 75 30 Z" fill="#1565c0" />
           
           <ellipse cx="50" cy="65" rx="35" ry="12" fill="#ffb300" />
           <path d="M 15 65 L 15 75 Q 50 95 85 75 L 85 65 Z" fill="#ffa000" />
        </svg>
      )
    },
    { 
      name: "PUMP", players: "269", bg: "from-[#ef5350] to-[#b71c1c]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] drop-shadow-xl translate-y-[-5%] overflow-visible">
           <circle cx="50" cy="50" r="35" fill="#fff" />
           <rect x="45" y="85" width="10" height="20" fill="#fff" />
        </svg>
      )
    },
    { 
      name: "SNAKES", players: "263", bg: "from-[#4dd0e1] to-[#00838f]",
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[110%] h-[110%] drop-shadow-xl translate-y-[10%] overflow-visible">
           <path d="M 30 100 C 30 60, 80 70, 80 40 C 80 15, 30 20, 50 0" fill="none" stroke="#fff" strokeWidth="15" strokeLinecap="round" />
           <circle cx="45" cy="5" r="2" fill="#d50000" />
           <circle cx="55" cy="5" r="2" fill="#d50000" />
           <rect x="55" y="60" width="30" height="15" rx="7.5" fill="#ffea00" />
           <text x="60" y="71" fill="#000" fontSize="8" fontWeight="bold">18×</text>
        </svg>
      )
    },
    { 
      name: "ROULETTE", players: "160", bg: "from-[#43b359] to-[#127025]", action: () => setView('roulette'),
      art: () => (
        <svg viewBox="0 0 100 100" className="w-[140%] h-[140%] drop-shadow-xl translate-x-[-15%] translate-y-[-10%] overflow-visible">
           {/* Wheel Top Right */}
           <circle cx="85" cy="15" r="40" fill="#213743" stroke="#15242d" strokeWidth="8"/>
           <path d="M 85 15 L 125 15 A 40 40 0 0 1 85 55 Z" fill="#ed4163" />
           <path d="M 85 15 L 45 15 A 40 40 0 0 1 85 -25 Z" fill="#ed4163" />
           <circle cx="85" cy="15" r="15" fill="#fbc02d" />
           <path d="M 85 5 L 85 25 M 75 15 L 95 15" stroke="#15242d" strokeWidth="3" />
           
           {/* Board Bottom Left */}
           <g transform="rotate(-10 30 70) translate(20 50)">
              <rect x="0" y="0" width="60" height="40" fill="#213743" rx="2"/>
              <rect x="0" y="0" width="20" height="40" fill="#43b359" rx="2"/>
              <rect x="20" y="0" width="20" height="20" fill="#ed4163" />
              <rect x="40" y="20" width="20" height="20" fill="#ed4163" />
              <text x="30" y="14" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">3</text>
              <text x="30" y="34" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">2</text>
              <text x="50" y="14" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">6</text>
              <text x="50" y="34" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">5</text>
           </g>
           
           <circle cx="75" cy="65" r="6" fill="#f44336" stroke="#fff" strokeWidth="2" strokeDasharray="3 3"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-8 flex flex-col gap-8 bg-bg-base/50 min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-3 gap-y-6">
        {games.map((g) => (
          <div key={g.name} className="flex flex-col gap-1.5 group cursor-pointer" onClick={() => g.action ? g.action() : alert('This game is coming soon!')}>
            <div className={cn(
               "aspect-[3/4] w-full rounded-xl overflow-hidden relative shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl flex flex-col items-center justify-center p-0",
               "bg-gradient-to-br", g.bg
            )}>
               {/* Custom Art Illustration */}
               <div className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none">
                 <g.art />
               </div>

               {/* Text area at the bottom */}
               <div className="absolute bottom-4 inset-x-0 flex flex-col items-center justify-end z-10">
                  <h3 className="font-extrabold text-white text-[22px] tracking-wide leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{g.name}</h3>
                  <span className="text-[9px] text-white/70 font-semibold tracking-[0.15em] uppercase mt-1.5 drop-shadow-md">Stake Originals</span>
               </div>
            </div>

            {/* Players footer */}
            <div className="flex items-center gap-1.5 px-1 mt-0.5">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
               <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight">{g.players}</span>
               <span className="text-[11px] sm:text-xs text-text-secondary">joueurs</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
