import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function SilentMusic({ isPaused }) {
  const { state } = useLocation();
  const { subType } = state || {};
  const audioRef = useRef(null);

  const audioSources = {
    rain: "/audio/rain.mp3",
    stream: "/audio/stream.mp3",
    piano: "/audio/piano.mp3",
  };

  const audioSrc = audioSources[subType] || "";

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.warn("AutoPlay error", e));
    }
  }, [isPaused]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <h2 className="breathing-text">Thư giãn cùng âm thanh: {subType}</h2>
    </>
  );
}
