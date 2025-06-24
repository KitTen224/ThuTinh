import "../style/body.css"
export default function PostCardDiary({ entry }) {
  return (
      <div className="post-card diary">
        <div className="post-header">
          <div className="profile">
            <p><strong>Ngày:</strong> {entry.date}</p>
          </div>
          <p><span className={`status-display ${entry.mood}`}>
            {entry.mood === "happy"
            ? "Đã thấy vui"
            :entry.mood === "sad"
            ? "Đã thấy buồn"
            :entry.mood === "tired"
            ? "Đã hơi mệt"
            :entry.mood === "grateful"
            ? "Đã biết ơn"
            :entry.mood === "anxious"
            ? "Đã cảm thấy bất an"
            : ""}</span></p>
        </div>

        <div className="post-content">
          <div className="diary-meta">
            <p><strong>Tiêu đề:</strong> {entry.title}</p>
          </div>
          <p>{entry.content}</p>
        </div>
      </div>
  );
}
