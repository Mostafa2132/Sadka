"use client";

export default function StarsBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* mesh dots */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E8C46A 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* soft orbs – very subtle 2026 */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-[80px] opacity-[0.07] bg-[#10B981]" />
      <div className="absolute top-[35%] -left-32 w-[480px] h-[480px] rounded-full blur-[90px] opacity-[0.06] bg-[#14B8A6]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] rounded-full blur-[80px] opacity-[0.04] bg-[#E8C46A]" />
      {/* faint Islamic geometric line */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
      </div>
    </div>
  );
}
