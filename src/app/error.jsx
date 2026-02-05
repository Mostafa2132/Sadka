"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md w-full rounded-2xl bg-slate-900 p-6 text-center shadow-xl">
        <h1 className="mb-2 text-2xl font-bold text-red-400">
          حصل خطأ غير متوقع
        </h1>

        <p className="mb-6 text-sm text-slate-300 break-words">
          {error?.message || "حدث خطأ أثناء تحميل الصفحة، حاول مرة أخرى."}
        </p>

        <button
          onClick={reset}
          className="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600 transition"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
