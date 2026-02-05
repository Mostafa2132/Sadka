import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

export default function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    audio.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="relative bg-indigo-950/60 rounded-2xl p-6 border border-yellow-400/20 backdrop-blur-xl shadow-xl shadow-purple-500/40">
      <audio ref={audioRef} src={src} />

      <div className="flex items-center gap-4">
        {/* زر التشغيل */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/50"
        >
          {playing ? (
            <FaPause className="text-purple-900 text-xl" />
          ) : (
            <FaPlay className="text-purple-900 text-xl ml-1" />
          )}
        </motion.button>

        {/* شريط التقدم */}
        <div className="flex-1">
          <div
            className="h-2 bg-purple-700/50 rounded-full cursor-pointer overflow-hidden group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-purple-200">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
     <div className="mt-4 text-center leading-relaxed text-sm text-purple-300">{title}</div>
    </div>
  );
}
