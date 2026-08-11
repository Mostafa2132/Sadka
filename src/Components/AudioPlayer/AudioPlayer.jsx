import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else audio.play();
    setPlaying(!playing);
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const newTime = ((e.clientX - rect.left) / rect.width) * duration;
    if (audio) audio.currentTime = newTime;
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative rounded-2xl bg-[#07161E]/60 border border-white/[0.07] backdrop-blur-xl p-4 flex flex-col gap-3">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          aria-label={playing ? "إيقاف" : "تشغيل"}
          className="w-10 h-10 rounded-full bg-[#E8C46A] text-[#07161E] flex items-center justify-center hover:bg-[#F0D27A] transition shrink-0 shadow-[0_4px_14px_rgba(232,196,106,0.3)]"
        >
          {playing ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
        </button>
        <div className="flex-1">
          <div
            className="h-1.5 bg-white/10 rounded-full cursor-pointer overflow-hidden"
            onClick={handleProgressClick}
          >
            <div className="h-full bg-[#E8C46A] rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between mt-1.5 text-[11px] tabular-nums text-white/45">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      {title && <p className="text-center text-xs leading-5 text-white/60 line-clamp-2">{title}</p>}
    </div>
  );
}
