import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

export const metadata = {
  title: {
    default: "صدقة جارية — محمد شحاته حداد | Sadka",
    template: "%s — صدقة جارية",
  },
  description:
    "صدقة جارية على روح محمد شحاته حداد رحمه الله — آيات، أحاديث، أدعية، قرآن كريم ومواقيت الصلاة. نسألكم الدعاء.",
  keywords: [
    "صدقة جارية",
    "محمد شحاته حداد",
    "Mohamed Shehate",
    "قرآن",
    "أدعية",
    "أحاديث",
    "مواقيت الصلاة",
    "إسلامي",
  ],
  authors: [{ name: "Mostafa M. Ebrahem", url: "https://github.com/Mostafa2132" }],
  creator: "Mostafa M. Ebrahem",
  openGraph: {
    title: "صدقة جارية — محمد شحاته حداد",
    description:
      "اللهم اغفر له وارحمه واجعل قبره روضة من رياض الجنة. موقع صدقة جارية متكامل.",
    type: "website",
    locale: "ar_EG",
    siteName: "صدقة جارية",
  },
  twitter: {
    card: "summary_large_image",
    title: "صدقة جارية — محمد شحاته حداد",
    description: "ادعُ له واقرأ القرآن — صدقة جارية بإذن الله.",
  },
};

export const viewport = {
  themeColor: "#040C12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Tajawal + Amiri fallback via CDN – builds offline gracefully */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "Tajawal, system-ui, -apple-system, Segoe UI, sans-serif" }}
      >
        <Navbar />
        <main className="pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
