import { MapPin, Phone, CreditCard, Copy, ShieldCheck } from "lucide-react";
import { type Posko } from "../data/poskoData";

export default function PoskoCard({ posko }: { posko: Posko }) {
  const copyRekening = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin!");
  };

  return (
    <div className="group bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] h-auto">
      <div className="relative h-60 overflow-hidden">
        <img src={posko.image} alt={posko.nama} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            <ShieldCheck size={12} /> Terverifikasi
          </span>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{posko.nama}</h2>
        
        <div className="space-y-3 text-sm text-slate-400 mb-6">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-blue-500 shrink-0" />
            <span>{posko.alamat}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-blue-500 shrink-0" />
            <span>{posko.pic}</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard size={14} className="text-slate-500" />
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Donasi & Rekening</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-mono text-blue-300 truncate mr-2">{posko.rekening}</p>
            <button onClick={() => copyRekening(posko.rekening)} className="flex items-center gap-1 text-[10px] bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-3 py-1.5 rounded-lg transition-all border border-blue-500/30">
              <Copy size={12} /> Salin
            </button>
          </div>
        </div>

        {/* UPDATE: Menghapus line-clamp-3 agar teks muncul semua */}
        <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-3">
          {posko.deskripsi}
        </p>
      </div>
    </div>
  );
}