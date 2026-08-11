export default function loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040C12] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E1E]/60 via-transparent to-[#071A14]/40" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E8C46A]/[0.06] rounded-full blur-3xl" />
      <div className="relative text-center">
        <div className="relative mx-auto w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
          <span className="text-[#07161E] font-bold">ص</span>
          <div className="absolute inset-0 rounded-2xl border border-black/5" />
          <div className="absolute -inset-1 rounded-2xl bg-[#E8C46A]/20 blur-xl -z-10" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-white tracking-tight">صدقة جارية</h2>
        <p className="text-white/50 text-sm mt-1">جاري التحميل...</p>
        <div className="mt-6 flex justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[#E8C46A] animate-spin" />
        </div>
        <div className="mt-6 w-40 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full w-1/2 bg-[#E8C46A] animate-loading-bar rounded-full" />
        </div>
      </div>
    </div>
  );
}
