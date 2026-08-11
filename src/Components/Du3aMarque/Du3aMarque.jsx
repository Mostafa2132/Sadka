"use client";
import Marquee from "react-fast-marquee";

export default function Du3aMarque() {
  return (
    <div className="relative z-[60] h-7 overflow-hidden bg-[#0A1A18] border-b border-white/[0.06] flex items-center">
      {/* left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0A1A18] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0A1A18] to-transparent z-10" />
      <Marquee gradient={false} speed={55} pauseOnHover className="py-0">
        <span className="flex items-center gap-8 px-8 text-[13px] font-medium tracking-wide">
          <span className="inline-flex items-center gap-2 text-[#E8C46A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C46A] animate-pulse-soft" />
            صدقة جارية
          </span>
          <span className="text-white/80">
            صدقة جارية على روح أخي وصديقي الغالي محمد شحاته حداد — اللهم اغفر له وارحمه وعافه واعف عنه وأكرم نزله ووسع مدخله
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white/60">واجعل قبره روضة من رياض الجنة ونوّر له فيه واجمعنا به في جناتك يا أرحم الراحمين</span>
          <span className="text-white/30">•</span>
          <span className="text-[#E8C46A]/90">لا تنسوه من صالح دعائكم 🤍</span>
          <span className="text-white/30 mx-8">—</span>
        </span>
      </Marquee>
    </div>
  );
}
