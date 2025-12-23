import posko1 from "../assets/images/posko1.jpeg";
import posko2 from "../assets/images/posko2.jpg";
import posko3 from "../assets/images/posko3.jpg";

export type Posko = {
  id: number;
  nama: string;
  alamat: string;
  pic: string;
  rekening: string;
  deskripsi: string;
  image: string;
};

export const poskoData: Posko[] = [
  {
    id: 1,
    nama: "Posko Lamreung",
    alamat: "Jl. Lamreung, Krueng Barona Jaya, Aceh Besar",
    pic: "Bang Baron -> 0821-6350-2004",
    rekening: "-",
    deskripsi: "Pusat penerimaan bantuan desa Mns.Papeun. Menerima bantuan berupa makanan, Pakaian, dan dana tunai. Berhasil menyalurkan tahap 1 ke Bireuen dan sedang bersiap untuk tahap berikutnya.",
    image: posko1,
  },
  {
    id: 2,
    nama: "HMIF KIP USK Peduli",
    alamat: "Jl. Panglima Nyak Makam, Simpang BPKP, Banda Aceh",
    pic: "M. Iqbal Aulia -> 0822-7724-5024",
    rekening: "BSI 7235328555 a.n. Ade Via Rusmidar",
    deskripsi: "Dikelola oleh mahasiswa untuk menghimpun bantuan makanan, pakaian, dan dana tunai bagi warga terdampak banjir. Tahap pertama sukses disalurkan ke wilayah Pidie Jaya dan Bireun.",
    image: posko2,
  },
  {
    id: 3,
    nama: "Posko DEMA UINAR",
    alamat: "UIN Ar-Raniry Banda Aceh",
    pic: "tengku Raja Aulia Habibie -> 0813-2956-1507",
    rekening: "BSI 7180784947 a.n Tengku Raja Aulia Habibie",
    deskripsi: "melakukan pengumpulan donasi  dan menyerahkan langsung donasi melalui relawan dan mengerahkan 23 anggota dema sebagai relawan di wiliyah terdampak banjir yaitu Aceh Tamiang. ",
    image: posko3,
  },
];