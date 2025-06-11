import { useEffect, useRef, useState } from "react";
import "../style/breathingCircle.css";

const cycle = ["Hít vào", "Giữ", "Thở ra"];
const durations = [4000, 2000, 4000];

export default function BreathingCircle({ isPaused }) {
  const [phase, setPhase] = useState("Hít vào");

  
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const updatePhase = () => {
      const currentIndex = indexRef.current;
      setPhase(cycle[currentIndex]);

      timeoutRef.current = setTimeout(() => {
        indexRef.current = (currentIndex + 1) % cycle.length;
        updatePhase();
      }, durations[currentIndex]);
    };

    updatePhase();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isPaused]);

  return (
    <div className="breathing-container">
      <div  className={`breathing-circle ${isPaused ? "paused" : ""}`}></div>
      <p className="breathing-text">{phase}</p>
    </div>
  );
}
