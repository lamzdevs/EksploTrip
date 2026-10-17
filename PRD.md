# Product Requirements Document (PRD) - EksploTrip.

> **Status Dokumen:** Lengkap (Kompilasi Penugasan Minggu ke-1 s.d. Minggu ke-6)  
> **Program:** Penugasan Divisi Web & UI/UX Developer - Kegiatan MSIB Batch 5 PT Vinix Seven Aurum  
> **Produk:** **EksploTrip.** (*Temukan Destinasi, Wujudkan Eksplorasi*)  
> **Cakupan Wilayah:** Kota dan Kabupaten Bogor, Jawa Barat  

---

## Informasi Tim Penyusun

| Nama Anggota | Asal Perguruan Tinggi | Divisi |
| :--- | :--- | :--- |
| **Nuralam Sukmawijaya** | Institut Bisnis dan Informatika (IBI) Kesatuan | Web & UI/UX Developer |
| **Syahfikri Maulana Akbar** | Institut Bisnis dan Informatika (IBI) Kesatuan | Web & UI/UX Developer |
| **Malyasanasy Rengganis P. P.** | Institut Bisnis dan Informatika (IBI) Kesatuan | Web & UI/UX Developer |
| **Rafa Putra Rahmadi** | Universitas Pakuan | Web & UI/UX Developer |
| **Elsya Putri Azzahra** | Institut Bisnis dan Informatika (IBI) Kesatuan | Web & UI/UX Developer |

---

## Daftar Tautan Referensi & Artefak Proyek

