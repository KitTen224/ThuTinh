import { useState } from "react";
import "../style/reaction.css";
export default function ReactionDislay(){
  const reactions = [
    { emoji: "🧡", label: "Ôm bạn", count: 5 },
    { emoji: "🌱", label: "Cảm ơn", count: 3 },
    { emoji: "💧", label: "Đồng cảm", count: 2 },
    { emoji: "🌸", label: "Hiểu bạn", count: 1 },
  ];
  const [showAll, setShowAll] = useState(false);

  const visibleReactions = showAll ? reactions : reactions.slice(0, 3);

  return (
    <div className="reaction-bar">
      {visibleReactions.map((reaction, index) => (
        <span key={index} title={reaction.label}>
          {reaction.emoji} {reaction.count}
        </span>
      ))}
      {reactions.length > 3 && (
        <p className="see-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Ẩn bớt" : "Xem thêm"}
        </p>
      )}
    </div>
  );
}