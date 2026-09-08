import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata = {
  title: "Codevela — Jasa Web & App Development",
  description: "Solusi IT & pemrograman profesional untuk bisnis dan akademik. Clean code, on-time delivery, komunikasi transparan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans text-base-black antialiased">
        {children}
      </body>
    </html>
  );
}