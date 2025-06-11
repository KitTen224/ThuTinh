import { useLocation } from "react-router-dom";
import { useState } from "react";

import ControlButton from "../../components/buttonbar/controlButton";
import BreathingCircle from "../../components/gentle-attitues/breathingCircle";
import Timer from "../../components/gentle-attitues/timer";
import GentleLayout from "../../components/layout/gentlelayout";


export default function GentleMeditation(){
  const location = useLocation();
  const state = location.state || {};

   const [isPaused, setIsPaused] = useState(false);

  let duration = 0; // default: không hẹn giờ
  if (state.time === "onehours") {
    duration = 60;
  } else if (state.time === "thirtyminues") {
    duration = 30;
  } else if (state.time === "fistyminues") {
    duration = 15;
  }
  return(
    <GentleLayout>
      <div className="gentle-background">
        <div className="meditation-page">
          <div className="meditation-content">
            <BreathingCircle isPaused={isPaused}/>
            {duration > 0 && <Timer minutes={duration} isPaused={isPaused}/>}
            <ControlButton isPaused={isPaused}
              onTogglePause={() => setIsPaused((prev) => !prev)}/>
        </div>
        </div>
      </div>
    </GentleLayout>
  );
}