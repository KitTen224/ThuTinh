import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Timer({ minutes, isPaused }) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/gentle/home");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused,navigate]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="timer">
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
}
