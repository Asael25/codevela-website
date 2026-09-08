export const CONTACT = {
    admins: [
        { name: "Admin 1", phone: "6281234239911", waLink: "https://wa.me/6281234239911" },
        { name: "Admin 2", phone: "6285748174086", waLink: "https://wa.me/6285748174086" },
    ],
    // dipakai untuk tombol CTA utama (Konsultasi Gratis, dsb) — default ke admin pertama
    primaryWaLink: "https://wa.me/6281234239911",
};

export const BENEFITS = [
    {
        icon: "Code2",
        title: "Kualitas & Kerapian",
        description: "Clean code: kode terstruktur, mudah di-maintenance, bukan asal jalan.",
    },
    {
        icon: "Clock",
        title: "Tepat Waktu",
        description: "On-time delivery, komitmen penuh pada deadline yang disepakati di awal.",
    },
    {
        icon: "MessageSquare",
        title: "Komunikasi Transparan",
        description: "Update progres pengerjaan secara rutin, bukan hilang sampai H-1 deadline.",
    },
];

export type PricingTier = {
    title: string;
    icon: "GraduationCap" | "Globe" | "Cpu";
    priceRange: string;
    floorLabel: string;
    floorItems: string[];
    ceilingLabel: string;
    ceilingItems: string[];
    benefits: string[];
};

export const PRICING: PricingTier[] = [
    {
        title: "Tugas Kuliah / Mini Project",
        icon: "GraduationCap",
        priceRange: "Rp 100.000 – Rp 800.000",
        floorLabel: "Batas Bawah",
        floorItems: [
            "Perbaikan bug spesifik",
            "Slicing UI HTML/CSS dasar",
            "Program logika (CLI)",
        ],
        ceilingLabel: "Batas Atas",
        ceilingItems: [
            "Pembuatan mini project",
            "Aplikasi web CRUD sederhana",
            "Prototype mobile dasar",
        ],
        benefits: [
            "Source code lengkap",
            "Penjelasan alur program",
            "Revisi minor 1–2x",
        ],
    },
    {
        title: "Web Company Profile & Landing Page",
        icon: "Globe",
        priceRange: "Rp 800.000 – Rp 1.500.000",
        floorLabel: "Batas Bawah",
        floorItems: [
            "Single landing page statis",
            "Desain responsif",
            "Integrasi tombol WhatsApp",
        ],
        ceilingLabel: "Batas Atas",
        ceilingItems: [
            "Website multi-halaman (Home, About, Services)",
            "Terintegrasi CMS (Admin Panel) ringan",
            "Setup hosting dasar",
        ],
        benefits: [
            "Desain modern",
            "Optimasi loading",
            "Garansi bug 1 bulan",
        ],
    },
    {
        title: "Custom Web App / Sistem Informasi",
        icon: "Cpu",
        priceRange: "Mulai Rp 1.500.000++",
        floorLabel: "Batas Bawah",
        floorItems: [
            "Sistem informasi dasar (1–2 role user)",
            "Fitur CRUD standar",
            "Cetak laporan sederhana",
        ],
        ceilingLabel: "Batas Atas (Custom)",
        ceilingItems: [
            "Menyesuaikan alur bisnis kompleks",
            "Banyak role pengguna",
            "Integrasi API, keamanan ekstra",
        ],
        benefits: [
            "Analisis database",
            "Testing menyeluruh",
            "Bantuan deployment & garansi maintenance",
        ],
    },
];

export const PRICING_DISCLAIMER =
    "Harga final menyesuaikan tingkat kesulitan, fitur, dan deadline. Hubungi kami untuk penawaran terbaik.";


export const GUARANTEES = [
    {
        icon: "ShieldCheck",
        title: "Bebas Bug",
        description: "Perbaikan error gratis setelah masa rilis, sesuai ketentuan paket yang dipilih.",
    },
    {
        icon: "RefreshCw",
        title: "Revisi Terukur",
        description: "Bebas revisi minor pada tahap review, sebelum penyerahan final ke klien.",
    },
    {
        icon: "Lock",
        title: "Privasi Data",
        description: "Jaminan kerahasiaan data proyek, tugas, atau ide klien. Tidak dibagikan ke pihak lain.",
    },
];

export type PortfolioCategory = "Highlight" | "Company Profile" | "Sistem Informasi" | "Tugas Kuliah";

