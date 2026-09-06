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
        description: "Clean code — kode terstruktur, mudah di-maintenance, bukan asal jalan.",
    },
    {
        icon: "Clock",
        title: "Tepat Waktu",
        description: "On-time delivery — komitmen penuh pada deadline yang disepakati di awal.",
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
        description: "Jaminan kerahasiaan data proyek, tugas, atau ide klien — tidak dibagikan ke pihak lain.",
    },
];

export type PortfolioCategory = "Semua" | "Company Profile" | "Sistem Informasi" | "Tugas Kuliah";

export type PortfolioItem = {
    title: string;
    category: Exclude<PortfolioCategory, "Semua">;
    challenge: string;
    solution: string;
    stack: string[];
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
    "Semua",
    "Company Profile",
    "Sistem Informasi",
    "Tugas Kuliah",
];

export const PORTFOLIO: PortfolioItem[] = [
    {
        title: "CV. Chandra Kirana Indonesia",
        category: "Company Profile",
        challenge: "Kontraktor konstruksi butuh company profile multi-halaman yang terasa premium dan kredibel di mata klien korporat.",
        solution: "Website multi-halaman dengan portofolio proyek yang bisa difilter, testimoni drag-to-scroll, dan form kontak terintegrasi FormSubmit.",
        stack: ["Tailwind CSS", "Vanilla JS", "FormSubmit"],
    },
    {
        title: "SIMKES — Sistem Informasi Manajemen Kesehatan",
        category: "Sistem Informasi",
        challenge: "Instansi kesehatan butuh sistem manajemen skala besar dengan banyak role pengguna dan modul yang terus berkembang.",
        solution: "Dibangun modular per fitur — migrasi, seeder, dan struktur role/permission disiapkan sejak awal agar mudah diperluas ke modul berikutnya.",
        stack: ["Laravel 12", "Sanctum", "Spatie", "React", "Vite", "Tailwind"],
    },
    {
        title: "Sistem Arsip & Kepegawaian DPU Bina Marga Jawa Timur",
        category: "Sistem Informasi",
        challenge: "Pengelolaan arsip fisik (kardus, unit kerja, data pegawai) masih manual dan rawan berita acara serah-terima yang tidak konsisten.",
        solution: "Sistem digitalisasi arsip dengan pencatatan penerima/pengirim, tanggal, dan jumlah kardus, plus fitur cetak otomatis Berita Acara.",
        stack: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
        title: "MCrepes — Sistem Manajemen Inventori",
        category: "Tugas Kuliah",
        challenge: "UMKM makanan butuh kontrol stok berbasis data, bukan sekadar pencatatan manual, untuk tugas akhir yang juga jadi solusi bisnis nyata.",
        solution: "Sistem inventori dengan perhitungan ABC Classification, EOQ, Safety Stock, dan Reorder Point untuk rekomendasi restock otomatis.",
        stack: ["Laravel", "MySQL"],
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
        quote: "Makasii banyaakkkkk yaaa kakk ",
    },
    {
        name: "Klien C",
        role: "Sistem Informasi",
        quote: "Komunikasinya enak, revisi ditangani tanpa drama, deadline juga ditepati.",
    },
    {
        name: "Klien D",
        role: "Landing Page",
        quote: "Desainnya modern, loading-nya ringan, langsung dipakai buat campaign tanpa banyak revisi.",
    },
    {
        name: "Klien E",
        role: "Custom Web App",
        quote: "Alur bisnisnya rumit tapi tetap dipetakan dengan rapi sebelum mulai coding.",
    },
];

export const SOCIALS = {
    instagram: "https://instagram.com/codevela.id",
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
        description: "Project selesai! Kami akan mendemokan hasilnya (via screenshot / screen record). setelah pelunasan, source code / aplikasi akan langsung full kita kirim.",
        icon: "CheckCircle2",
    },
];

export type FAQItem = { question: string; answer: string };

export const FAQS: FAQItem[] = [
    {
        question: "Sistem pembayarannya bagaimana?",
        answer: "Menggunakan DP (uang muka) di awal sebelum pengerjaan dimulai, sisanya dilunasi setelah proyek selesai dan sudah dicek sesuai permintaan.",
    },
    {
        question: "Berapa lama waktu pengerjaannya?",
        answer: "Tergantung kompleksitas — tugas kuliah/mini project biasanya 1–5 hari, company profile 1–2 minggu, custom web app/sistem informasi menyesuaikan scope. Estimasi pasti diberikan setelah konsultasi.",
    },
    {
        question: "Apakah melayani revisi di luar kesepakatan awal?",
        answer: "Revisi minor sesuai paket dilayani gratis. Untuk penambahan fitur atau perubahan di luar kesepakatan awal, akan dihitung sebagai pekerjaan tambahan dan didiskusikan dulu biaya serta waktunya.",
    },
];