import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartButton from "./startButton";

export default function GentleCardRight(){
  const [mainType, setMainType] = useState(""); // setTime
  const [subTime, setSubTime] = useState("");
  const [exclusiveType, setExclusiveType] = useState(""); // meditation or silentMusic
  const [subType, setSubType] = useState("");

  const navigate = useNavigate(); // dùng để điều hướng
  function handleStart() {
    const finalMain = exclusiveType;
    const finalTime = mainType === "setTime" ? subTime : "0";

    if (finalMain === "meditation") {
      navigate("/gentle/meditation", { state: {subType, time: finalTime } });
    }else if (finalMain === "silentMusic") {
      navigate("/gentle/silentmusic", { state: {subType, time: finalTime } });
    }
  }
  return(
    <div className="right-content">
      <aside>
          <div className="main-options">
            <label className="custom-radio">
              <input 
                type="radio"
                name=""
                value="meditation"
                checked={exclusiveType === "meditation"}
                onChange={(e)=> setExclusiveType(e.target.value)}/>
              <span>Thiền thư giản</span>
            </label>
          </div>
          <div className="main-options">
            <label className="custom-radio">
              <input 
                type="radio"
                name=""
                value="silentMusic"
                checked={exclusiveType === "silentMusic"}
                onChange={(e)=> setExclusiveType(e.target.value)}
                />
              <span>Nhạc không lời</span>
            </label>
            <div className="sub-options">
               {["rain", "stream", "piano"].map((type) => (
              <label className="custom-radio" key={type}>
                <input 
                  type="radio"
                  name="silentMusicSub"
                  value={type}
                  checked={subType === type}
                  onChange={(e) => setSubType(e.target.value)}
                  disabled={exclusiveType !== "silentMusic"}
                />
                <span>{type === "rain" ? "Mưa" : type === "stream" ? "Suối" : "Piano"}</span>
              </label>
            ))}
            </div>
          </div>
          <div className="main-options">
            <label className="custom-radio">
              <input 
              type="radio"
              name=""
              value="setTime"
              checked={mainType === "setTime"}
              onChange={(e)=> setMainType(e.target.value)}/>
              <span>Thời gian</span>
            </label>
            <div className="sub-options">
              {["onehours", "thirtyminues", "fistyminues"].map((time) => (
              <label className="custom-radio" key={time}>
                <input
                  type="radio"
                  name="setTimeSub"
                  value={time}
                  checked={subTime === time}
                  onChange={(e) => setSubTime(e.target.value)}
                  disabled={mainType !== "setTime"}
                />
                <span>
                  {time === "onehours" ? "1 giờ" : time === "thirtyminues" ? "30 phút" : "15 phút"}
                </span>
              </label>
            ))}
            </div>
          </div>
          <div className="controlBtn">
            <StartButton onClick={handleStart} disabled={!mainType}/>
          </div>
        </aside>
      </div>
  );
}