import { useState, useRef, useEffect } from "react";
import logo from "../image/logo.jpg";
import MoodSelector from "../attitues/moodselector";
import ButtonBottom from "../attitues/btnbottom";
import "../style/body.css"
export default function WriteCardDiary() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [showMood, setShowMood] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  // Lấy ngày hôm nay dạng YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <section>
      <div className="post-card diary">
        <div className="post-header">
          <div className="profile">
            <img src={logo} alt="avatar" className="avatar" />
            <p><strong>Ngày:</strong> {today}</p>
          </div>

          <p>
            <span
              className={`status-display ${mood}`}
              onClick={() => setShowMood(true)}
              style={{ cursor: "pointer" }}
            >
              {mood === "happy"
                ? "Đã thấy vui"
                : mood === "sad"
                ? "Hơi buồn một chút"
                : mood === "tired"
                ? "Cảm thấy mệt"
                : mood === "grateful"
                ? "Biết ơn vì điều gì đó"
                : mood === "anxious"
                ? "Không yên trong lòng"
                : "Hôm nay cậu cảm thấy sao?"}
            </span>
          </p>

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

        <div className="diary-meta">
          <input
            type="text"
            placeholder="Tiêu đề nhật ký..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            className="diary-title"
          />
        </div>

        <div className="diary-textarea">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tớ muốn kể cậu nghe điều gì đó…"
            className="diary-input"
            rows={5}
          />
        </div>
        <ButtonBottom/>
      </div>
    </section>
  );
}
