// app/layout.tsx or app/layout.js
import { Lato, Baloo_2, Courgette } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import Header from "@/common/Header";
import Footer from "@/common/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"], // Choose weights you need
  display: "swap",
});

const baloo2 = Baloo_2({
  variable: "--font-baloo2",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const courgette = Courgette({
    variable: "--font-courgette",
    subsets: ['latin'],
    weight: '400',
  });

export const metadata = {
  title: "BabyMD",
  description: "Pediatric care services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${baloo2.variable} ${courgette.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}