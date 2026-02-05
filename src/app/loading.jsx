export default function loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-yellow-300 rounded-full" />
          </div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Mosque/Moon Icon */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative animate-float">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-yellow-400/30 blur-2xl rounded-full animate-pulse" />

            {/* Moon Icon */}
            <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50">
              <svg
                className="w-16 h-16 text-purple-900"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </div>

            {/* Rotating Stars Around Moon */}
            <div className="absolute inset-0 animate-spin-slow">
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateY(-50px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient">
              رمضان كريم
            </span>
          </h2>
          <p className="text-purple-200 text-lg animate-pulse">
            جاري التحميل...
          </p>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-yellow-400/30 rounded-full" />

            {/* Animated Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin" />

            {/* Inner Dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-purple-900/50 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-loading-bar" />
        </div>

        {/* Small Text */}
        <p className="mt-6 text-purple-300 text-sm animate-pulse">
          الرجاء الانتظار...
        </p>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/50 to-transparent">
        <div className="flex justify-center items-end h-full gap-4 pb-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
