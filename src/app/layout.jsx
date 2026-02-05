import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: {
    default: "Mohamed Shehate | Official Website",
  },
  description:
    "الموقع الرسمي – نسأل الله الرحمة والمغفرة، موقع تذكاري مصمم باحترافية وتجربة مستخدم هادئة.",
  keywords: [
    "Mohamed Shehate",
    "محمد شحاته",
    "موقع تذكاري",
    "دعاء",
    "ذكرى",
  ],
  authors: [{ name: "Mostafa M.Ebrahem" }],
  creator: "Mostafa M.Ebrahem",
  openGraph: {
    title: "Mohamed Shehate",
    description:
      "اللهم ارحمه رحمة واسعة واجعل قبره روضة من رياض الجنة.",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
        <Navbar />
        <main className="mt-16">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
