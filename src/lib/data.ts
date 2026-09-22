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
        description: "Bebas revisi minor sebanyak 3x pada tahap review, sebelum penyerahan final ke klien.",
    },
    {
        icon: "Lock",
        title: "Privasi Data",
        description: "Jaminan kerahasiaan data proyek, tugas, atau ide klien. Tidak dibagikan ke pihak lain.",
    },
];

export type PortfolioCategory =
    | "Highlight"
    | "Sistem Informasi"
    | "Company Profile"
    | "Mobile Apps"
    | "Tugas Kuliah";

export type PortfolioItem = {
    number?: string;
    slug: string;
    title: string;
    year?: string;
    category: Exclude<PortfolioCategory, "Highlight">;
    categorySubtitle?: string;
    tagline: string;
    challenge?: string;
    solution?: string;
    description: string;
    stack: string[];
    highlights: string[];
    demoBadge: string;
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    images?: string[];
    imageFit?: "cover" | "contain";
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
    "Highlight",
    "Sistem Informasi",
    "Company Profile",
    "Mobile Apps",
    "Tugas Kuliah",
];

export const PORTFOLIO: PortfolioItem[] = [
    {
        number: "01",
        slug: "roommaster",
        title: "RoomMaster",
        year: "2026",
        category: "Sistem Informasi",
        categorySubtitle: "Agentic AI × Hotel Management",
        tagline: "Autonomous AI co-pilot untuk operasional hotel & reservasi real-time.",
        description: "Platform PMS generasi baru dengan Agentic AI co-pilot otonom untuk otomasi reservasi, permintaan tamu, dan pengecekan ketersediaan kamar via tool-calling aman.",
        challenge: "Operasional hotel konvensional sering terhambat proses reservasi lambat, koordinasi manual kamar kosong, dan beban inquiry tamu yang menumpuk di meja front-desk.",
        solution: "Agentic AI co-pilot otonom dengan ReAct pattern dan structured tool-calling aman yang terintegrasi langsung ke PostgreSQL via Supabase untuk orkestrasi operasional hotel real-time.",
        stack: ["Next.js", "TypeScript", "LangChain", "OpenAI GPT-4", "Supabase", "PostgreSQL"],
        highlights: [
            "Agentic AI co-pilot dengan ReAct Pattern & tool-calling aman",
            "Database PostgreSQL real-time dengan Row-Level Security (RLS)",
        ],
        demoBadge: "Agentic AI",
        githubUrl: "https://github.com/neovdn/RoomMasterb-1",
        imageUrl: "/portfolio/roommaster.webp",
    },
    {
        number: "02",
        slug: "mutiara-bangsa",
        title: "Mutiara Bangsa",
        year: "2025",
        category: "Sistem Informasi",
        categorySubtitle: "AI-Powered Retail & Forecasting",
        tagline: "Digital storefront dengan demand forecasting & restock barang otomatis.",
        description: "Platform digital commerce ritel dengan analitik demand forecasting berbasis moving average untuk memprediksi kebutuhan stok dan rekomendasi reorder otomatis.",
        challenge: "Distributor ritel regional kesulitan menyeimbangkan persediaan barang musiman sehingga sering terjadi overstock pada barang lambat atau kehabisan stok saat permintaan tinggi.",
        solution: "Storefront e-commerce modern dengan dasbor predictive analytics berbasis sales velocity aggregation dan moving average forecasting untuk rekomendasi restock presisi.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Analytics"],
        highlights: [
            "Etalase belanja cepat dengan checkout instan terintegrasi",
            "Demand forecasting & rekomendasi restock otomatis terpadu",
        ],
        demoBadge: "Predictive Commerce",
        liveUrl: "https://mutiarabangsa.vercel.app/",
        githubUrl: "https://github.com/neovdn/mutiarabangsa",
        imageUrl: "/portfolio/mutiarabangsa.webp",
    },
    {
        number: "03",
        slug: "migaskita",
        title: "MigasKita",
        year: "2024 — 2025",
        category: "Mobile Apps",
        categorySubtitle: "Enterprise Mobile HR & Geofencing",
        tagline: "Mobile attendance tenaga kerja dengan validasi selfie & polygon geofencing.",
        description: "Aplikasi absensi mobile cross-platform personel sektor energi dengan batasan polygon geofencing presisi tinggi, anti-fake GPS, dan sinkronisasi offline-first.",
        challenge: "Verifikasi kehadiran tenaga kerja di sektor energi dengan lokasi operasional tersebar sering rentan kecurangan fake GPS dan kendala koneksi di area remote.",
        solution: "Aplikasi mobile Flutter berarsitektur offline-first dengan polygon geofencing akurat, deteksi anti-mock GPS/root, serta validasi selfie kamera langsung berpenanda waktu.",
        stack: ["Flutter", "Dart", "BLoC State", "Firebase", "Google Maps API"],
        highlights: [
            "Polygon geofencing presisi tinggi & deteksi anti-mock GPS",
            "Validasi swafoto langsung & sinkronisasi offline-first Cloud Firestore",
        ],
        demoBadge: "Mobile Enterprise",
        githubUrl: "https://github.com/neovdn/migaskita",
        imageUrl: "/portfolio/migaskita.webp",
        images: ["/portfolio/migaskita.webp", "/portfolio/migaskita_phone.webp"],
        imageFit: "contain",
    },
    {
        number: "04",
        slug: "chandra-kirana-indonesia",
        title: "CV Chandra Kirana Indonesia",
        year: "2025",
        category: "Company Profile",
        categorySubtitle: "Corporate Profile & Industrial Services",
        tagline: "Website profil korporat resmi dan katalog layanan teknik industri.",
        description: "Portal profil korporat kontraktor industri resmi dengan katalog layanan teknik terstruktur, performa tinggi Static Site Generation (SSG), dan integrasi inquiry B2B.",
        challenge: "Perusahaan kontraktor industri membutuhkan portal korporat yang kokoh, kredibel, dan berkecepatan tinggi untuk memamerkan portofolio proyek konstruksi kepada klien B2B.",
        solution: "Platform web korporat berbasis Next.js App Router dengan Static Site Generation (SSG), tipografi industri modern, katalog layanan interaktif, dan integrasi inquiry instan.",
        stack: ["Next.js (SSG)", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        highlights: [
            "Katalog teknik & konstruksi industri terstruktur dan responsif",
            "High-performance SSG & integrasi jalur inquiry B2B WhatsApp",
        ],
        demoBadge: "Client Production",
        liveUrl: "https://www.chandrakiranaindonesia.com/",
        imageUrl: "/portfolio/cki.webp",
    },
    {
        number: "05",
        slug: "sistem-arsip-bina-marga",
        title: "Sistem Arsip & Kepegawaian DPU Bina Marga",
        year: "2024",
        category: "Sistem Informasi",
        categorySubtitle: "Gov Archive & Staff Management",
        tagline: "Digitalisasi inventaris arsip fisik dan cetak Berita Acara otomatis.",
        description: "Sistem digitalisasi inventaris arsip fisik dan data kepegawaian dinas dengan tracking serah-terima berkas per unit kerja serta modul cetak Berita Acara PDF standar.",
        challenge: "Pengelolaan arsip fisik unit kerja dan dokumen kepegawaian masih manual dan rentan selisih data berita acara serah-terima berkas.",
        solution: "Sistem digitalisasi inventaris arsip dengan tracking penerima, tanggal serah berkas, dan modul cetak otomatis Berita Acara dalam format standar.",
        stack: ["Laravel", "MySQL", "Bootstrap", "DomPDF", "Blade"],
        highlights: [
            "Pencatatan kardus arsip & tracking serah terima berkas",
            "Cetak Berita Acara serah terima otomatis format standar PDF",
        ],
        demoBadge: "Gov Enterprise",
        imageUrl: "/portfolio/pu-bina-marga.webp",
    },
    {
        number: "06",
        slug: "mcrepes-eoq",
        title: "MCrepes — Inventori & Algoritma EOQ",
        year: "2024",
        category: "Tugas Kuliah",
        categorySubtitle: "Supply Chain & EOQ Algorithm",
        tagline: "Manajemen stok F&B dengan klasifikasi ABC & Reorder Point otomatis.",
        description: "Aplikasi web inventori UMKM kuliner yang mengotomasi perhitungan klasifikasi ABC, Economic Order Quantity (EOQ), Safety Stock, dan kalkulasi Reorder Point.",
        challenge: "Kebutuhan tugas akhir yang menguji implementasi teori supply chain konkret untuk mengontrol stok bahan baku UMKM tanpa penumpukan modal.",
        solution: "Aplikasi inventori berbasis web yang mengotomasi perhitungan ABC Classification, Economic Order Quantity (EOQ), Safety Stock, dan kalkulasi Reorder Point.",
        stack: ["Laravel", "MySQL", "Chart.js", "Bootstrap", "Blade"],
        highlights: [
            "Kalkulasi otomatis Reorder Point & Safety Stock",
            "Visualisasi tren stok & klasifikasi ABC bahan baku akurat",
        ],
        demoBadge: "Akademik & Riset",
        imageUrl: "/portfolio/mcrepes.webp",
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
        name: "C***s",
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
        answer: "Kami menguasai ekosistem pemrograman modern: Frontend Web (React, Next.js, Vue, Tailwind CSS, JavaScript), Mobile Development (Flutter, Dart), Backend (Laravel, PHP, Node.js, Express, Python), Database (MySQL, PostgreSQL, MongoDB, SQLite), serta implementasi REST API dan integrasi Payment Gateway/WhatsApp.",
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

export type TechStackItem = {
    name: string;
    category: string;
    icon: string;
    color: string;
};

export const TECH_STACK: TechStackItem[] = [
    { name: "Next.js", category: "Fullstack / SSR", icon: "SiNextdotjs", color: "#000000" },
    { name: "Laravel", category: "Backend Framework", icon: "SiLaravel", color: "#FF2D20" },
    { name: "React", category: "Frontend Library", icon: "SiReact", color: "#61DAFB" },
    { name: "Flutter", category: "Mobile Apps", icon: "SiFlutter", color: "#02569B" },
    { name: "MySQL", category: "Relational DB", icon: "SiMysql", color: "#4479A1" },
    { name: "Supabase", category: "BaaS & Postgres", icon: "SiSupabase", color: "#3ECF8E" },
    { name: "GitHub", category: "Version Control", icon: "SiGithub", color: "#24292F" },
    { name: "Tailwind CSS", category: "UI Styling", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "TypeScript", category: "Typed Language", icon: "SiTypescript", color: "#3178C6" },
    { name: "Node.js", category: "JS Runtime", icon: "SiNodedotjs", color: "#5FA04E" },
    { name: "PostgreSQL", category: "SQL Database", icon: "SiPostgresql", color: "#4169E1" },
    { name: "Python", category: "Backend / Scripting", icon: "SiPython", color: "#3776AB" },
    { name: "Docker", category: "Containerization", icon: "SiDocker", color: "#2496ED" },
    { name: "PHP", category: "Server Language", icon: "SiPhp", color: "#777BB4" },
    { name: "Postman", category: "API Testing", icon: "SiPostman", color: "#FF6C37" },
];