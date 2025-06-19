import { useEffect, useRef, useState } from "react";
import "../style/breathingCircle.css";

const cycle = ["Hít vào", "Giữ", "Thở ra"];
const durations = [4000, 2000, 4000];

export default function BreathingCircle({ isPaused }) {
  const [phase, setPhase] = useState("Hít vào");
  const [scale,setScale] = useState(1); // scale điều khiển vòng tròn
  
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
  if (isPaused) {
    clearTimeout(timeoutRef.current);
    return;
  }

  const updatePhase = () => {
    const currentIndex = indexRef.current;
    setPhase(cycle[currentIndex]);

    if (cycle[currentIndex] === "Hít vào") {
      setScale(1.5);
    } else if (cycle[currentIndex] === "Giữ") {
      setScale(1.5);
    } else {
      setScale(1);
    }

    timeoutRef.current = setTimeout(() => {
      indexRef.current = (currentIndex + 1) % cycle.length;
      updatePhase(); // 🔥 GỌI LẠI để tiếp tục vòng mới
    }, durations[currentIndex]);
  };

  updatePhase();

  return () => clearTimeout(timeoutRef.current);
}, [isPaused]);


  return (
    <div className="breathing-container">
      <div  
        className={`breathing-circle ${isPaused ? "paused" : ""}`}
        style={{transform: `scale(${scale})`}}
      ></div>
      <p className="breathing-text">{phase}</p>
    </div>
  );
}
