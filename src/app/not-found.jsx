
import StarsBackground from "@/Components/StarsBackground/StarsBackground";
import Link from "next/link";

export default function NotFoundCreative() {
  return (
    <div className="min-h-screen bg-gradient-to-br mt-38 from-indigo-950 via-purple-900 to-indigo-950 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated Stars Background */}
      <div className="">
        <StarsBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Lost in Space Illustration */}
        <div className="mb-8 relative">
          {/* Moon/Planet */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-yellow-400/30 blur-3xl rounded-full animate-pulse-slow" />

            <div className="relative">
              {/* Main Circle */}
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-2xl shadow-yellow-500/50 flex items-center justify-center">
                {/* 404 Inside */}
                <span className="text-6xl font-bold text-purple-900">404</span>
              </div>

              {/* Orbiting Stars */}
              {[0, 120, 240].map((deg, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    transform: `rotate(${deg}deg)`,
                    animation: `orbit ${6 + i}s linear infinite`,
                  }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-200 rounded-full shadow-lg shadow-yellow-300/50" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ضللت الطريق في فضاء الموقع! 🌙
          </h1>

          <p className="text-purple-200 text-lg mb-6">
            لا تقلق، حتى القمر يختفي أحياناً ثم يعود بنور أجمل
          </p>

          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <p className="text-yellow-300 font-semibold mb-2">
              الصفحة التي تبحث عنها غير موجودة
            </p>
            <p className="text-purple-300 text-sm">
              ربما تم نقلها، أو حذفها، أو أن الرابط غير صحيح
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-10">
          <Link href="/">
            <button
              className="
              w-full sm:w-auto
              px-10 py-4
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400
              hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300
              text-purple-900
              font-bold
              text-lg
              rounded-full
              shadow-2xl shadow-yellow-500/50
              hover:shadow-yellow-400/70
              transform hover:scale-105
              transition-all
              duration-300
              relative
              overflow-hidden
              group
            "
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                🏠 العودة إلى الأمان (الصفحة الرئيسية)
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* Quick Navigation Grid */}
        <div className="mb-10">
          <p className="text-purple-300 text-sm mb-4">أو استكشف:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                name: "القرآن",
                href: "/quran",
                icon: "📖",
                color: "from-green-400 to-emerald-600",
              },
              {
                name: "مواقيت الصلاة",
                href: "/prayer-times",
                icon: "🕌",
                color: "from-blue-400 to-indigo-600",
              },
              {
                name: "الأدعية",
                href: "/duas",
                icon: "🤲",
                color: "from-purple-400 to-purple-600",
              },
              {
                name: "الأحاديث",
                href: "/hadith",
                icon: "📜",
                color: "from-amber-400 to-orange-600",
              },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className="
                  group
                  bg-gradient-to-br from-purple-800/40 to-indigo-900/40
                  backdrop-blur-sm
                  border-2 border-yellow-400/30
                  rounded-2xl
                  p-4
                  hover:border-yellow-400/60
                  hover:shadow-xl hover:shadow-yellow-400/20
                  transform hover:scale-105
                  transition-all
                  duration-300
                  cursor-pointer
                "
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <p className="text-white text-sm font-semibold">
                    {link.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-gradient-to-r from-purple-800/30 via-indigo-900/30 to-purple-800/30 border border-yellow-400/20 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <span className="text-yellow-300 text-xl">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-400 to-transparent" />
          </div>

          <p className="text-yellow-300 text-xl md:text-2xl font-bold mb-3">
            ﴿ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾
          </p>

          <p className="text-purple-300 text-sm">سورة الشرح - الآية 6</p>

          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <span className="text-yellow-300 text-xl">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-400 to-transparent" />
          </div>
        </div>

        {/* Fun Fact */}
        <p className="mt-8 text-purple-400 text-xs italic">
          💡 نصيحة: يمكنك استخدام شريط البحث للعثور على ما تريد
        </p>
      </div>

    
    </div>
  );
}
