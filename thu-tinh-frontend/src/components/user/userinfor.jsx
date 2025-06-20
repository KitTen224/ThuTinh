import { useState } from "react";
import MoodSelector from "../typeorselectbar/moodselector";
import logo from "../image/logo.jpg";

export default function UserInfor({type}) {
    const [mood, setMood] = useState("");
    const [showMood, setShowMood] = useState(false);
    const isAnonymous = type === "anonymous";
  return (
    <>
    <div className="profile">   
          {isAnonymous ? (
            <>
              <img src={logo} alt="avatar" className="avatar" />
              <p><strong>Ẩn danh</strong></p>
            </>
            ) : (
              <>
                <img src={logo} alt="avatar" className="avatar" />
                <p><strong>Bé Con</strong></p>
              </>
          )}
        </div>
        
        <p><span
          className={`status-display ${mood}`}
          onClick={() => setShowMood(true)}
          style={{ cursor: "pointer" }}
        >
          {mood === "happy"
            ? "Đang thấy vui"
            : mood === "sad"
            ? " Đang thấy buồn"
            : mood === "tired"
            ? "Mình hơi mệt"
            : mood === "grateful"
            ? "Biết ơn"
            : mood === "anxious"
            ? "Cảm thấy bất an"
            : "Cậu hôm nay thấy như thế nào?"}
        </span></p>

        {showMood && (
          <MoodSelector
            mood={mood}
            setMood={(m) => {
              setMood(m);
              setShowMood(false);
            }}
          />
        )}
        
    </>
  );
}
