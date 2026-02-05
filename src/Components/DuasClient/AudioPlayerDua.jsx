"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";

export default function AudioPlayerDua({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    audio.currentTime = clickPosition * duration;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="
        bg-gradient-to-br from-purple-900/60 to-indigo-950/60
        backdrop-blur-sm
        p-8
        rounded-2xl
        border-2 border-yellow-400/40
        shadow-xl shadow-purple-500/20
        relative
        overflow-hidden
        group
      "
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-400/0 group-hover:from-purple-400/5 group-hover:to-purple-400/10 transition-all duration-300" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={audioUrl} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <IoSparkles className="text-yellow-300 text-xl" />
          <h3 className="text-yellow-300 font-bold text-lg">
            استماع للدعاء
          </h3>
          <IoSparkles className="text-yellow-300 text-xl" />
        </div>

        {/* Play Button */}
        <div className="flex justify-center mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="
              relative
              w-20 h-20
              rounded-full
              bg-gradient-to-br from-yellow-400 to-yellow-500
              flex items-center justify-center
              shadow-2xl shadow-yellow-500/50
              hover:shadow-yellow-400/70
              transition-all
              group/btn
            "
          >
            {/* Pulse Effect when Playing */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full bg-yellow-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            )}

            {/* Icon */}
            {isPlaying ? (
              <FaPause className="relative z-10 text-purple-900 text-2xl" />
            ) : (
              <FaPlay className="relative z-10 text-purple-900 text-2xl ml-1" />
            )}
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div
            onClick={handleProgressClick}
            className="h-3 bg-purple-700/50 rounded-full cursor-pointer overflow-hidden group/progress relative"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 relative"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              animate={{ opacity: isPlaying ? 1 : 0.7 }}
            >
              {/* Progress Handle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-300 rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          {/* Time Display */}
          <div className="flex justify-between items-center mt-2 text-sm text-purple-200">
            <span className="font-mono">{formatTime(currentTime)}</span>
            <span className="font-mono">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <FaVolumeUp className="text-yellow-300 text-xl flex-shrink-0" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="flex-1 h-2 bg-purple-700/50 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-yellow-400
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:shadow-lg
              [&::-moz-range-thumb]:w-4
              [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-yellow-400
              [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:shadow-lg
            "
          />
          <span className="text-purple-200 text-sm font-mono w-10 text-right">
            {Math.round(volume * 100)}%
          </span>
        </div>

        {/* Playing Indicator */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-yellow-400 rounded-full"
                  animate={{
                    height: ['10px', '20px', '10px'],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            <span className="text-yellow-300 text-sm">جاري التشغيل...</span>
          </motion.div>
        )}
      </div>

      {/* Corner Stars */}
      <BsStarFill className="absolute top-3 left-3 text-yellow-300/20 text-xs group-hover:text-yellow-300/40 transition-colors" />
      <BsStarFill className="absolute bottom-3 right-3 text-yellow-300/20 text-xs group-hover:text-yellow-300/40 transition-colors" />
    </motion.div>
  );
}