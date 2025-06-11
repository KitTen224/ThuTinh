import { useLocation } from "react-router-dom";
import { useState } from "react";

import ControlButton from "../../components/buttonbar/controlButton";
import Timer from "../../components/gentle-attitues/timer";
import SilentMusic from "../../components/gentle-attitues/silentMusic";
import GentleLayout from "../../components/layout/gentlelayout";


export default function GentleSilentMusic(){
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
      <div className="gentle-background ${state.subType}">
        <div className="meditation-page">
          <div className="meditation-content">
            <SilentMusic isPaused={isPaused}/>
            {duration > 0 && <Timer minutes={duration} isPaused={isPaused}/>}
            <ControlButton isPaused={isPaused}
              onTogglePause={() => setIsPaused((prev) => !prev)}/>
        </div>
        </div>
      </div>
    </GentleLayout>
  );
}
