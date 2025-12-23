import { useState } from "react";
// Hanya menyisakan Menu dan X untuk kebutuhan fungsional mobile
import { Menu, X } from "lucide-react"; 
import myLogo from "../assets/logo.png"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-500 hover:bg-blue-900/40 hover:border-blue-500/30">
        
        {/* BAR UTAMA */}
        <div className="flex items-center justify-between px-6 py-3">
          {/* SISI KIRI: Logo & Identitas */}
          <div className="flex items-center gap-3">
            <img src={myLogo} alt="Logo Aceh Peduli" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-white">
                <span className="font-black tracking-tighter text-lg leading-none uppercase">
                  Aceh Peduli
                </span>
              </div>
              <span className="text-[8px] text-blue-400 tracking-[0.3em] uppercase">
                By Zakiul Fata
              </span>
            </div>
          </div>

          {/* SISI KANAN: Menu Desktop (Tanpa Icon) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-300 hover:text-blue-400 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-90">
              Home
            </a>
            <a href="#about" className="text-slate-300 hover:text-blue-400 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-90">
              Tentang
            </a>
            <a href="#posko" className="text-slate-300 hover:text-blue-400 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-90">
              Posko
            </a>
            <a href="#share" className="text-slate-300 hover:text-blue-400 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-90">
              Aksi
            </a>
          </div>

          {/* SISI KANAN: Burger Button (Tetap menggunakan icon untuk navigasi mobile) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU MOBILE (Tanpa Icon) */}
        {isOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
            <a 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-blue-400 text-xs font-bold uppercase tracking-widest p-2"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-blue-400 text-xs font-bold uppercase tracking-widest p-2"
            >
              Tentang
            </a>
            <a 
              href="#posko" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-blue-400 text-xs font-bold uppercase tracking-widest p-2"
            >
              Posko
            </a>
            <a 
              href="#share" 
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-blue-400 text-xs font-bold uppercase tracking-widest p-2"
            >
              Aksi
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}