| Artefak / Dokumen | Tautan |
| :--- | :--- |
| **Miro Design Thinking Map (Minggu 2)** | [Miro Board Design Thinking Map](https://miro.com/app/board/uXjVHobWIHM=/?share_link_id=611207781162) |
| **Canva Empathy Map (Minggu 3)** | [Canva Empathy Map](https://canva.link/3iirxtagnr1xxhs) |
| **Canva User Persona (Minggu 3)** | [Canva User Persona](https://canva.link/kzk2e14zzill40d) |
| **Canva User Journey Map (Minggu 3)** | [Canva User Journey Map](https://canva.link/lyjwsqddwcvcmg4) |
| **Google Drive Dokumentasi Wawancara (Minggu 3)** | [Folder Google Drive Wawancara](https://drive.google.com/drive/folders/1sX-FQY_4ZtImJ4A-8I9FZe0bHjJ2PbYU?usp=sharing) |
| **Figma User Flow (Minggu 4)** | [Figma User Flow EksploTrip](https://www.figma.com/design/7at9IJYSFAqIXx5M4giWUM/EKSPLOTRIP.?node-id=137-27&t=sNGIhbjTTiEWulUL-1) |
| **Figma Wireframe Low-Fidelity (Minggu 4)** | [Figma Wireframe Desktop 1440x1024](https://www.figma.com/design/7at9IJYSFAqIXx5M4giWUM/EKSPLOTRIP.?node-id=0-1&t=sNGIhbjTTiEWulUL-1) |
| **Figma Style Guide & High-Fidelity Design (Minggu 5)** | [Figma Style Guide & Hi-Fi EksploTrip.](https://www.figma.com/design/ukAlWKC26nDW0Vz3H2Soe1/EksploTrip.?node-id=0-1&t=lKX1yuPSSjN0HoyM-1) |
| **Figma Interactive Prototype (Minggu 5)** | [Figma Prototype EksploTrip.](https://www.figma.com/proto/ukAlWKC26nDW0Vz3H2Soe1/EksploTrip.?page-id=1%3A5&node-id=44-34&viewport=148%2C259%2C0.08&t=VNT7xefdW0VSZyLq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44%3A34) |
| **Google Drive Implementasi HTML5 & Validasi W3C (Minggu 6)** | [Folder Google Drive Minggu 6](https://drive.google.com/drive/folders/1Y3CLDmZX9PeYH0WbqEKIfSop6gcFQu1f?usp=sharing) |
| **W3C Nu HTML Validator** | [W3C Nu HTML Checker](https://validator.w3.org/nu/) |

---

# BAGIAN 1: EKSPLORASI MASALAH, VALIDASI RISET, & KONSEP SOLUSI (MINGGU KE-1)

## 1.1 Penyaringan Lima Masalah Awal
Pada tahap inisiasi proyek, tim mengidentifikasi 5 kandidat permasalahan utama sebelum mengerucutkan fokus pada satu masalah utama:

| No | Masalah | Target User | Dampak | Situasi |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Ketiadaan platform terintegrasi yang menyajikan informasi wisata alam (curug dan jalur pendakian) di Bogor secara komprehensif, mencakup rute resmi, fasilitas penunjang, serta transparansi biaya tanpa risiko pungutan liar (pungli).** *(Masalah Terpilih)* | Remaja, mahasiswa, dan pekerja muda (rentang usia 13-35 tahun) di wilayah Jabodetabek. | Ketidakpastian anggaran akibat pungli liar, kebingungan rute saat di lokasi, serta potensi masalah keamanan dan kenyamanan selama berwisata. | Perencanaan liburan akhir pekan (*short getaway*) atau kegiatan pendakian ringan tanpa pendamping lokal. |
| **2** | Kesulitan memperoleh informasi indekos yang akurat, terverifikasi, dan transparan mengenai rincian harga, kelengkapan fasilitas, serta estimasi jarak tempuh ke titik aktivitas utama. | Mahasiswa baru, orang tua mahasiswa, dan pekerja perantau. | Pemborosan waktu, tenaga, dan biaya untuk survei langsung; risiko penipuan atau mendapatkan tempat tinggal yang tidak sesuai kebutuhan maupun anggaran. | Menjelang tahun ajaran baru perkuliahan atau ketika baru mulai bekerja di luar domisili asal dan harus segera menetap. |
| **3** | Kendala dalam pencatatan, pemisahan prioritas, dan pengelolaan alokasi anggaran belanja harian/bulanan di tengah keterbatasan pendapatan dan tingginya biaya hidup. | Mahasiswa (awal hingga akhir) dan ibu rumah tangga (IRT). | Terjadinya defisit anggaran (*overbudgeting*), dana habis sebelum akhir bulan, ketiadaan alokasi dana darurat, dan timbulnya stres finansial. | Menghadapi siklus penerimaan uang saku atau belanja dapur bulanan dengan jumlah pengeluaran yang fluktuatif. |
| **4** | Informasi tugas, proyek, dan pengumuman akademik tersebar di berbagai saluran terpisah (WhatsApp, LMS, surel), menyebabkan penumpukan jadwal dan hilangnya pengingat terpusat. | Mahasiswa aktif perguruan tinggi. | Terlewat batas waktu pengumpulan tugas (*missed deadline*), penurunan performa akademik, dan kecemasan tinggi akibat pengerjaan tugas secara mendadak. | Memasuki minggu sibuk perkuliahan, pekan proyek kelompok, atau periode evaluasi (UTS dan UAS). |
| **5** | Belum tersedianya direktori atau etalase digital terpusat untuk mempromosikan, mengelompokkan, dan memvalidasi bisnis produk maupun jasa yang dirintis oleh mahasiswa. | Mahasiswa pemilik usaha (UMKM kampus) dan civitas akademika/masyarakat umum calon konsumen. | Skala pemasaran produk terbatas pada lingkaran pertemanan terdekat, perkembangan bisnis lambat, dan calon pembeli kesulitan mencari produk lokal kampus yang tepercaya. | Mahasiswa yang mencoba berwirausaha mandiri selama kuliah dan ingin memperluas jangkauan pasar di luar jejaring kelas. |

---

## 1.2 Latar Belakang & Rumusan Masalah Terpilih (*Problem Statement*)

### Deskripsi Masalah Utama
Wisata alam di Bogor-khususnya curug (air terjun), situ/danau, dan jalur pendakian ringan-merupakan salah satu tujuan utama warga Jabodetabek untuk rekreasi singkat (*short getaway*). Namun, ekosistem informasi terkait destinasi ini masih sangat terfragmentasi. Wisatawan umumnya mengandalkan potongan video media sosial (seperti TikTok atau Instagram) dan ulasan Google Maps yang kerap kali sudah usang, tidak lengkap, atau bias promosi.

Hingga saat ini, belum ada platform informasi terintegrasi dan terverifikasi yang menyajikan data menyeluruh mencakup **rute resmi, tingkat kesulitan medan, fasilitas penunjang (toilet, musala, area parkir resmi), serta rincian biaya riil dari awal hingga akhir (*end-to-end*)**. Kondisi ini membuka celah maraknya praktik **pungutan liar (pungli) berlapis**-mulai dari portal warga swadaya, tiket masuk ganda, hingga tarif parkir tak wajar-serta meningkatkan **risiko keselamatan** akibat wisatawan melewati jalur ilegal atau medan yang tidak terpetakan dengan baik.

### Alasan Pemilihan Masalah
1. **Masalah Nyata dan Berulang (*High Pain Point*)**
   * **Isu pungutan liar (pungli) sistemik:** Pungli di destinasi alam Bogor (kawasan Sentul, Gunung Salak Endah, Pamijahan, atau Puncak) adalah masalah klasik yang terus viral di media sosial. Wisatawan sering ditarik biaya berkali-kali mulai dari portal desa, parkir liar berlapis, hingga uang lewat jalan setapak.
   * **Keamanan dan risiko rute:** Banyak wisatawan pemula tersesat atau mengalami kecelakaan ringan karena minimnya informasi elevasi, kondisi medan, serta ketiadaan pemandu resmi pada jalur pendakian atau curug terpencil.
2. **Ukuran Pasar Jelas dan Rutin (*Captive Market*)**
   * **Kebutuhan *short getaway* warga urban:** Penduduk Jabodetabek usia 13-35 tahun memiliki tingkat kejenuhan tinggi terhadap rutinitas perkotaan. Bogor menjadi destinasi *healing* dan *trekking* utama karena jarak tempuh dekat via KRL maupun jalan tol.
   * **Segmen sensitif terhadap ketidakpastian:** Generasi muda dan pelajar/pekerja pemula memiliki anggaran terbatas. Ketidakpastian biaya di lokasi membuat mereka enggan berkunjung atau pulang dengan pengalaman buruk (*bad experience*).
3. **Celah Pasar yang Belum Diisi Platform Besar (*Market Gap*)**
   * **OTA besar fokus pada atraksi modern:** Platform seperti Traveloka atau Tiket.com umumnya hanya melayani tiket masuk destinasi komersial terstruktur (taman bermain/kebun raya) dan penginapan, bukan wisata alam rintisan atau curug swadaya.
   * **Google Maps tidak komprehensif:** Ulasan di Google Maps sering kali terpecah, usang, atau tidak merinci akumulasi biaya riil dari titik awal hingga titik akhir (*end-to-end breakdown cost*).
4. **Peluang Fitur Produk Sangat Terarah (*Product Viability*)**
   * **Kalkulator Estimasi Biaya:** Transparansi total pengeluaran (tiket masuk resmi dan parkir resmi).
   * **Fitur Pelaporan Komunitas:** Laporan *real-time* dari pengunjung mengenai titik pungli aktif atau kondisi cuaca/debit air curug.
   * **Panduan Rute & Trek Terverifikasi:** Integrasi rute resmi dengan penanda pos keamanan dan fasilitas dasar (toilet, musala, warung).
5. **Dampak Sosial dan Ekonomi Positif**
   * **Mendukung pengelola legal:** Membantu Kelompok Sadar Wisata (Pokdarwis) atau masyarakat lokal yang mengelola wisata secara tertib agar mendapatkan eksposur yang adil.
   * **Memulihkan citra pariwisata Bogor:** Membantu wisatawan merasa aman kembali saat menjelajah alam tanpa rasa waswas dipalak di tengah jalan.

### Problem Statement & Statement Canvas
> **Problem Statement:**  
> *"Wisatawan muda urban dan penjelajah pemula di Jabodetabek mengalami kesulitan mengakses informasi rute resmi yang terverifikasi serta transparansi rincian biaya riil di lokasi saat merencanakan liburan singkat (short getaway) ke destinasi wisata alam di Bogor, yang membuat mereka rentan terkena praktik pungutan liar (pungli) berulang, mengalami pembengkakan anggaran (overbudget), hingga menghadapi risiko keselamatan akibat tersesat di jalur yang tidak resmi."*

| Komponen Statement Canvas | Rincian |
| :--- | :--- |
| **Context** | Saat merencanakan liburan akhir pekan (*short getaway*) atau agenda *trekking* ke destinasi alam di Bogor (curug/situ/jalur pendakian) tanpa pemandu lokal. |
| **Customers** | Wisatawan Muda Urban & Penjelajah Pemula (Usia 13-35 Tahun) di wilayah Jabodetabek (Mahasiswa, Pelajar, dan Pekerja Muda/*First-Jobber*). |
| **Problem** | Belum adanya platform terpusat yang menyajikan transparansi rincian biaya riil (tiket resmi, parkir, retribusi) dan peta rute perjalanan (*end-to-end*) yang terdaftar resmi, sehingga membuka celah maraknya praktik pungutan liar (pungli) berlapis. |
| **Emotional Impact** | Merasa cemas, kecewa, frustrasi, dan terintimidasi akibat dipalak uang tambahan secara tidak terduga di jalan maupun lokasi wisata, serta merasa tidak aman karena takut tersesat di jalur rawan. |
| **Quantifiable Impact** | **Kerugian Finansial:** Pembengkakan pengeluaran (*overbudget*) sebesar **20%-50%** di atas anggaran awal akibat pungli berlapis. |
| **Alternatives** | Mengandalkan cuplikan video singkat di TikTok / Instagram dan ulasan Google Maps. |
| **Alternative Shortcomings** | **TikTok/Instagram:** Informasi hanya sepotong (*visual highlight* saja), bias promosi, tidak menyajikan *breakdown* biaya transparan, dan tidak ada rincian peta rute.<br>**Google Maps:** Ulasan terpecah-pecah, tidak memverifikasi apakah pos retribusi di lokasi legal/ilegal, serta tidak menampilkan elevasi/tingkat kesulitan medan jalur pendakian. |

---

## 1.3 Data Riset & Validasi Masalah (Bukti Sosial Media & Ulasan Publik)

Berikut adalah 13 bukti nyata keluhan wisatawan dari Google Maps, TikTok, dan Instagram yang memvalidasi permasalahan di lapangan:

| No | Platform & Sumber | Kutipan Komentar | Kategori Masalah (*Pain Point*) | Insight & Kebutuhan Pengguna |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Google Maps** - Curug Walet *(amelia putri jelita)* | *"Banyak bangettt punglinya, dan punglinya ga main², yang pertama 25k padahal masih 1 km lagi dari curug… terus bayar lagi 25k di gate ke dua²"* | Banyak Pungutan Liar (Pungli) Berlapis | Pengguna menginginkan sistem pembayaran yang terintegrasi di *gate* resmi tanpa ada kutipan biaya tambahan. |
| **2** | **Google Maps** - Curug Barong *(Hotmaria Yusmiaty)* | *"Tiket masuk gerbang utama, 15 ribu per orang dan belum termasuk biaya parkir kendaraan, setelah nya saat anda sedang berjalan menuju curug akan ada permintaan biaya tambahan 25 ribu per orang."* | Biaya retribusi terpisah/pungli di tengah jalur serta minimnya petunjuk rute jalan | Transparansi total estimasi biaya sebelum berangkat dan ketersediaan peta/petunjuk rute yang terverifikasi. |
| **3** | **Google Maps** - Curug Cikuluwung *(gilang gemilang)* | *"Atas pengalaman gua, disini Banyak pungli, di curugnya banyak penjaga mengatasnamakan petugas Curug buat jaga keamanan (tapi sebenarnya buat risih) banyak yg kurang jujur juga..."* | Pungli berkedok petugas keamanan, oknum tidak jujur, dan ketidaknyamanan area wisata | Jaminan keamanan resmi tanpa penagihan liar serta kepastian informasi kenyamanan fasilitas lokasi. |
| **4** | **Google Maps** - TWA Gunung Pancar / Curug Asih *(Ari Setiaji)* | *"Tadi saya mau ke wisata air daerah curug asih ditarik 10 ribu per orang gak dikasih karcis lagi PUNGLI INI BOSS NAMANYA. Kalau gak bayar disuruh putar balik cari jalan lain"* | Pungli di portal warga tanpa karcis serta intimidasi pemblokiran rute jalan | Panduan rute resmi terverifikasi dan fitur laporan titik pungli aktif untuk keamanan berkendara. |
| **5** | **Google Maps** - Leuwi Lieuk, Jonggol *(Evelyn)* | *"Beli tiket di bawah 50 ribu bilangnya buat lieuk dan hejo. Pas udah naik capek2 sampe atas ternyata disuruh bayar lagi 10 ribu."* | Informasi tiket tidak konsisten, biaya tambahan mendadak di atas lokasi, dan ketidakjelasan tarif resmi | Rincian total biaya *all-in* yang transparan sebelum berangkat serta kepastian tarif resmi tanpa pungli. |
| **6** | **TikTok** - Curug Ciparay *(R)* | *"ini masuknya pintu utama bukan bang? 2 minggu yang lalu saya dimintai 65 ribu 1 motor 2 orang"* | Pungutan biaya atau tarif masuk yang tidak konsisten dan tidak transparan di pintu masuk kawasan | Pengunjung memerlukan kepastian nominal harga tiket resmi serta transparansi tarif retribusi agar terhindar dari selisih biaya. |
| **7** | **TikTok** - Curug Pasir Reungit *(アメリア)* | *"sayangnya byk bgt tiketnya habis 70rban ks doang pintu masuk 55rb, parkir, msuk ke curugnya 15rb"* | Biaya akumulasi pengeluaran membengkak akibat pungutan berlapis (tiket pintu masuk, parkir, retribusi curug) | Kejelasan total biaya resmi sebelum berangkat karena ulasan awal sering tidak sesuai dengan realita di lapangan. |
| **8** | **TikTok** - Lembah Tepus *(Bagas)* | *"masuk kawasan 1 orang 30k, motor 5k, jalan rusak, parkir 5-10k di depan pintu masuk curug, masuk curug 10k, nah di dalem curug ada curug lagi dan bayar lagi 😭"* | Beban biaya berlapis (tiket kawasan, parkir berkali-kali, retribusi tambahan di dalam) diperparah jalan rusak | Transparansi tarif resmi yang terpadu dan informasi kondisi infrastruktur jalan. |
| **9** | **Instagram** - Curug Leuwi Asoka *(nadhyva.nov)* | *"Masuk 1 destinasi bayar 3x berasa nyebrang daerah 😭"* | Bayar berkali-kali, tiket masuk hutan pinus mahal, parkir bayar lagi | Pengunjung menginginkan harga masuk lebih realistis termasuk tiket parkir kendaraan. |
| **10** | **Instagram** - Curug Goa Lumut & Curug Pasir Reungit, Pamijahan | *"Masuk gerbang bayar orang dan motor beda, nah udah di curug bayar lagi terus parkiran bayar lagi, ke curug lain bayar lagi, berak bayar lagi kencing bayar lagi mandi bayar lagi..."* | Banyaknya pungli dan pembayaran berlipat di dalam kawasan curug/TNGHS | Pembayaran ditentukan di awal dengan harga *fix* dan masuk akal agar tidak perlu melakukan pembayaran berlipat. |
| **11** | **Instagram** - Curug Cibalagung | *"'No pungli-pungli'? Bayar gate jalan aspal 20k, bayar tiket masuk 20k, bayar parkir 10k 🔥... Baru kemarin tgl 27 Maret kesana, dan jalan nya rusak... Treknya licin apalagi abis ujan temen gw pada jatoh"* | Klaim bebas pungli palsu, jalanan rusak, tidak aman, licin, dan parkiran jauh | Informasi jujur mengenai kondisi jalan/trek licin dan penghapusan pungutan jalan aspal tambahan. |
| **12** | **Instagram** - Curug Mariuk *(fifafifah_11)* | *"Tidak recomended untuk yang cuma bisa kecepak kecepuk, soalnya lumayan dalem."* | Lokasi air cukup dalam dan tidak *kids friendly* bagi yang tidak bisa berenang | Informasi kedalaman air, karakteristik kolam curug, dan peringatan membawa alat bantu renang (pelampung). |
| **13** | **Instagram** - Curug Nangka, Kawasan G. Salak *(agusismail)* | *"Wisata yg paling mahal dan ga masuk akal, cuma ada di sentul dan sekitarnya... parkir di tiket bayar, pas naro motor, disuruh bayar parkir di awal katanya, eh pas pulang, dimintain parkir lagi dengan org yg berbeda."* | Banyak pungli, harga tidak masuk akal, dan penarikan parkir ganda oleh oknum berbeda | Pengelola memberikan tarif yang masuk akal dan kepastian area parkir resmi agar tidak membayar berkali lipat. |

---

## 1.4 Eksplorasi Tiga Konsep Solusi & Sintesis Platform Terpadu

Pada tahap ideasi awal, tim merumuskan 3 konsep solusi website yang kemudian disempurnakan dan digabungkan menjadi satu platform terpadu (**EksploTrip.**):

### 1. EcoTrip Bogor *(Web Direktori Visual, Kurasi Rekomendasi, & Kalkulator Biaya)*
* **Konsep:** Platform perencanaan perjalanan cerdas (*smart travel planner*) yang mengombinasikan transparansi biaya dengan visualisasi kondisi lapangan yang autentik.
* **Fitur Utama:**
  1. **Kalkulator Biaya End-to-End:** Simulasi otomatis total pengeluaran riil (tiket masuk resmi, parkir, retribusi jalur, dan tips pemandu) berdasarkan jumlah orang dan jenis kendaraan (motor/mobil).
  2. **Katalog Visual & Galeri Fasilitas (Tanpa Filter):** Foto tanpa filter, video suasana curug, serta rincian kondisi fasilitas fisik secara transparan (foto toilet, ketersediaan air bersih, musala, dan kelayakan akses jalan).
  3. **Mesin Rekomendasi Berbasis Filter:** Rekomendasi otomatis berdasarkan kebutuhan spesifik wisatawan (ramah anak/keluarga, pemula yang butuh jalur landai, hingga petualangan ekstrem dengan debit air dalam).
  4. **Peta Navigasi & Tanda Pos Resmi:** Pemetaan rute resmi terverifikasi dengan penanda titik pos legal, *rest area*, dan bengkel terdekat.

### 2. JelajahAman.id *(Web Pantau Pungli, Crowd Meter, & Komunitas Real-Time)*
* **Konsep:** Platform berbasis urun daya (*crowdsourcing community*) yang memantau keamanan jalur, transparansi pungutan, dan tingkat keramaian destinasi secara langsung (*real-time*).
* **Fitur Utama:**
  1. **Peta Pantau Pungli (*Crowdsourced Map*):** Pin interaktif tempat pengunjung menandai dan memvalidasi titik pungli aktif, tarif parkir liar, atau pemalakan berulang di jalan desa.
  2. **Deteksi Kepadatan Pengunjung (*Live Crowd Meter*):** Indikator status destinasi (*Sangat Padat, Sedang, Sepi/Tenang*) untuk membantu pencari ketenangan menemukan *hidden gem* dan waktu terbaik berkunjung.
  3. **Laporan Jalur, Cuaca, & Debit Air Terkini:** Informasi kondisi langsung (air keruh karena hujan di hulu, jalur licin, atau debit air meluap).
  4. **Sistem Rating & Ulasan Terverifikasi GPS:** Ulasan kualitas destinasi dan keramahan warga yang terverifikasi di radius lokasi wisata.

### 3. DesaWisata Hub *(Web Reservasi Resmi, Smart Booking, & Chatbot AI)*
* **Konsep:** Ekosistem digital resmi yang bermitra langsung dengan Kelompok Sadar Wisata (Pokdarwis) lokal serta pengelola resmi (Perhutani/TNGHS).
* **Fitur Utama:**
  1. **Chatbot AI Wisata Bogor (*Smart Trip Assistant / AIplo*):** Asisten virtual interaktif 24/7 untuk tanya jawab rencana perjalanan, menyarankan destinasi berdasarkan anggaran, dan menghitung waktu tempuh.
  2. **E-Ticket & QR Code Pembayaran Terpadu:** Pembayaran digital satu pintu untuk tiket masuk dan karcis parkir resmi.
  3. **Kontak & Pemesanan Pemandu Lokal Terverifikasi (*Local Guide*):** Direktori pemandu resmi bersertifikat dan kontak PIC resmi (Pokdarwis, Pos Ranger).
  4. **Katalog Paket Wisata & Edukasi Keselamatan:** Informasi penyewaan alat keselamatan (pelampung/helm) dan panduan darurat.

### Sintesis Menjadi Solusi Terpadu: **EksploTrip.**
Ketiga ide di atas digabungkan menjadi **EksploTrip.**, satu solusi web terpadu yang memfasilitasi seluruh kebutuhan wisata alam (curug, danau/situ, hingga jalur pendakian gunung/bukit di Bogor) dari tahap pra-kunjungan (*pre-visit planning*) hingga navigasi dan keselamatan saat berada di lokasi.

---

# BAGIAN 2: KERANGKA KERJA DESIGN THINKING (MINGGU KE-2)

Pendekatan *User-Centered Design* (UCD) diterapkan melalui 5 tahapan iteratif: **Empathize, Define, Ideate, Prototype, dan Test**.

## 2.1 Empathize (Memahami Pengguna melalui Empathy Map)
* **Sees (Apa yang Dilihat Pengguna):**
  * Di media sosial: Melihat video wisata alam yang estetik dan viral tanpa adanya rincian biaya riil.
  * Di lapangan: Melihat langsung portal bambu swadaya warga, karcis parkir tak resmi, jalan rusak tanpa penunjuk arah, serta fasilitas umum (toilet dan musala) yang kurang terawat.
* **Hears (Apa yang Didengar Pengguna):**
  * Mendengar keluhan kerabat atau ulasan warganet mengenai pungli berlapis di Bogor, gertakan oknum lokal yang memaksa putar balik jika menolak membayar, berita orang hilang/tersesat, serta risiko debit air meluap dari hulu sungai.
* **Thinks (Apa yang Dipikirkan Pengguna):**
  * Keraguan batin: *"Apakah uang saku saya cukup atau akan overbudget dipalak?"*, *"Bagaimana jika ponsel kehilangan sinyal di hutan/bukit?"*, *"Apakah airnya aman untuk berenang?"*, dan *"Apakah fasilitas di lokasi layak digunakan?"*.
* **Does (Apa yang Dilakukan Pengguna):**
  * Mencari informasi lewat ulasan Google Maps dan kolom komentar medsos terbaru, menghitung perkiraan bujet seadanya, bepergian rombongan dengan motor/mobil/KRL, serta terpaksa membayar pungutan liar demi keselamatan dan kelancaran liburan.
* **Pains (Keresahan & Ketakutan):**
  * Kerugian finansial akibat pembengkakan biaya tak terduga (*overbudget* 20%-50%), tersesat di jalur rawan saat sinyal hilang (*blank spot*), bahaya fisik akibat arus air deras atau jalan licin, serta rasa terintimidasi oleh oknum di lokasi.
* **Gains (Harapan & Kebutuhan):**
  * Transparansi total biaya riil secara terperinci (*all-in*), kepastian peta rute resmi, informasi terkini mengenai kondisi alam/fasilitas, serta pengalaman liburan yang tenang tanpa gangguan pungli.

---

## 2.2 Define (Perumusan Masalah & Profil Audiens)

### A. Lima Segmen Target Pengguna Utama
| No | Segmen Pengguna | Rentang Usia | Kondisi | Situasi | Kebutuhan Utama | Keterangan |
| :-: | :--- | :---: | :--- | :--- | :--- | :--- |
| **1** | **Pelajar (SMP/SMA)** | 13-17 tahun | Mengandalkan uang saku harian terbatas; konvoi motor bersama teman sebaya. | Liburan hemat bersama teman sekolah di akhir pekan. | Kepastian tarif tiket masuk & parkir resmi, jarak jalan kaki dari parkiran, dan peringatan bahaya. | Paling rentan menjadi korban karcis dadakan karena minim literasi medan & informasi awal. |
| **2** | **Mahasiswa** | 18-22 tahun | Anggaran ketat; bepergian bersama teman menggunakan motor atau KRL. | Mencari rekreasi hemat (*healing* murah) setelah ujian atau tugas kuliah. | Rincian total biaya *end-to-end* (tiket masuk, parkir resmi, retribusi pos) agar terhindar dari *overbudget*. | Sensitif terhadap pungli mendadak karena sisa uang pegangan terbatas (skema patungan). |
| **3** | **Pekerja Muda Urban (*First-Jobber*)** | 23-32 tahun | Memiliki daya beli mandiri; lelah dengan rutinitas kota di Jabodetabek; memakai kendaraan pribadi (mobil/motor). | Perjalanan singkat (*short getaway*) di akhir pekan bersama rekan kerja atau pasangan tanpa ingin ribet. | Kepastian destinasi bebas intimidasi premanisme/pungli, area parkir resmi yang aman & dekat basecamp, serta fasilitas layak (toilet bersih, musala). | Rela membayar tiket dengan tarif resmi yang wajar asalkan transparan dan tidak dipalak berulang kali. |
| **4** | **Pendaki & Penjelajah Pemula** | 18-30 tahun | Menyukai aktivitas *trekking* curug atau bukit, minim pengalaman membaca medan hutan di Bogor, sangat bergantung pada ponsel. | Mencoba rute alam tersembunyi (*hidden gem*) secara mandiri tanpa agen tur komersial yang mahal. | Peta rute resmi (termasuk peta *offline*), tingkat kesulitan medan (jarak & elevasi), info cuaca/debit air, kontak pemandu lokal berizin, & nomor darurat. | Kerap terjebak melewati pos liar ilegal atau tersesat di jalur rawan bencana saat terjadi *blank spot* sinyal. |
| **5** | **Rombongan Komunitas** | 20-35 tahun | Klub motor (*Sunmori*), pesepeda (*gowes*), Mapala, dan *open trip* yang bepergian dalam jumlah banyak. | Agenda kumpul mingguan ke kawasan bukit dan curug di Sentul atau Pamijahan. | Informasi kelayakan akses jalan (lebar jalan & tanjakan), kapasitas parkir rombongan, serta tarif retribusi grup yang jelas. | Sering menjadi target empuk pemalakan portal warga atau parkir liar karena datang dalam kelompok besar. |

### B. Enam Kondisi Kendala Pengguna di Lapangan
1. **Bujet:** Anggaran ketat dan rawan *overbudget* saat berkunjung ke curug, danau, atau bukit.
2. **Pungli:** Rentan dipalak di portal liar warga, parkir dadakan, dan tiket ganda.
3. **Sinyal (*Blank Spot*):** Ketergantungan tinggi pada ponsel dan berisiko tersesat serta gagal transaksi digital (QRIS) saat sinyal hilang.
4. **Info Alam & Air:** Minimnya informasi terkait kedalaman dan arus deras curug/danau serta elevasi terjal bukit.
5. **Kondisi Tempat:** Akses berbatu/licin dan ketidakpastian kelayakan fasilitas fisik di lapangan.
6. **Kepadatan:** Sering terjebak antrean kerumunan padat akibat ketiadaan pantauan keramaian langsung.

### C. Point of View (POV) Statement
> *“Wisatawan muda urban dan penjelajah pemula di Jabodetabek sangat membutuhkan transparansi rincian total biaya riil serta panduan rute resmi terverifikasi karena mereka secara diam-diam mengalami kecemasan dipalak pungutan liar (pungli) berlapis, kepanikan overbudget mendadak, dan ketakutan tersesat di jalur alam tanpa sinyal.”*

### D. Tiga Akar Masalah Utama
1. **Informasi Terfragmentasi & Bias:** Data ulasan di Google Maps dan video medsos kerap usang serta tidak mencantumkan total akumulasi biaya.
2. **Sistem Pembayaran Belum Terpadu:** Ketergantungan pada uang tunai manual membuka celah portal liar dan *mark-up* tarif parkir.
3. **Minimnya Pemetaan Jalur & Pantauan Alam:** Kurangnya plang resmi di lapangan serta ketiadaan panduan elevasi rute dan karakter air.

---

## 2.3 Ideate & Unique Value Proposition (UVP)
1. **Transparansi Biaya:** Perhitungan total biaya riil *end-to-end* (tiket masuk resmi + parkir resmi kendaraan) secara presisi sebelum berangkat.
2. **Navigasi Rute Aman:** Kepastian rute resmi terverifikasi (termasuk unduhan peta *offline*) yang meminimalisir risiko tersesat dan melewati pos liar.
3. **Kenyamanan Komunitas & Keselamatan:** Peringatan titik pungli aktif, indikator keramaian tempat secara langsung (*Live Crowd Meter*), katalog visual tanpa filter, serta akses cepat ke kontak PIC pengelola resmi dan nomor darurat.

---

## 2.4 Prototype & Rencana Pengujian (Test Plan)

### Komponen Antarmuka Utama (6 Fitur Inti)
1. **Kalkulator Biaya End-to-End:** Form simulasi biaya tiket masuk (termasuk fasilitas seperti pelampung) dan tarif parkir resmi kendaraan.
2. **Peta Interaktif & Status Jalur:** Peta digital rute resmi dengan penanda pos legal, area parkir, titik licin/waspada, titik pungli, dan tombol **Unduh Peta Offline**.
3. **Katalog Visual Fasilitas & Karakteristik Wisata (Tanpa Filter):** Foto dan video riil akses jalan, jalur trekking, toilet & kamar bilas, debit air & kedalaman, area parkir, serta fasilitas sekitar.
4. **Kartu Kontak PIC & Bantuan Darurat:** Tombol pintas salin kontak resmi pengelola (Pokdarwis, Pos Ranger, Pemandu Lokal) dan nomor darurat umum.
5. **Indikator Keramaian (*Live Crowd Meter*):** Status kepadatan destinasi (*Sepi, Sedang, Padat/Ramai*) beserta rekomendasi waktu terbaik berkunjung (*Sebelum jam 09.00-10.00 WIB*).
6. **Widget Chatbot AI Assistant (*AIplo*):** Asisten virtual interaktif untuk rekomendasi rencana perjalanan (*itinerary*).

### Metode, Skenario, & Metrik Evaluasi Pengujian
* **Metode Pengujian:**
  1. **Survei Langsung:** Penyebaran kuesioner terstruktur secara tatap muka kepada target wisatawan dan mahasiswa di Bogor.
  2. **Uji Coba Prototipe Langsung (*Direct Task Test*):** Responden menjalankan tugas pada purwarupa web secara mandiri.
  3. **Wawancara Singkat Lapangan:** Wawancara kualitatif cepat untuk menggali kendala navigasi dan tingkat kepuasan informasi.
* **Skenario Pengujian Berkesinambungan (4 Tasks):**
  * **Tahap 1 (Eksplorasi & Cek Kondisi):** Mencari destinasi wisata alam hemat di Bogor, mengecek karakteristik kedalaman air/jalur, serta memeriksa indikator keramaian (*live crowd meter*).
  * **Tahap 2 (Kalkulasi Biaya End-to-End):** Melakukan simulasi perhitungan total pengeluaran resmi (tiket masuk kawasan dan tarif parkir kendaraan) menggunakan kalkulator biaya.
  * **Tahap 3 (Konfirmasi Langsung ke Pengelola):** Mengakses dan menyalin/menghubungi nomor kontak PIC resmi pengelola wisata untuk memastikan izin jalur dan situasi lapangan.
  * **Tahap 4 (Navigasi & Pantau Titik Pungli):** Membuka peta panduan pos resmi dan memantau tanda peringatan titik rawan pungli aktif di rute perjalanan.
* **Metrik Keberhasilan (*Success Metrics*):**
  * **Task Completion Rate $\ge 85\%$:** Mayoritas responden berhasil menyelesaikan skenario tugas tanpa kendala teknis.
  * **Tingkat Kepuasan Survei $\ge 80\%$:** Skor kepuasan kemudahan tampilan dan manfaat fitur berada di kategori sangat baik.
  * **Kejelasan Alur Navigasi:** Pengguna tidak mengalami kebingungan atau salah klik pada menu navigasi utama.
  * **Kejelasan Informasi Biaya:** Responden menyatakan bahwa transparansi rincian biaya yang ditampilkan mudah dipahami dan membantu perencanaan bujet.

---

# BAGIAN 3: RISET KUALITATIF, USER PERSONA, & USER JOURNEY MAP (MINGGU KE-3)

## 3.1 Ringkasan Hasil Wawancara Mendalam (4 Narasumber)

| No | Narasumber & Profil | Pewawancara | Temuan Kunci (*Key Insights*) |
| :-: | :--- | :--- | :--- |
| **1** | **Muhammad Mubarok (Barok)**<br>Laki-laki, 19 Tahun (Lahir: Bogor, 10 Agustus 2007)<br>**Pekerjaan:** Staff SPPG (Pekerja Muda)<br>**Domisili:** Jl. Tamansari, Ciapus, Kab. Bogor | Nuralam Sukmawijaya | • Merencanakan *short getaway* akhir pekan bersama rombongan rekan kerja sekitar **2 minggu sebelum keberangkatan**.<br>• Pertimbangan utama memilih wisata: **keindahan panorama alam** dan **bebas pungutan liar (pungli)**.<br>• Akses jalan ke curug rata-rata rusak/berbatu sehingga memprioritaskan **parkir resmi yang paling dekat dengan pintu gerbang/basecamp**.<br>• Pernah mengalami langsung **tiket berlapis & pungli di kawasan Gerbang Halimun Salak**, serta biaya ganda akibat **salah memilih rute jalan sehingga melewati dua pos retribusi berbeda**.<br>• Pengeluaran wajar wisata alam: **$< \text{Rp50.000}$/orang** (pengeluaran paling sering membengkak di konsumsi/makanan).<br>• Menyiasati kepadatan dengan memantau Google Maps/TikTok/IG terbaru dan **datang pagi sebelum pukul 09.00-10.00 WIB**. |
| **2** | **Aulia Fasha Bila (Aul)**<br>Perempuan, 20 Tahun (Lahir: Bogor, 18 Agustus 2006)<br>**Pekerjaan:** Mahasiswa (Pendaki / Penjelajah Pemula)<br>**Domisili:** Jl. Cimanggu, Kota Bogor | Syahfikri Maulana Akbar | • Gemar *trekking* ke destinasi *hidden gem* di Bogor; selalu meriset kondisi medan (kecuraman, kelicinan, bebatuan) via TikTok/IG.<br>• Mengantisipasi **hilangnya sinyal seluler (*blank spot*)** dengan menyiapkan **peta *offline* dan GPS track**.<br>• Membedakan **jalur resmi** (tanah lebih padat, jelas, ada penanda pita) vs **jalur buatan warga** (sempit, tertutup semak-semak).<br>• Saat hendak berenang di curug, selalu mengecek kedalaman, kejernihan, dan deras arus dari pinggir atau bertanya ke warga lokal.<br>• Pernah ditarik uang kebersihan/izin lewat saat melewati jalur alternatif dekat pemukiman warga.<br>• Menyarankan kesepakatan tarif *fixed rate* di awal saat menyewa *local guide*, selalu membawa peluit darurat, serta membutuhkan **peta rute jelas, titik rawan bahaya (longsor/tebing curam), estimasi waktu antarpos, dan nomor kontak darurat terbaru**. |
| **3** | **Nenih Sasnitiari**<br>Perempuan, 15 Tahun (Lahir: Bogor, 17 Juni 2011)<br>**Pekerjaan:** Pelajar SMA<br>**Domisili:** Jl. Laladon Indah, Kab. Bogor | Malyasanasy Rengganis P. P. | • Berwisata ke curug bersama rombongan ~15 teman menggunakan sepeda motor karena ajakan teman yang mengklaim lokasi **gratis dan akses jalan mudah**.<br>• Realita di lapangan jauh dari ekspektasi: **sudah berbayar, jalan raya rusak, dan jalan kaki dari parkiran ke curug jauh (~30 menit)**.<br>• Membawa uang saku **Rp100.000** dari orang tua (untuk bensin, makan, dana darurat) tanpa alokasi tiket masuk.<br>• Saat dicegat oknum warga yang meminta karcis dadakan di jalan, rombongan spontan patungan membayar tanpa tahu apakah itu tiket resmi atau pungli.<br>• Saat sinyal hilang, hanya mengandalkan teman dan plang fisik; merasa **cemas terhadap satwa liar (monyet)** di jalur setapak dan **keamanan motor di tempat parkir**. |
| **4** | **Novian Prihandoyo (Vian)**<br>Laki-laki, 20 Tahun (Lahir: Bogor, 20 Mei 2006)<br>**Pekerjaan:** Mahasiswa Universitas Pakuan<br>**Domisili:** Jl. Caringin, Kab. Bogor | Rafa Putra Rahmadi | • Berkunjung ke **Curug Cikaracak, Caringin** bersama saudara (jarak ~20 menit dari rumah), direncanakan H-2.<br>• Riset via TikTok (*keyword: "Curug di Caringin Bogor"*) dan **mengecek kolom komentar video terbaru** karena harga di video lama sudah tidak akurat (naik).<br>• Efisiensi bujet **~Rp30.000/orang** dengan skema patungan bensin & parkir berdua, serta membeli bekal di minimarket (Rp20.000) sebelum masuk lokasi.<br>• Mengalami **ketiadaan sinyal (*blind spot*) sejak di pos masuk**, sehingga pembayaran digital **QRIS tidak bisa digunakan** dan seluruh transaksi wajib menggunakan **uang tunai (*cash*)**.<br>• Mengapresiasi pengelolaan Curug Cikaracak yang transparan dan bebas pungli: **Tiket masuk Rp7.000 (weekday) / Rp17.000 (weekend) dan parkir motor Rp10.000**, dengan trek landai ramah pemula, keluarga, dan lansia. |

---

## 3.2 Profil User Persona (3 Persona Utama)

### 1. User Persona 1 - Pekerja Muda: **Muhammad Mubarok**
* **Representasi:** Pekerja muda yang berlibur bersama rombongan untuk melepas penat kerja.
* **Profil Demografis:** Laki-laki, 19 Tahun | Staff SPPG | Domisili: Ciapus, Tamansari, Kab. Bogor.
* **Tipe Perjalanan & Bujet:** Wisata rombongan rekan kerja di akhir pekan (*weekend*) | Bujet Ekonomis ($< \text{Rp50.000}$/orang di luar bensin).
* **Goals (Tujuan):**
  * Menikmati keindahan alam dan suasana segar untuk melepas penat rutinitas kerja.
  * Memastikan agenda liburan rombongan berjalan lancar sesuai rencana tanpa kendala rute.
  * Menjaga total pengeluaran tetap masuk akal dan ramah di kantong (di bawah Rp50.000/orang).
  * Memarkir kendaraan sedekat mungkin dengan pintu masuk atau *basecamp* curug demi kenyamanan.
* **Frustrations / Pains (Kendala):**
  * Akses jalan rusak, sempit, dan berbatu yang membuat khawatir merusak motor selama perjalanan.
  * Praktik penarikan pungutan liar (pungli) dan sistem tiket berlapis yang tidak transparan (misal di kawasan Halimun Salak).
  * Pembengkakan biaya tak terduga akibat salah belok rute sehingga harus membayar tiket di dua pos retribusi berbeda.
  * Lonjakan biaya konsumsi di area wisata.
* **Motivations / Gains (Harapan):**
  * Adanya navigasi rute resmi yang presisi agar rombongan tidak tersesat ke pos gerbang yang salah.
  * Kejelasan dan transparansi total biaya (tiket masuk, parkir resmi, dan retribusi) sejak awal.
  * Informasi indikator kepadatan pengunjung terkini (*live crowd monitor*) agar bisa tiba di waktu tenang sebelum pukul 09.00-10.00 WIB.

### 2. User Persona 2 - Mahasiswa / Penjelajah Pemula: **Dimas Pratama**
* **Representasi:** Persona gabungan dari **Aulia Fasha Bila** (kesiapan medan, *safety*, *offline map*) dan **Novian Prihandoyo** (kecermatan riset media sosial, efisiensi bujet, kesiapan tunai saat *blind spot*).
* **Profil Demografis:** Laki-laki, 20 Tahun | Mahasiswa Universitas di Bogor | Domisili: Kota/Kabupaten Bogor.
* **Tipe Perjalanan & Bujet:** Wisata mandiri / penjelajah alam *hidden gem* bersama sahabat atau saudara | Sangat hemat & terencana ($\sim\text{Rp30.000-Rp40.000}$/orang via patungan).
* **Goals (Tujuan):**
  * Menjelajahi keindahan curug dan jalur *trekking hidden gem* secara aman tanpa risiko tersesat.
  * Menekan pengeluaran semaksimal mungkin dengan skema patungan (bensin & parkir) serta membeli bekal logistik di minimarket sebelum masuk lokasi.
  * Mengetahui kondisi riil medan (curam, licin, debit air curug) dan titik pos sebelum turun ke jalur.
* **Frustrations / Pains (Kendala):**
  * Hilangnya sinyal seluler (*blind spot*) di area wisata yang melumpuhkan pembayaran nontunai (QRIS) dan peta *online*.
  * Ketidakakuratan info harga tiket dan fasilitas di video medsos lama karena kenaikan tarif yang belum diperbarui.
  * Jalur persimpangan tanpa plang petunjuk resmi yang membingungkan antara jalur resmi vs rute semak buatan warga.
  * Munculnya penarikan retribusi liar tanpa kejelasan hukum saat melewati pemukiman warga sekitar jalur alternatif.
* **Motivations / Gains (Harapan):**
  * Fitur peta navigasi *offline* dan pelacak GPS yang memetakan jalur aman, estimasi waktu tempuh antarpos, serta penanda titik rawan bahaya (tebing curam/longsor).
  * Transparansi rincian biaya tiket *all-in* (tarif *weekday/weekend* & parkir) yang selalu diperbarui oleh komunitas atau pengelola.
  * Ketersediaan kontak darurat (*emergency contact*) aktif serta standardisasi tarif pemandu lokal (*local guide*) sejak awal.

### 3. User Persona 3 - Pelajar: **Nenih Sasnitiari**
* **Representasi:** Pelajar yang bepergian beramai-ramai mengandalkan info dari teman sebaya dengan literasi medan yang masih minim.
* **Profil Demografis:** Perempuan, 15 Tahun | Pelajar SMA | Domisili: Laladon Indah, Kab. Bogor.
* **Tipe Perjalanan & Bujet:** Konvoi motor beramai-ramai (~15 orang) bersama teman lingkungan/sekolah | Mengandalkan uang saku orang tua (rata-rata Rp100.000 untuk bensin, makan, dan dana darurat).
* **Goals (Tujuan):**
  * Kumpul seru (*hangout*) dan menikmati suasana alam bersama teman-teman sebaya di luar jam sekolah.
  * Berwisata hemat tanpa harus kehabisan uang saku pemberian orang tua di tengah jalan.
  * Sampai di lokasi curug dengan rute jalan kaki yang ringan dan tidak melelahkan.
* **Frustrations / Pains (Kendala):**
  * Informasi awal yang meleset dari fakta lapangan (dikira gratis ternyata berbayar, jalan raya rusak, dan harus jalan kaki jauh 30 menit dari parkiran).
  * Pencegatan oleh oknum warga yang menagih karcis dadakan di tengah jalan tanpa kejelasan apakah itu tiket resmi atau pungli.
  * Perasaan cemas terhadap satwa liar (seperti monyet liar) di sepanjang jalan setapak serta kekhawatiran atas keamanan motor di tempat parkir.
  * Tidak berani putar balik meski kondisi lapangan tidak sesuai karena sudah terlanjur sampai bersama rombongan.
* **Motivations / Gains (Harapan):**
  * Informasi destinasi resmi yang jelas dan mudah dipahami pelajar: kepastian harga tiket masuk, biaya parkir resmi, dan jarak jalan kaki dari parkiran ke air terjun.
  * Panduan kelayakan akses jalan (apakah bisa dilalui motor pemula) dan peringatan kewaspadaan satwa atau titik rawan di lokasi.
  * Jaminan keamanan area parkir motor yang dikelola resmi agar tenang saat meninggalkan kendaraan.

---

## 3.3 User Journey Map: Wisata Alam & Curug Bogor

| Tahapan (*Stage*) | 1. Awareness | 2. Consideration | 3. Purchase | 4. Retention | 5. Advocacy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Touchpoints** | Media sosial (TikTok, Instagram), cerita ajakan teman/rekan kerja, Google Maps. | Kolom komentar video TikTok, situs info wisata, peta digital, tanya warga lokal. | Loket gerbang kawasan, portal swadaya warga, pos parkir motor, platform tiket *online*. | Jalur setapak *trekking*, papan penunjuk rute, warung lokal, toilet/bilas, petugas/*ranger*. | Media sosial pribadi (IG Story/TikTok), grup WhatsApp, ulasan komunitas. |
| **Customer Actions** | Menonton video viral curug di medsos; diajak rombongan teman sekolah atau rekan kerja untuk liburan akhir pekan. | Membandingkan beberapa opsi curug; memverifikasi harga tiket terbaru di komentar; memeriksa peta *offline* dan kontur medan. | Menyiapkan uang tunai cadangan; membayar tiket masuk di gerbang; membayar parkir kendaraan. | Berjalan kaki menyusuri jalur; mengecek persimpangan; mengamati arus air sebelum berenang; membeli bekal di warung. | Membagikan dokumentasi pemandangan alam; memberi saran jam kedatangan (sebelum jam 10 pagi); merekomendasikan rute aman. |
| **Customer Experience** | 😊 Antusias & Penasaran | 🤔 Ragu & Mencari Kepastian | 😟 Cemas & Terpaksa Membayar | 😐 Waspada di Jalur | 😄 Puas Jika Aman / Kecewa Jika Kena Pungli |
| **Pain Points** | Terlalu banyak info bias; video promosi tidak memperlihatkan kondisi akses jalan riil yang berbatu dan rusak. | Info tarif tiket di konten lama sudah kedaluwarsa (naik harga); minimnya info resmi durasi jalan kaki dari parkiran. | Munculnya tiket berlapis dan pungutan liar tak resmi di jalan warga; pembayaran digital (QRIS) gagal akibat *blind spot* sinyal. | Jalur setapak tanpa plang petunjuk resmi; risiko tersesat ke semak warga; cemas satwa liar/keamanan motor; toilet kurang terawat. | Tidak ada media resmi untuk melapor jika mendapati pungutan liar atau memperbarui kondisi jalur terkini bagi orang lain. |
| **Opportunities (Solusi EksploTrip.)** | Sediakan kurasi destinasi dengan informasi kondisi akses jalan riil dan foto terbaru tanpa filter. | Tampilkan rincian biaya terverifikasi (*verified pricing*), kalkulator biaya, kontur jalan, dan estimasi waktu tempuh jalan kaki. | Sediakan Kalkulator Biaya *all-in* (tiket + parkir resmi), peringatan kesiapan uang tunai saat *blind spot*, serta peta titik pos resmi vs ilegal. | Navigasi peta jalur *offline*, tombol darurat (*SOS alert*), kontak PIC/Pos Ranger, dan transparansi fasilitas lokal. | Fitur *Crowdsourced Review & Report Pungli*, serta fitur bagikan ringkasan info rute (*share summary card*) ke WhatsApp. |

---

# BAGIAN 4: ARSITEKTUR ALUR PENGGUNA, WIREFRAME LOW-FIDELITY, & ANOTASI KOMPONEN (MINGGU KE-4)

## 4.1 Arsitektur User Flow Sistem EksploTrip.
Berdasarkan diagram *User Flow* yang dirancang di Figma, alur sistem berjalan sebagai berikut:
1. **Awal Masuk (Start):** Pengguna mengakses situs web dan masuk ke halaman **Beranda**.
2. **Navigasi & Pencarian:**
   * Pengguna dapat memilih menu navigasi utama (**Beranda**, **Eksplorasi Destinasi**, dan **Bantuan Darurat**).
   * Kategori filter mencakup **Tipe Destinasi** (*Curug/Air Terjun, Situ/Danau, Gunung/Bukit*) serta **Kondisi & Kebutuhan** (*Ramah Pemula, Ramah Keluarga, Rute Ekstrem, Dekat Parkiran*).
   * Pengguna memasukkan kata kunci pada kolom cari dan menekan tombol **Cari**.
3. **Percabangan Keputusan (*Decision - Destinasi Ditemukan?*):**
   * **Jalur Gagal / Error (TIDAK):** Pengguna diarahkan ke **Layar Error / Data Kosong ("Destinasi Tidak Ditemukan")**. Terdapat 2 jalan keluar (*exit door*) agar pengguna tidak menutup browser: tombol **Reset Pencarian** dan tombol **Kembali**.
   * **Jalur Berhasil (YA):** Sistem menampilkan **Daftar Hasil Katalog Destinasi (Search Success / Eksplorasi Destinasi)**.
4. **Detail & Fitur Utama:**
   * Pengguna memilih salah satu kartu untuk membuka **Halaman Detail Destinasi** (Contoh: *Curug Cibulao*).
   * Di dalam halaman detail, pengguna dapat:
     1. Mengoperasikan **Kalkulator Biaya End-to-End**.
     2. Membuka **Katalog Visual** (Galeri Foto & Video kondisi riil lapangan tanpa filter).
     3. Memantau **Peta Interaktif & Status Jalur** serta **Indikator Keramaian**.
     4. Mengakses **Kontak PIC / Bantuan Darurat**.

---

## 4.2 Spesifikasi Wireframe Low-Fidelity Desktop (1440 x 1024 px)

Enam layar utama dirancang menggunakan pendekatan *grayscale* murni sebelum tahap *High-Fidelity*:

| Kode Layar | Nama Layar | Elemen Wajib | Fungsi Utama |
| :---: | :--- | :--- | :--- |
| **Layar 01** | **Beranda / Landing Page** | Header navigasi (*Beranda, Eksplorasi Destinasi, Bantuan Darurat*), *Hero Section* dengan pola-Z, deskripsi *value proposition* platform, *Quick Filter*, Grid Destinasi Populer (6 kartu), Blok *"Kenapa Pilih EksploTrip?"*, Banner CTA *"Cari Destinasi Sekarang"*, dan Footer lengkap. | Membuat pengguna memahami tujuan utama platform dalam **5 detik pertama**. |
| **Layar 02** | **Eksplorasi Destinasi (Katalog & Filter)** | Kolom pencarian utama (*Search Bar*), Pilihan Tag Filter (*Tipe Destinasi* & *Kondisi & Kebutuhan*), Grid Kartu Wisata (3 kolom x 5 baris = 15 kartu), dan Paginasi. | Membantu pengguna memfilter dan memilih destinasi alam sesuai kebutuhan tanpa membingungkan. |
| **Layar 03** | **Detail Katalog (Halaman Destinasi Wisata)** | Header Profil Destinasi (Nama, Lokasi, Ketinggian `+789 Mdpl`, Waktu Tempuh `+10 Menit Dari Parkiran`), Badge Verifikasi, 4 Kartu Ringkasan Info, Widget Kalkulator Biaya End-to-End, Preview Katalog Visual (6 item), Peta Interaktif & Status Jalur (+ tombol Unduh Peta Offline), Indikator Keramaian, serta Kontak PIC & Bantuan Darurat (4 kartu). | Menyediakan rincian informasi teknis, logistik, dan transparansi biaya sebelum berwisata. |
| **Layar 04** | **Detail Lihat Katalog Visual** | Switcher Tab (*Foto / Video*), Sub-filter Kategori (*Semua, Alam, Fasilitas, Aktivitas, Lainnya*), Grid Dokumentasi Foto Lapangan 4x5 (20 item), Total Jumlah Media (*60 foto dan 20 video*), dan Navigasi Paginasi Halaman. | Menyajikan kondisi fisik lapangan secara jujur dan transparan (tanpa filter) bagi wisatawan. |
| **Layar 05** | **Bantuan Darurat** | Banner Edukasi Siaga (*"Jangan Panik, Kami Siap Membantu"*), Stepper 5 Langkah Saat Keadaan Darurat, Kartu Informasi Bantuan Cepat (6 kartu: *Nomor Darurat Umum, Fasilitas Kesehatan Terdekat, Informasi Cuaca, Tips Keamanan Wanita, Edukasi dan Pencegahan, Hubungi Tim Kami*), Tips Keselamatan di Alam (5 poin), dan Accordion FAQ (6 pertanyaan). | Memberikan panduan pertolongan cepat dan kontak darurat saat pengguna mengalami kendala di perjalanan. |
| **Layar 06** | **Layar Error / Kosong ("Destinasi Tidak Ditemukan")** | Placeholder Ilustrasi Kosong, Pesan Informasi Error, Box Tips Pencarian (3 poin), Tombol *Reset Pencarian*, dan Tombol *Kembali*. | Pintu darurat UX (*exit door*) agar pengguna tidak langsung keluar dari situs saat kueri pencarian tidak ditemukan (*Zero Dead-End Flows*). |

---

## 4.3 Catatan Perilaku Tombol (Anotasi Teknis Komponen)

| Nama Komponen | Behavior (Perilaku) | Content (Format Teks) | State (Kondisi Tampilan) | Condition (Kapan Muncul) |
| :--- | :--- | :--- | :--- | :--- |
| **Search Bar & Tombol "Cari"** | Klik/Enter akan memuat ulang daftar katalog sesuai kata kunci atau mengarahkan ke layar *Search Success* / *Search Error*. | Teks input bebas, Maks. 50 karakter. Placeholder: `"Cari destinasi..."`. | • **Normal:** Aktif.<br>• **Hover:** Warna tombol menjadi lebih gelap.<br>• **Disabled:** Tombol redup jika kolom pencarian kosong. | Tampil pada halaman Beranda, Eksplorasi Destinasi, Bantuan Darurat, dan Search Error. |
| **Chip Filter Kategori** | Klik memilih/membatalkan opsi filter secara interaktif tanpa memuat ulang seluruh halaman. | Label teks pendek (Contoh: *"Curug / Air Terjun"*, *"Ramah Pemula"*). | • **Unselected:** Background abu-abu terang (`#F4F4F4`).<br>• **Selected:** Background warna aksen aktif (`#32AAC6`) dengan teks putih. | Tampil di bagian atas daftar katalog destinasi (Beranda & Eksplorasi Destinasi). |
| **Tombol "Hitung Ulang" (Kalkulator Biaya)** | Mengalkulasi total estimasi biaya berdasarkan input jumlah tiket pengunjung dan jumlah kendaraan parkir. | Teks: `"Hitung Ulang"`. Output biaya berformat Rupiah (Contoh: `Rp. 38.000`). | • **Normal:** Tombol solid teal/border tegas.<br>• **Active/Loading:** Mengalkulasi nilai baru secara instan. | Berada dalam modul Kalkulator Biaya End-to-End di halaman Detail Katalog. |
| **Tombol "Reset Pencarian"** | Mengosongkan input kata kunci dan mengembalikan filter ke setelan awal (mengarahkan ke katalog Eksplorasi Destinasi). | Teks tombol: `"Reset Pencarian"`. | • **Normal:** Style Outline (`border: 1.5px solid #32AAC6`).<br>• **Hover:** Background aksen tipis. | Muncul khusus saat kueri pencarian tidak menemukan hasil (Layar *Search Error*). |
| **Tombol "Kembali" / "Kembali ke Eksplorasi"** | Mengarahkan pengguna kembali ke halaman Beranda atau katalog utama. | Teks tombol: `"Kembali"` atau `"Kembali ke Eksplorasi"`. | • **Normal:** Style Solid (`#32AAC6` dengan teks putih).<br>• **Hover:** Warna tombol lebih gelap (`#287D92`). | Muncul khusus pada halaman *Search Error* / Data Kosong dan navigasi halaman dalam. |

---

# BAGIAN 5: HIGH-FIDELITY DESIGN, DESIGN SYSTEM, & MEKANIKA PROTOTIPE (MINGGU KE-5)

## 5.1 Ringkasan Proyek, Cakupan Wilayah, & Target Pengguna (Hi-Fi)
* **Deskripsi Proyek:** **EksploTrip.** adalah platform direktori dan panduan informasi wisata terpadu yang berfokus khusus pada wilayah **Kota dan Kabupaten Bogor**. Dirancang sebagai rujukan digital satu pintu bagi calon wisatawan untuk mencari informasi lengkap dan valid sebelum melakukan kunjungan (*pre-visit information*), mencakup medan jalur, transparansi tarif tiket, dokumentasi visual autentik, hingga akses keselamatan lapangan.
* **Kategori Utama Destinasi:**
  1. **Curug / Air Terjun**
  2. **Danau / Situ**
  3. **Pendakian Gunung / Bukit**
  4. *Pengembangan lanjutan:* **Area Perkemahan (*Camping Ground*)**
* **Cakupan Target Pengguna:**
  * **Wisatawan Jabodetabek:** Pelancong komuter dan pencari liburan akhir pekan (*weekend getaway*) yang membutuhkan rujukan destinasi alam terdekat untuk perjalanan pulang-pergi satu hari (*one-day trip*).
  * **Wisatawan Luar Jabodetabek:** Wisatawan antarkota maupun luar provinsi yang memerlukan kepastian peta rute, ketersediaan fasilitas umum di lokasi, serta panduan visual medan sebelum tiba di Bogor.
  * **Warga Lokal Bogor:** Komunitas pecinta alam, pegiat pendakian gunung/bukit, dan masyarakat lokal yang ingin mengeksplorasi destinasi baru (*hidden gems*) serta memantau cuaca dan kontak darurat pos penjagaan setempat.

---

## 5.2 Pemetaan Layar Utama High-Fidelity (8 Layar Utama)

| No | Nama Layar | File Implementasi | Peran Alur | Elemen Desain Utama |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Beranda** | `beranda.html`<br>`beranda.css` | Layar awal eksplorasi pengguna di dalam aplikasi. | • Bilah pencarian cepat (*search bar*) + tombol asisten AI (*AIplo*).<br>• Hero banner dengan 4 tag nilai utama (`#TransparansiBiaya`, `#RuteResmi`, `#PantauPungli`, `#RealNoFilter`).<br>• Navigasi filter kategori wisata (*Curug/Air Terjun, Situ/Danau, Gunung/Bukit*) & kondisi kebutuhan.<br>• Kartu kurasi 6 destinasi populer (Curug Cibulao, Situ Tamansari, Gunung Luhur) dengan foto autentik, lokasi, tag atribut, dan lencana *Terverifikasi*.<br>• Seksi *"Kenapa Pilih EksploTrip?"* & tombol CTA *"Cari Destinasi Sekarang"*. |
| **2** | **Eksplorasi Destinasi** | `eksplorasi_destinasi.html`<br>`eksplorasi_destinasi.css` | Direktori penelusuran menyeluruh untuk membandingkan destinasi wisata alam. | • Bilah pencarian utama (*Search Bar*) dengan tombol `"Cari"`.<br>• Bilah *Filter Chips* interaktif (*Tipe Destinasi* & *Kondisi & Kebutuhan*).<br>• Susunan 12 kartu destinasi dalam grid 3 kolom x 4 baris responsif.<br>• Navigasi paginasi halaman (`← 1 2 3 4 →`). |
| **3** | **Detail Katalog** | `detail_katalog.html`<br>`detail_katalog.css` | Lembar informasi teknis, biaya, dan logistik sebelum berkunjung. | • Hero profil *Curug Cibulao, Cisarua* (`+789 Mdpl`, `+10 Menit Dari Parkiran`, lencana *Destinasi Terverifikasi*).<br>• 4 Kartu Ringkasan (*Tipe Destinasi, Kondisi Rute, Fitur Utama, Nikmati Alamnya*).<br>• **Kalkulator Biaya End-to-End** interaktif (Tiket Masuk Rp28.000 + Parkir Rp10.000 = Total Rp38.000, tombol `+`/`-` & `Hitung Ulang`).<br>• Pratinjau **Katalog Visual (Tanpa Filter)** 6 foto utama + tautan *Lihat Semua Visual →*.<br>• **Peta Interaktif & Status Jalur** (Google Maps API + legenda rute resmi, parkir, pos registrasi, titik licin, titik pungli, satwa liar + tombol *Unduh Peta Offline*).<br>• **Indikator Keramaian** (Gauge setengah lingkaran *Sedang* & waktu terbaik berkunjung *Sebelum jam 09.00-10.00 WIB*).<br>• **Kontak PIC & Bantuan Darurat** (Pokdarwis Cibulao, Pos Ranger, Darurat 112, Pemandu Lokal + tombol *Salin*). |
| **4** | **Detail Visual** | `detail_visual.html`<br>`detail_visual.css` | Dokumentasi visual komprehensif dan panduan visual medan jalur pendakian atau wisata. | • Switcher tab media (**Foto** & **Video**) dengan indikator garis bawah aktif yang mulus.<br>• Filter kategori pil (**Semua, Alam, Fasilitas, Aktivitas, Lainnya**).<br>• Galeri 20 kartu media (grid 4x5) resolusi tinggi bebas *watermark* dengan lencana lokasi (*Air terjun utama*) & *lightbox* pratinjau.<br>• Keterangan total media (`60 foto dan 20 video`) & paginasi halaman. |
| **5** | **Search Success** | `search_success.html`<br>`search_succes.css` | Layar konfirmasi hasil pencarian ketika kata kunci atau filter destinasi berhasil ditemukan. | • Header konfirmasi *"Destinasi Wisata Alam Ditemukan"* beserta sub-teks instruksi.<br>• Kartu hasil pencarian spesifik (*Curug Cibulao, Cisarua, Bogor*) dengan lencana kategori, tag atribut fasilitas, status *Terverifikasi*, dan tombol panah menuju Detail Katalog.<br>• Tombol navigasi `← Kembali` di sudut kanan atas. |
| **6** | **Search Error** | `search_error.html`<br>`search_error.css` | Penanganan status kosong (*empty / error state*) ketika pencarian tidak membuahkan hasil. | • Ilustrasi status kegagalan pencarian (`tidak_ditemukan.png`).<br>• Pesan ramah pengguna *"Destinasi Tidak Ditemukan"*.<br>• Kartu **Tips Pencarian** (3 poin panduan).<br>• Dua tombol aksi pemulihan (**Reset Pencarian** & **Kembali**) untuk menjamin *Zero Dead-End Flows*. |
| **7** | **Bantuan Darurat** | `bantuan_darurat.html`<br>`bantuan_darurat.css` | Pusat mitigasi risiko dan penanganan cepat keselamatan wisatawan di lapangan. | • Hero edukasi siaga *"Jangan Panik, Kami Siap Membantu"*.<br>• **Tips Saat Keadaan Darurat** (5 langkah berurutan: *Hubungi Nomor Darurat, Sampaikan Lokasi, Jelaskan Kondisi, Tunggu Konfirmasi, Tetap Tenang*).<br>• **Tips Keselamatan di Alam** (5 panduan persiapan fisik, bekal, baterai/mode offline, alas kaki, kebersamaan).<br>• **Informasi Bantuan Cepat** (6 kartu navigasi termasuk tautan ke *Nomor Darurat Umum*).<br>• **Pertanyaan yang Sering Ditanyakan (FAQ)** (6 *accordion* interaktif 2 kolom). |
| **8** | **Nomor Darurat Umum** | `nomor_darurat_umum.html`<br>`nomor_darurat_umum.css` | Direktori kontak darurat instansi resmi dan pengelola kawasan konservasi gunung di Bogor. | • 6 Kartu Kontak Instansi Darurat Nasional & Lokal:<br>  1. **Polisi:** `110`<br>  2. **Pemadam Kebakaran:** `113`<br>  3. **Ambulans:** `118 / 119`<br>  4. **Taman Nasional G. Gede:** `0811-9155-815`<br>  5. **SAR / Basarnas:** `115`<br>  6. **Taman Nasional G. Salak:** `0857-2188-8664`<br>• Tombol aksi cepat interaktif **"Salin"** pada setiap kartu kontak.<br>• Tombol navigasi `← Kembali` di sudut kanan atas. |

---

## 5.3 Spesifikasi Interactive Components
1. **Komponen 1 - Filter Chips Kategori Wisata:**
   * Terletak pada layar Beranda, Eksplorasi Destinasi, dan Detail Visual.
   * Memiliki *state*: `Default`, `Hover`, dan `Active`.
   * Memungkinkan pengguna menyaring kategori (*Curug, Danau, Pendakian Gunung/Bukit*) serta kondisi rute secara instan tanpa memuat ulang layar.
2. **Komponen 2 - Kartu Destinasi & Interaksi Navigasi Cepat:**
   * Terpasang pada setiap kartu destinasi (*Card Component*).
   * Memiliki *micro-interaction state* (`Default`, `Hover` dengan efek angkat halus `translateY(-4px)`, dan `Active`) serta tombol panah bundar menuju halaman detail.
3. **Komponen 3 - Accordion Informasi & Kontak Darurat:**
   * Terpasang pada layar Bantuan Darurat.
   * Memiliki *state*: `Collapsed` (judul pertanyaan/informasi ringkas) $\rightarrow$ `Expanded` (rincian panduan tindakan darurat, prosedur pelaporan pungli, dan informasi evakuasi).

---

## 5.4 Design System & Style Guide (EksploTrip.)

### A. Tipografi (Font Family: **Poppins**)

| Kategori Layar | Style Name | Ukuran Font (`px`) | Line Height (`px`) | Penggunaan Utama |
| :--- | :--- | :---: | :---: | :--- |
| **Desktop** | **Ag Desktop H1** | `48px` | `58px` | Judul utama *Hero Section* skala penuh |
| **Desktop** | **Ag Desktop H2** | `40px` | `48px` | Judul besar halaman / *Banner Heading* |
| **Desktop** | **Ag Desktop H3** | `32px` | `40px` | Judul seksi utama (*Section Title*) |
| **Desktop** | **Ag Desktop H4** | `24px` | `32px` | Subjudul seksi / Judul kartu besar |
| **Desktop** | **Ag Desktop Body / SemiBold** | `16px` | `24px` | Teks paragraf utama, tombol, & navigasi |
| **Desktop** | **Ag Desktop Small** | `14px` | `20px` | Teks deskripsi kartu, filter, & sub-informasi |
| **Desktop** | **Ag Desktop Caption** | `12px` | `16px` | Label lencana (*badge*), *tag*, & catatan kaki |
| **Mobile** | **Ag Mobile H1** | `32px` | `40px` | Judul utama layar *mobile* |
| **Mobile** | **Ag Mobile H2** | `28px` | `36px` | Judul seksi utama *mobile* |
| **Mobile** | **Ag Mobile H3** | `24px` | `32px` | Subjudul seksi *mobile* |
| **Mobile** | **Ag Mobile H4** | `20px` | `28px` | Judul kartu *mobile* |
| **Mobile** | **Ag Mobile Body** | `16px` | `24px` | Teks isi *mobile* |
| **Mobile** | **Ag Mobile Small** | `14px` | `20px` | Teks sekunder *mobile* |
| **Mobile** | **Ag Mobile Caption** | `12px` | `16px` | Label kecil & *badge mobile* |

### B. Sistem Warna (*Color System - 60:30:10 Rule*)

| Kategori Warna | Nama Warna | Kode Hex | Peran & Penggunaan |
| :--- | :--- | :---: | :--- |
| **Konsep 60:30:10** | **Primary Background (60%)** | `#F4F4F4` | Warna latar belakang utama halaman (*Off-White*) |
| **Konsep 60:30:10** | **Secondary Color (30%)** | `#375E27` | Warna identitas alam utama (*Forest Green*) & latar Footer |
| **Konsep 60:30:10** | **Accent Color (10%)** | `#32AAC6` / `#568942` | Warna tombol aksi utama (*Ocean Teal*) & aksen lencana hijau |
| **Semantic Colors** | **Success** | `#9ABC4D` | Indikator berhasil, aman, atau kondisi normal |
| **Semantic Colors** | **Warning** | `#F5C33B` | Indikator peringatan, waspada, atau keramaian sedang |
| **Semantic Colors** | **Error / Danger** | `#E25136` | Indikator bahaya, darurat, atau peringatan pungli |
| **Supporting Colors** | **Dark Teal** | `#287D92` | *Hover state* pada tombol utama *Ocean Teal* |
| **Supporting Colors** | **Light Green** | `#B4BC43` | Lencana (*Badge*) & elemen dekoratif alam |
| **Supporting Colors** | **Yellow** | `#F5C33B` | *Highlight* & ikon Polisi |
| **Supporting Colors** | **Orange** | `#F68E2E` | *Highlight* sekunder & ikon SAR/Basarnas |
| **Supporting Colors** | **Green** | `#568942` | *Text highlight*, lencana verifikasi, & ikon lingkaran seksi |
| **Supporting Colors** | **Red** | `#E25136` | Tombol/ikon darurat & pemberitahuan penting |
| **Neutral Colors** | **Black** | `#040811` | Warna teks utama & judul (*Heading*) |
| **Neutral Colors** | **Grey** | `#777777` | Warna teks sekunder, *placeholder*, & *caption* |
| **Neutral Colors** | **Off White** | `#F4F4F4` | Latar belakang halaman |
| **Neutral Colors** | **White** | `#FFFFFF` | Latar belakang kartu (*Card*), *container*, & input |
| **Gradients** | **Nature Gradient** | `#9ABC4D` - `#568942` | Gradasi elemen bertema vegetasi/hutan |
| **Gradients** | **Ocean Gradient** | `#32AAC6` - `#287D92` | Gradasi elemen bertema air/curug & lencana visual |
| **Gradients** | **Sunrise Gradient** | `#F5C33B` - `#F68E2E` | Gradasi hangat indikator peringatan |
| **Gradients** | **Sunset Gradient** | `#F68E2E` - `#E25136` | Gradasi tegas indikator bahaya/darurat |

---

## 5.5 Mekanika Prototipe, Logika Navigasi, & Interaksi

### 1. Alur Navigasi Antar Frame
* **Alur Penelusuran Utama:** `Beranda` $\rightarrow$ `Eksplorasi Destinasi` $\rightarrow$ `Detail Katalog` $\rightarrow$ `Detail Visual`.
* **Alur Pencarian & Pemulihan Error:**
  * Pencarian Valid $\rightarrow$ `Layar Search Success` $\rightarrow$ `Detail Katalog`.
  * Pencarian Gagal $\rightarrow$ `Layar Search Error` $\rightarrow$ Tombol `"Reset Pencarian"` mengembalikan pengguna ke `Eksplorasi Destinasi` atau tombol `"Kembali"` ke `Beranda`.
* **Alur Akses Darurat:** Menu/Tombol `Bantuan Darurat` $\rightarrow$ `Layar Bantuan Darurat` $\rightarrow$ Kartu `Nomor Darurat Umum` $\rightarrow$ `Layar Nomor Darurat Umum`.

### 2. Logika Navigasi Rute Dinamis (Radius 5 km)
* **Jarak Lebih dari 5 km ($> 5\text{ km}$):** Tombol CTA navigasi pada `Detail Katalog` mengarahkan pengguna via integrasi **Google Maps** untuk panduan perjalanan jalan raya dari luar daerah menuju gerbang area wisata.
* **Jarak Kurang dari atau Sama dengan 5 km ($\le 5\text{ km}$):** Sistem antarmuka mengaktifkan fitur internal **Peta Jalur & Titik Penanda Mikro (*Micro Checkpoints*)** yang menampilkan jalur setapak lokal, titik parkir kendaraan terakhir, pos registrasi/tiket resmi, titik rawan licin/pungli, sumber mata air, serta pos peristirahatan menuju air terjun atau puncak bukit.

### 3. Penerapan Smart Animate & Zero Dead-End Flows
* **Smart Animate:** Diterapkan pada perpindahan garis indikator menu navigasi dan tab kategori yang mulus, saat kartu destinasi pada `Detail Katalog` dibuka menuju pratinjau galeri `Detail Visual`, serta pada interaksi pembukaan *accordion* darurat.
* **Zero Dead-End Flows:** Seluruh layar memiliki tombol kembali (`← Kembali` / `Kembali Ke Beranda`) serta navigasi atas dan bawah (*Footer*) yang aktif sehingga pengguna tidak pernah terjebak pada layar buntu.

---

# BAGIAN 6: ARSITEKTUR KODE HTML5 SEMANTIK, REFAKTORISASI AI, & VALIDASI W3C (MINGGU KE-6)

## 6.1 Alur Pengerjaan & Struktur Direktori Aset
Pengerjaan tahap implementasi kode diawali dengan persiapan aset dan struktur berkas mandiri sebelum proses pembuatan kode di IDE **AntiGravity**:

```text
eksplotrip/
├── index.html
├── beranda.html
├── eksplorasi_destinasi.html
├── detail_katalog.html
├── detail_visual.html
├── search_success.html
├── search_error.html
├── bantuan_darurat.html
├── nomor_darurat_umum.html
├── prompt-log.md
├── validation.png
└── assets/
    └── images/
        ├── beranda/
        │   ├── banner_atas.png
        │   ├── banner_bawah.png
        │   ├── list_katalog.png
        │   ├── logo_aiplo.png
        │   └── logo_eksplotrip_navbar.png
        ├── eksplorasi_destinasi/
        │   └── ...
        ├── detail_katalog/
        │   └── ...
        ├── detail_visual/
        │   └── ...
        ├── search_success/
        │   └── ...
        ├── search_error/
        │   └── ...
        ├── bantuan_darurat/
        │   └── ...
        └── nomor_darurat_umum/
            └── ...
```

### Tiga Langkah Standar Alur Pengerjaan
* **Langkah 1 (Ekspor & Isolasi Aset):** Mengekspor aset grafis dari kanvas Figma ke folder terisolasi `./assets/images/` per halaman. Logo dan ikon vektor disimpan dalam format `.svg` atau `.png`, serta foto persona/lanskap disimpan dalam format `.png` / `.webp` menggunakan konvensi huruf kecil (*kebab-case* / *snake_case*).
* **Langkah 2 (Inisialisasi Berkas):** Membuat berkas HTML kosong sesuai nama 8 layar utama prototipe.
* **Langkah 3 (Prompting Bertahap di AntiGravity):** Memanfaatkan fitur asisten AI pada editor kode AntiGravity dengan pendekatan *prompting* bertahap dan instruksi semantik HTML5 yang ketat.

---

## 6.2 Dokumentasi Prompting AI & Refaktorisasi Kode (*Before vs After*)

### 1. Instruksi Prompt Awal AI (Contoh Halaman Beranda)
```text
"Buat kerangka HTML murni (HTML5) yang super minimalis tanpa CSS dan JavaScript. Hanya struktur teks dan placeholder gambar. Untuk bagian banner, letakkan teks ini tepat setelah gambar banner:
Jelajahi Alam, Jaga Bersama
Eksplorasi Wisata Keindahan Alam di Bogor yang Aman & Transparan
Temukan rute resmi, estimasi biaya riil, dan kondisi lapangan curug, danau, serta gunung atau bukit di Bogor tanpa khawatir pungli atau tersesat.
#CurugBogor
#DanauIndah
#TrekkingAman
#BebasPungli
Sisa kontennya mengikuti struktur layout gambar yang dilampirkan, menggunakan tag HTML yang sesuai (seperti header, nav, section, footer, h1-h6, p, img untuk placeholder, dll), untuk nama-nama struktur file html dan folder image sudah ada di folder eksplotrip, untuk tahap ini membuat dulu tampilan beranda, untuk yang lainnya bertahap"
```

### 2. Analisis Temuan Galat Hasil W3C Validator & Audit Manual
Berdasarkan pengujian awal dokumen hasil keluaran (*pure output*) AI pada **W3C Nu HTML Checker** (`https://validator.w3.org/nu/`), ditemukan dua inkonsistensi struktur utama pada 8 layar awal yang kemudian direfaktorisasi:

| No | Jenis Temuan W3C Validator | Pesan Galat / Peringatan W3C | Penyebab (*Before*) | Solusi Refaktorisasi (*After*) |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Penyalahgunaan Tag `<section>`** | `Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.` | AI membungkus blok *banner*, *filter*, dan *call to action* menggunakan tag `<section>` tanpa menyertakan elemen judul heading. | Menurut spesifikasi standar W3C HTML5, tag `<section>` adalah pembungkus semantik tematik yang wajib memiliki judul heading (`<h2>`-`<h6>`). Bagian yang murni berfungsi sebagai kontainer tata letak tanpa heading direfaktorisasi menjadi kontainer netral `<div>`. |
| **2** | **Hierarki Heading Melompat (`<h5>` setelah `<h3>`)** | `Error: The heading h5 (with computed level 5) follows the heading h3 (with computed level 3), skipping 1 heading level.` | Pada bagian navigasi *footer*, AI langsung membuat judul kolom navigasi dengan tingkat heading `<h5>`/`<h4>` yang melompati urutan setelah heading seksi utama `<h3>`/`<h2>`. | Direfaktorisasi menjadi urutan heading yang berkesinambungan (`<h4>`/`<h3>`) atau elemen berbobot semantik agar struktur *outline* dokumen urut dan ramah pembaca layar (*screen reader*). |

> **Catatan Teknis Arsitektur HTML:** Elemen `<table>` **tidak digunakan** di dalam kode web proyek EksploTrip. Seluruh komponen daftar kartu katalog, rincian informasi, dan direktori nomor darurat dibangun menggunakan elemen semantik modern (`<article>`, `<section>`, `<figure>`, `<details>`, `<fieldset>`, dan `<div>`) yang dipadukan dengan tata letak CSS Grid dan Flexbox.

---

## 6.3 Struktur & Pemetaan 8 Layar Utama (HTML5 Semantik & Status Validasi W3C)

Seluruh 8 layar utama telah direfaktorisasi dan lolos uji validasi **W3C Nu HTML Checker (vnu 26.10.9 / 26.10.11)** dengan status **"Document checking completed. No errors or warnings to show."**:

| No | Nama Layar & Berkas HTML | Peran Alur | Elemen Semantik Utama yang Digunakan | Status Validasi W3C |
| :-: | :--- | :--- | :--- | :---: |
| **1** | **Beranda**<br>(`beranda.html`) | Layar awal penjelajahan pengguna yang menyajikan pencarian kata kunci, pemilihan kategori cepat, kartu kurasi destinasi terpopuler di Bogor, serta nilai keunggulan platform. | `<header>`, `<nav>`, `<form role="search">`, `<main>`, `<h1>`, `<h2>`, `<article>`, `<h3>`, `<fieldset>`, `<legend>`, dan `<footer>`. | **Valid (0 Error, 0 Warning)** |
| **2** | **Eksplorasi Destinasi**<br>(`eksplorasi_destinasi.html`) | Direktori penelusuran menyeluruh bagi pengguna untuk menyaring destinasi berdasarkan kategori wisata, kondisi jalur, dan kebutuhan khusus. | Filter tipe destinasi menggunakan `<fieldset>` & `<legend>`, daftar kartu artikel menggunakan `<article>`, judul destinasi `<h3>`, dan navigasi penomoran halaman menggunakan `<nav aria-label="Navigasi halaman destinasi">`. | **Valid (0 Error, 0 Warning)** |
| **3** | **Detail Katalog**<br>(`detail_katalog.html`) | Lembar informasi teknis komprehensif sebelum keberangkatan, memuat kalkulator biaya tiket/parkir, indikator keramaian, peta mikro, serta kontak narahubung resmi. | `<form>` kalkulator *end-to-end* dengan input angka dan elemen `<output>`, `<figure>` & `<figcaption>` untuk katalog visual, `<meter>` untuk indikator tingkat keramaian, dan tautan panggilan cepat `<a href="tel:...">`. | **Valid (0 Error, 0 Warning)** |
| **4** | **Detail Visual**<br>(`detail_visual.html`) | Galeri dokumentasi visual autentik jalur pendakian/wisata beresolusi tinggi tanpa *watermark* guna memastikan keselamatan dan ekspektasi medan yang akurat. | Tombol navigasi tab kategori dengan `<button type="button" aria-pressed="...">`, kumpulan gambar menggunakan `<figure>` dan `<figcaption>`, serta navigasi *pagination* dengan atribut `aria-current="page"`. | **Valid (0 Error, 0 Warning)** |
| **5** | **Search Success**<br>(`search_success.html`) | Layar konfirmasi saat pencarian kata kunci berhasil menemukan destinasi yang sesuai. | `<h1>` judul status hasil pencarian, `<article>` untuk kartu destinasi hasil temuan, teks deskriptif lokasi, dan tombol panah navigasi menuju detail katalog. | **Valid (0 Error, 0 Warning)** |
| **6** | **Search Error**<br>(`search_error.html`) | Penanganan status kosong (*empty / error state*) ketika pencarian tidak membuahkan hasil agar alur tidak buntu (*Zero Dead-End Flows*). | `<img>` ilustrasi dengan teks `alt` jelas, `<aside>` memuat tips pencarian dengan daftar tidak berurutan `<ul>`, serta tombol tautan aksi `<a>` untuk *Reset Pencarian* dan *Kembali*. | **Valid (0 Error, 0 Warning)** |
| **7** | **Bantuan Darurat**<br>(`bantuan_darurat.html`) | Pusat mitigasi keselamatan, prosedur pertolongan pertama, direktori kontak cepat, serta kumpulan tanya-jawab darurat. | Daftar bernomor `<ol>` untuk langkah darurat berurutan, kartu layanan menggunakan `<article>`, dan daftar pertanyaan umum menggunakan elemen interaktif murni `<details>` & `<summary>`. | **Valid (0 Error, 0 Warning)** |
| **8** | **Nomor Darurat Umum**<br>(`nomor_darurat_umum.html`) | Direktori rujukan nomor kontak instansi resmi (Polisi, Damkar, Ambulans, SAR, Balai Konservasi TN Gede & Salak). | Kartu informasi instansi `<article>`, tautan panggilan telepon langsung `<a href="tel:...">`, dan tombol interaktif `<button type="button">Salin</button>`. | **Valid (0 Error, 0 Warning)** |
