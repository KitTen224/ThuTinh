import { useState } from "react";
import "../style/commentlist.css";
import { Link } from "react-router-dom";
import ReplyList from "./replylist";

export default function CommentList({comments = []}){
  const [showAll, setShowAll] = useState(false);

  const visibleComments = showAll ? comments : comments.slice(0,3);

  const [replyIndex, setReplyIndex] = useState(null);

  function handleReply(index) {
    setReplyIndex(index === replyIndex ? null : index);
  }


  function sendReply(index) {
    console.log("Đã gửi phản hồi cho", index);
    setReplyIndex(null);
  }

  return(
    <div className="comment-list">
      {visibleComments.map((comment, index) => (
        <div key={index} className="comment-item">
          <div className="comment-bubble">
            <div className="comment-content">
              <Link to="" className="link-decor"><strong>{comment.author}:</strong></Link>
              <p>{comment.content}</p> 
            </div>
          </div>

          <div className="comment-actions">
            <span className="">1 phút trước</span>
            <span className="comment-reply" onClick={() => handleReply(index)}>Trả lời</span>
            {comment.replies?.length > 0 && replyIndex !== index && (
              <span className="see-more-replies" onClick={() => handleReply(index)}>
                Xem thêm {comment.replies.length} phản hồi
              </span>
            )}
          </div>
          
          {replyIndex === index && (
            <div className="input-box">
              <ReplyList replies={comment.replies}/>
              <div className="input-wrapper">
                <textarea
                  className="text-textarea"
                  placeholder="Viết phản hồi..."></textarea>
                <span className="send-icon" onClick={() => sendReply(index)}>🍃</span>
              </div>
            </div>
          )}
        </div>
      ))}

      {comments.length > 3 && (
        <p
          className="see-more-comments"
          onClick={()=>setShowAll(!showAll)}
        >
          {showAll?"Ẩn bớt": `Xem thêm ${comments.length - 3} bình luận`}
        </p>
      )}
    </div>
  )
}