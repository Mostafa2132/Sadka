import StarsBackground from "@/Components/StarsBackground/StarsBackground";
import Link from "next/link";

export default function NotFoundCreative() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 overflow-hidden relative">
      <StarsBackground />
      <div className="relative z-10 text-center max-w-[720px] w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-xs text-white/60">404 • صفحة غير موجودة</div>
        <div className="mt-6 mx-auto w-28 h-28 rounded-[28px] bg-white flex items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.35)] border border-black/5">
          <span className="text-[42px] font-bold text-[#07161E]">404</span>
        </div>
        <h1 className="mt-6 text-[28px] md:text-[34px] font-bold tracking-tight text-white">ضللت الطريق؟</h1>
        <p className="text-white/60 text-sm md:text-[15px] leading-6 mt-2 max-w-[520px] mx-auto">
          لا تقلق — حتى القمر يختفي ثم يعود بنور أجمل. الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>

        <div className="mt-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] p-4 backdrop-blur-xl">
          <p className="text-[#E8C46A] font-bold">﴿ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾</p>
          <p className="text-white/40 text-xs mt-1">الشرح 6</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-8 py-3 rounded-full bg-[#E8C46A] text-[#07161E] text-sm font-bold hover:bg-[#F0D27A] transition shadow-[0_8px_20px_rgba(232,196,106,0.3)] text-center">
            العودة للرئيسية
          </Link>
          <Link href="/quran" className="px-8 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.10] transition text-center">
            تصفح القرآن
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {[
            { name: "القرآن", href: "/quran", icon: "۞" },
            { name: "مواقيت الصلاة", href: "/prayer-times", icon: "◐" },
            { name: "الأدعية", href: "/duas", icon: "🤲" },
            { name: "تواصل", href: "/contact", icon: "✦" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 hover:bg-white/[0.06] transition text-center">
              <div className="text-lg text-white/80">{l.icon}</div>
              <div className="text-sm font-medium text-white mt-1">{l.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