export type PortfolioItem = {
    title: string;
    category: Exclude<PortfolioCategory, "Highlight">;
    tagline: string;
    challenge: string;
    solution: string;
    stack: string[];
    highlights: string[];
    demoBadge: string;
    liveUrl?: string; // Ganti dengan link akses live demo proyek
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
    "Highlight",
    "Company Profile",
    "Sistem Informasi",
    "Tugas Kuliah",
];

export const PORTFOLIO: PortfolioItem[] = [
    {
        title: "CV. Chandra Kirana Indonesia",
        category: "Company Profile",
        tagline: "Website Korporat Kontraktor Konstruksi Multi-Halaman",
        challenge: "Kontraktor konstruksi butuh company profile multi-halaman yang terasa premium, kredibel di mata klien korporat, dan mudah diakses di smartphone.",
        solution: "Website multi-halaman berkinerja tinggi dengan portofolio proyek terfilter, interaktif testimoni, dan formulir konsultasi terintegrasi.",
        stack: ["Tailwind CSS", "Vanilla JS", "FormSubmit"],
        highlights: ["Desain elegan & mobile-first", "Filter portofolio proyek dinamis", "Formulir inquiry terhubung email"],
        demoBadge: "Corporate Live",
    },
    {
        title: "SIMKES — Sistem Informasi Manajemen Kesehatan",
        category: "Sistem Informasi",
        tagline: "Platform Tata Kelola Faskes & Rekam Medis Modular",
        challenge: "Instansi kesehatan memerlukan sistem pencatatan pasien dan modul manajemen terpadu yang siap dikembangkan bertahap dengan banyak level akses pengguna.",
        solution: "Arsitektur modular dengan pembagian role & permission dinamis (Spatie), integrasi API autentikasi Sanctum, dan antarmuka responsif React-Tailwind.",
        stack: ["Laravel 12", "Sanctum", "Spatie", "React", "Tailwind"],
        highlights: ["Role-based access control fleksibel", "Struktur database relational scalable", "Export laporan medis cepat"],
        demoBadge: "Modular System",
    },
    {
        title: "Sistem Arsip & Kepegawaian DPU Bina Marga Jatim",
        category: "Sistem Informasi",
        tagline: "Digitalisasi Pencatatan Arsip Fisik & Cetak Berita Acara",
        challenge: "Pengelolaan arsip fisik unit kerja dan dokumen kepegawaian masih manual dan rentan selisih data berita acara serah-terima berkas.",
        solution: "Sistem digitalisasi inventaris arsip dengan tracking penerima, tanggal serah berkas, dan modul cetak otomatis Berita Acara dalam format standar.",
        stack: ["Laravel", "MySQL", "Bootstrap"],
        highlights: ["Pencatatan kardus & unit kerja", "Cetak Berita Acara otomatis (PDF)", "Log riwayat pengiriman transparan"],
        demoBadge: "Gov Enterprise",
    },
    {
        title: "MCrepes — Sistem Inventori & Algoritma EOQ",
        category: "Tugas Kuliah",
        tagline: "Manajemen Stok F&B Otomatis dengan Klasifikasi ABC",
        challenge: "Kebutuhan tugas akhir yang menguji implementasi teori supply chain konkret untuk mengontrol stok bahan baku UMKM tanpa penumpukan modal.",
        solution: "Aplikasi inventori berbasis web yang mengotomasi perhitungan ABC Classification, Economic Order Quantity (EOQ), Safety Stock, dan kalkulasi Reorder Point.",
        stack: ["Laravel", "MySQL", "ChartJS"],
        highlights: ["Kalkulasi otomatis Reorder Point", "Grafik tren stok bahan baku", "Lengkap dokumentasi logika coding"],
        demoBadge: "Akademik & Riset",
    },
    {
        title: "Apex Creative — Agency Portfolio & Client Intake",
        category: "Company Profile",
        tagline: "High-Performance Portfolio dengan Konversi Klien Cepat",
        challenge: "Studio kreatif butuh identitas digital bernuansa modern minimalis yang cepat dibuka oleh klien internasional tanpa lagging.",
        solution: "Website showcase modern berbasis Next.js dengan animasi micro-interaction halus, integrasi booking kalender, dan optimasi Core Web Vitals 99+.",
        stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        highlights: ["Lighthouse Score 99+", "Animasi interaktif halus", "Form briefing proyek terstruktur"],
        demoBadge: "Showcase Ready",
    },
];

export type Testimonial = {
    name: string;
    role: string;
    quote: string;
};

