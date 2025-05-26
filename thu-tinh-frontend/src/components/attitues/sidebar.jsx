import logo from "../image/logo.jpg";
import MoodSelector from "./moodselector";
import { useState } from "react";
function Sidebar() {
  const [mood, setMood] = useState("");
  const [showMood, setShowMood] = useState(false);
  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="menu">
          <li id="timeline">Dòng thời gian</li>
          <li id="write">Viết bài</li>
          <li id="withAi">Không gian thì thầm</li>
          <li id="music">Góc dịu dàng</li>
          <li id="mesbox">Hộp thư vô hình</li> 
      </ul>
      <div className="profile-status">
        <div className="profile"> 
          <img src={logo} alt="avatar" className="avatar" />
          <p>Bé Con</p>
        </div>
        <span
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
        </span>

        {showMood && (
          <MoodSelector
            mood={mood}
            setMood={(m) => {
              setMood(m);
              setShowMood(false);
            }}
          />
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
