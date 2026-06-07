import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Iron Haven Premium | Ekskluzywny Klub Fitness",
  description:
    "Iron Haven Premium – miejsce, gdzie ambicja spotyka luksus. Nowoczesna siłownia, strefy wellness, personalni trenerzy i nieograniczony potencjał. Dołącz do elity.",
  keywords: "siłownia, fitness, premium, klub, trening, wellness, Iron Haven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050508] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