// 2 pertama asli dari highlight IG, sisanya masih placeholder
export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Chris",
        role: "Tugas Kuliah",
        quote: "Udah aku cek dan sesuai permintaan, mantap banget hasilnya ",
    },
    {
        name: "B***",
        role: "Tugas Kuliah",
        quote: "Terimakasih banyak kak projeknya lengkap, adminnya baik dan ramah👍🤩"
    },
    {
        name: "Dimas P***",
        role: "Sistem Informasi",
        quote: "Komunikasinya enak dan jelas, revisi ditangani cepat, dan progres selalu di-update sampai tuntas.",
    },
    {
        name: "Reza A***",
        role: "Landing Page",
        quote: "Desainnya modern, loading-nya super cepat dan responsif, langsung dipakai buat campaign tanpa kendala.",
    },
    {
        name: "Fajar K***",
        role: "Custom Web App",
        quote: "Alur logika dan skema databasenya dirancang rapi sejak awal, pas implementasi coding jadi minim bug.",
    },
];

export const SOCIALS = {
    instagram: "https://instagram.com/codevela.id",
    tiktok: "https://tiktok.com/@codevela.id",
    linktree: "https://linktr.ee/codevela.id",
};

export const PROCESS_STEPS = [
    {
        number: "01",
        title: "KONSULTASI & BRIEFING",
        description: "Hubungi kita lewat DM/WA. Jelasin detail kebutuhan tugas, project, fitur, dan deadline kamu.",
        icon: "MessageSquareCode",
    },
    {
        number: "02",
        title: "ESTIMASI HARGA & DEAL",
        description: "Kita akan berikan estimasi harga dan waktu pengerjaan. Kalau udah oke, lakukan pembayaran DP (Down Payment) biar kita bisa langsung ngerjain.",
        icon: "Calculator",
    },
    {
        number: "03",
        title: "PROSES PENGERJAAN",
        description: "Tim langsung mengeksekusi code. Kamu bisa minta update progress secara berkala biar tetap tenang.",
        icon: "Terminal",
    },
    {
        number: "04",
        title: "PENYERAHAN & PELUNASAN",
        description: "Project selesai! Kami akan mendemokan hasilnya via screenshot atau screen record. Setelah pelunasan, source code atau aplikasi langsung kita kirim lengkap.",
        icon: "CheckCircle2",
    },
];

export type FAQCategory = "Semua" | "Alur & Pengerjaan" | "Biaya & Pembayaran" | "Teknis & Garansi";

export const FAQ_CATEGORIES: FAQCategory[] = [
    "Semua",
    "Alur & Pengerjaan",
    "Biaya & Pembayaran",
    "Teknis & Garansi",
];

export type FAQItem = {
    question: string;
    answer: string;
    category: Exclude<FAQCategory, "Semua">;
    badge?: string;
    keyPoints?: string[];
};

