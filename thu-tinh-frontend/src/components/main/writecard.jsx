import { useState } from "react";
import logo from "../image/logo.jpg";
import MoodSelector from "../attitues/moodselector";
import ButtonBottom from "../attitues/btnbottom";
function WriteCard(type) {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [showMood, setShowMood] = useState(false);
  const isAnonymous = type === "anonymous";
  console.log(isAnonymous);
  return (
    <section>
    <div className="post-card">
      <div className="post-header">
          <div className="profile">
            {isAnonymous ? (
              <p><strong>Ẩn danh</strong></p>
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
        </div>
      <div className="post-textarea">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Cậu đang nghĩ gì vậy...?"
          rows={6}
        />
      </div>
      <ButtonBottom></ButtonBottom>
    </div>
    </section>
  );
}

export default WriteCard;

