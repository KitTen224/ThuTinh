import { Link } from "react-router-dom";
import "../style/replylist.css";
export default function ReplyList({ replies = [] }) {
  return (
    <div className="reply-list">
      {replies.map((reply, index) => (
        <div key={index} className="reply-item">
          <Link to="" className="link-decor"><strong>{reply.author}:</strong></Link>
          <p> {reply.content}</p>
        </div>
      ))}
    </div>
  );
}