export const FAQS: FAQItem[] = [
    {
        question: "Sistem pembayarannya bagaimana?",
        category: "Biaya & Pembayaran",
        badge: "Sistem DP Aman",
        answer: "Kami menggunakan skema Down Payment (DP) 30% - 50% di awal sebelum pengerjaan dimulai sebagai tanda jadi. Sisa pelunasan hanya dibayarkan setelah proyek selesai dan Anda telah memverifikasi hasilnya sesuai spesifikasi yang disepakati.",
        keyPoints: ["DP di awal sebagai komitmen", "Demo hasil via live link / video", "Pelunasan setelah diverifikasi"],
    },
    {
        question: "Berapa lama waktu pengerjaannya?",
        category: "Alur & Pengerjaan",
        badge: "Fleksibel Sesuai Scope",
        answer: "Durasi pengerjaan sangat disesuaikan dengan skala proyek: Tugas kuliah atau fitur spesifik biasanya memakan waktu 1–5 hari kerja. Company profile atau landing page sekitar 1–2 minggu. Untuk sistem informasi atau custom web app berskala besar berkisar 2–4 minggu. Estimasi pasti disepakati di awal sebelum mulai.",
        keyPoints: ["Tugas/Mini Project: 1–5 Hari", "Company Profile: 1–2 Minggu", "Sistem Informasi: 2–4 Minggu"],
    },
    {
        question: "Apakah ada garansi jika ada bug atau error setelah selesai?",
        category: "Teknis & Garansi",
        badge: "Garansi Bebas Bug",
        answer: "Pasti ada! Kami memberikan masa garansi perbaikan bug/error gratis selama 14 hingga 30 hari kalender setelah penyerahan final. Jika ditemukan kendala fungsi pada fitur yang telah disepakati, tim kami akan langsung memperbaikinya dengan prioritas tinggi.",
        keyPoints: ["Masa retensi 14–30 hari", "Perbaikan bug prioritas", "Bebas biaya tambahan"],
    },
    {
        question: "Apakah source code dan database sepenuhnya menjadi milik saya?",
        category: "Teknis & Garansi",
        badge: "100% Hak Milik Klien",
        answer: "Ya, 100% source code, aset, file migrasi database, dan dokumentasi instalasi sepenuhnya diserahkan kepada Anda tanpa sistem royalti atau vendor lock-in. Anda bebas memodifikasi dan mengembangkan kodenya di kemudian hari.",
        keyPoints: ["Full source code tanpa enkripsi", "Bebas biaya langganan tersembunyi", "Dokumentasi setup lokal/server"],
    },
    {
        question: "Bisa bantu tugas kuliah atau skripsi dengan deadline mepet?",
        category: "Alur & Pengerjaan",
        badge: "Layanan Express",
        answer: "Bisa! Kami menyediakan opsi pengerjaan Express untuk kebutuhan mendesak (H-2 atau H-3), bergantung pada ketersediaan slot pengerjaan tim. Kami sangat berkomitmen menjaga ketepatan waktu agar tugas Anda terkumpul tepat jadwal.",
        keyPoints: ["Opsi pengerjaan kilat/express", "Slot prioritas khusus", "Update intensif berkala"],
    },
    {
        question: "Teknologi dan bahasa pemrograman apa saja yang didukung?",
        category: "Teknis & Garansi",
        badge: "Multi-Stack Modern",
        answer: "Kami menguasai ekosistem pemrograman modern: Frontend (React, Next.js, Vue, Tailwind CSS, JavaScript), Backend (Laravel, PHP, Node.js, Express, Python), Database (MySQL, PostgreSQL, MongoDB, SQLite), serta implementasi REST API dan integrasi Payment Gateway/WhatsApp.",
        keyPoints: ["Laravel / PHP / CodeIgniter", "Next.js / React / Vue / Tailwind", "Python / Node.js / REST API"],
    },
    {
        question: "Bagaimana dengan revisi? Apakah bisa revisi jika ada yang kurang cocok?",
        category: "Alur & Pengerjaan",
        badge: "Revisi Terukur",
        answer: "Revisi minor pada styling, teks, atau penyesuaian alur yang telah ada dalam kesepakatan awal dilayani secara gratis. Apabila terdapat permintaan fitur baru di luar kesepakatan awal (scope creep), kami akan mendiskusikan estimasi waktu dan biayanya terlebih dahulu secara transparan.",
        keyPoints: ["Revisi minor gratis", "Transparan tanpa biaya gaib", "Diskusi terbuka sebelum implementasi"],
    },
    {
        question: "Apakah privasi dan kerahasiaan data proyek saya terjamin?",
        category: "Teknis & Garansi",
        badge: "Kerahasiaan Terjamin (NDA)",
        answer: "Sangat terjamin. Kami memperlakukan kerahasiaan data proyek, ide bisnis, maupun materi tugas akademik sebagai prioritas utama. Seluruh data dan kode program tidak akan pernah dipublikasikan atau dibagikan ke pihak manapun tanpa izin tertulis dari Anda.",
        keyPoints: ["Integritas privasi tinggi", "Data terlindungi aman", "Kerahasiaan akademik dijaga"],
    },
    {
        question: "Apakah dibantu proses deploy ke hosting, VPS, atau cPanel?",
        category: "Teknis & Garansi",
        badge: "Bantuan Deployment",
        answer: "Tentu saja! Kami siap mendampingi atau membantu proses deployment hingga website aktif online di server pilihan Anda, baik di cPanel (shared hosting), VPS (Ubuntu/Nginx/Apache), maupun cloud platform modern seperti Vercel dan Railway.",
        keyPoints: ["Setup domain & hosting", "Konfigurasi database & SSL", "Panduan operasional website"],
    },
    {
        question: "Untuk mahasiswa, apakah ada sesi penjelasan alur kode program?",
        category: "Alur & Pengerjaan",
        badge: "Bimbingan Penjelasan Kode",
        answer: "Ya, kami menyediakan ringkasan alur kerja program (code explanation) serta siap menjawab pertanyaan teknis Anda seputar logika kode agar Anda percaya diri dan siap saat mempresentasikannya di hadapan dosen penguji.",
        keyPoints: ["Penjelasan alur logika coding", "Catatan struktur folder & controller", "Siap untuk presentasi/sidang"],
    },
];