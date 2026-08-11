"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
        <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-500/20 flex items-center justify-center mx-auto text-red-400">!</div>
        <h1 className="mt-4 text-lg font-bold text-white">حدث خطأ غير متوقع</h1>
        <p className="mt-2 text-sm leading-6 text-white/50 break-words">
          {error?.message || "حدث خطأ أثناء تحميل الصفحة، حاول مرة أخرى."}
        </p>
        <button
          onClick={reset}
          className="mt-6 w-full py-3 rounded-full bg-white text-[#07161E] text-sm font-bold hover:bg-white/90 transition"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
