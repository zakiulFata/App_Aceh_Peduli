import { ArrowRight, Share2, Heart, AlertCircle, MapPin, Navigation, Megaphone, Camera, Sparkles } from "lucide-react";
import PoskoCard from "../components/PoskoCard";
import Navbar from "../components/Navbar"; 
import { poskoData } from "../data/poskoData";

// --- IMPORT ASET GAMBAR ---
import doc1 from "../assets/images/doc1.jpeg";
import doc2 from "../assets/images/doc2.jpg";
import doc3 from "../assets/images/doc3.jpg";
import doc4 from "../assets/images/doc4.jpg";
import doc5 from "../assets/images/doc5.jpg"; 
import doc6 from "../assets/images/doc6.jpeg";

export default function Home() {
  const shareToWA = () => {
    const text = `Mari bersama ringankan beban saudara kita. Akses informasi resmi posko dan saluran donasi banjir Aceh di sini: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 selection:bg-blue-500/30 pb-20">
      
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id= "home" className="relative h-[85vh] pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={doc1} className="w-full h-full object-cover brightness-[0.2] blur-[1px] scale-105" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-[#020617]/80 to-[#020617]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
             <Heart size={12} fill="currentColor" /> Bisnis Digital Untuk Kemanusiaan
          </div>
          {/* PERBAIKAN 1: Ukuran font mobile disesuaikan agar lebih rapi */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none sm:leading-[0.9]">
            ACEH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">PEDULI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Pusat informasi terpadu untuk koordinasi bantuan dan penyaluran donasi bagi masyarakat terdampak banjir di seluruh Aceh.
          </p>
          <a href="#posko" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-900/20 hover:scale-105 mx-auto w-fit">
            Eksplorasi Posko <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-amber-500">
              <AlertCircle size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Urgensi Bantuan</span>
            </div>
            {/* PERBAIKAN 2: Ukuran font mobile dikecilkan ke text-3xl */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter">
              Merespon Dampak Banjir <br/> di Seluruh Aceh
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg text-justify">
              Intensitas hujan ekstrem di penghujung Desember 2025 memicu banjir bandang, tanah longsor yang merendam ribuan pemukiman di Sumatra khusus nya di Aceh. Kondisi darurat kini meluas ke wilayah kabupaten-kabupaten di Aceh, khususnya di Bireun yang memutuskan jempatan yang menjadi rute vital ke berbagai wilayah, di mana akses logistik mulai terhambat dan kebutuhan pokok pengungsi meningkat drastis. Aceh Peduli hadir memverifikasi data posko secara real-time untuk memastikan setiap bantuan Anda sampai ke garda terdepan yang paling membutuhkan secara transparan.
            </p>
            
            <div className="p-6 rounded-[2rem] bg-blue-600/10 border border-blue-500/20 flex gap-4 items-start shadow-xl">
              <MapPin className="text-blue-400 shrink-0 mt-1" size={24} /> 
              <p className="text-sm text-blue-100 leading-relaxed italic">
                <strong>Informasi bagi Warga Lokal:</strong> Lokasi di bawah ini merupakan titik koordinasi aktif di area Banda Aceh & Aceh Besar untuk memfasilitasi penjemputan bantuan fisik.
              </p>
            </div>
          </div>

          {/* Bento Grid Responsive (Dari perbaikan sebelumnya) */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-3 md:gap-4 h-auto md:h-[600px] auto-rows-[150px] md:auto-rows-auto">
            <div className="col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden border border-white/10 group relative">
              <img src={doc2} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75" alt="Doc 2" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex items-end">
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Dokumentasi Posko</span>
              </div>
            </div>
            <div className="col-span-1 row-span-2 md:row-span-3 rounded-[2.5rem] overflow-hidden border border-white/10 group">
              <img src={doc3} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Doc 3" />
            </div>
            <div className="col-span-1 row-span-1 rounded-[2.5rem] bg-indigo-600/20 border border-indigo-400/20 flex flex-col items-center justify-center backdrop-blur-md shadow-xl">
              <Navigation size={24} className="text-indigo-400 mb-2 animate-bounce" />
              <p className="text-[10px] font-black text-white tracking-tighter uppercase">Valid</p>
            </div>
            <div className="col-span-1 row-span-1 rounded-[2.5rem] overflow-hidden border border-white/10 group">
              <img src={doc4} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Doc 4" />
            </div>
            <div className="col-span-1 md:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden border border-white/10 group">
              <img src={doc6} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Doc 6" />
            </div>
            <div className="col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden border border-white/10 group">
              <img src={doc5} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Doc 5" />
            </div>
            <div className="col-span-1 row-span-1 rounded-[2.5rem] bg-emerald-500/10 border border-emerald-400/20 flex flex-col items-center justify-center p-4">
               <Camera size={20} className="text-emerald-400 mb-1" />
               <span className="text-[8px] font-bold text-slate-400 text-center leading-none uppercase tracking-widest">Visual Mahasiswa</span>
            </div>
            <div className="col-span-2 row-span-1 rounded-[1.5rem] md:rounded-[2.5rem] bg-blue-600 p-4 md:p-6 flex flex-col justify-end relative overflow-hidden group h-24 md:h-auto">
              {/* Sparkles: Ukuran disesuaikan agar tidak menutupi teks di mobile */}
              <Sparkles className="absolute -top-1 -right-1 text-white/20 w-12 h-12 md:w-16 md:h-16 group-hover:rotate-12 transition-transform" />
              
              {/* Text: Ukuran diturunkan ke text-base di mobile agar lebih seimbang */}
              <p className="text-base md:text-2xl font-black text-white leading-none tracking-tighter uppercase">
                Solidaritas <br className="md:hidden" /> Digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POSKO SECTION */}
      <section id="posko" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 underline decoration-blue-600 decoration-4 underline-offset-8 uppercase tracking-tighter">Saluran Bantuan Resmi</h2>
          <p className="text-slate-500 max-w-lg mx-auto mt-4 text-sm">Hubungi atau kunjungi titik koordinasi di bawah ini untuk menyalurkan bantuan Anda secara tepat sasaran.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {poskoData.map((posko) => (
            <PoskoCard key={posko.id} posko={posko} />
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section id="share" className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-900 rounded-[3.5rem] p-12 text-center relative overflow-hidden shadow-2xl border border-white/10 group">
          <div className="relative z-10">
            <Megaphone size={40} className="mx-auto text-white mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tighter uppercase leading-none">Jadilah Jembatan Kebaikan</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed text-lg italic">
              "Setiap informasi yang Anda bagikan memperbesar peluang bantuan sampai ke tangan yang tepat. Bantu saudara kita melalui jaringan sosial Anda."
            </p>
            <button 
              onClick={shareToWA}
              className="flex items-center gap-3 mx-auto bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95 group/btn"
            >
              <Share2 size={20} className="group-hover/btn:rotate-12 transition-transform" />
              Bagikan via WhatsApp Sekarang
            </button>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl" />
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-800/50 py-12 text-center bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] tracking-widest uppercase font-bold">
          <p>&copy; 2025 <span className="text-white italic">Zakiul Fata</span>. All Rights Reserved.</p>
          <p>UIN Ar-Raniry Banda Aceh</p>
        </div>
      </footer>

    </div>
  );
}