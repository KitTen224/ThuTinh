import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../style/buttonstyle.css";
import CommentList from "../postcard-attitues/commentList";

export default function ButtonBottom() {
  const location = useLocation();
  const path = location.pathname;
  const timelineTypes = ["/timeline/normal", "/timeline/anonymous"];
  const writeTypes = ["/write/normal","/write/anonymous"];

  const [showFeelings, setShowFeelings] = useState(false);

    const feelingOptions = [
      { emoji: "🧡", label: "Ôm bạn" },
      { emoji: "🌱", label: "Cảm ơn" },
      { emoji: "💧", label: "Đồng cảm" },
      { emoji: "🌸", label: "Hiểu bạn" },
      { emoji: "🌤️", label: "Mong bạn ổn" },
      { emoji: "💭", label: "Suy ngẫm" },
    ]
  //chức năng onclick
  function handFelling() {
    setShowFeelings(prev => !prev);
    setShowInvisibleLetter(false);
    setShowComment(false);
  }

  const [showInvisibleLetter, setShowInvisibleLetter] = useState(false);
  const [letterText, setLetterText] = useState("");
  function handMess() {
    setShowInvisibleLetter(prev => !prev);
    setShowFeelings(false);
    setShowComment(false);
  }

  const [showComment, setShowComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const sampleComments = [
    {
      author: "Nặc danh",
      content: "Tớ đồng cảm lắm...",
      replies: [
        { author: "Bạn đọc", content: "Cậu không một mình đâu." },
        { author: "Ẩn danh", content: "Gửi bạn một chiếc lá 🍃" }
      ]
    },
    {
      author: "Mèo Nâu",
      content: "Gửi bạn một ôm dịu dàng.",
      replies: []
    },
    {
      author: "Ẩn danh",
      content: "Chúng ta rồi sẽ ổn.",
      replies: [
        { author: "Người lạ", content: "Tớ cũng đang mong điều đó." }
      ]
    },
    {
      author: "Người lạ",
      content: "Dù không nói gì, tớ vẫn ở đây.",
      replies: []
    }
  ];

  function handComment() {
    setShowComment(prev => !prev);
    setShowInvisibleLetter(false);
    setShowFeelings(false);
  }

  function handImage() {
    
  }

  function handVideo() {
    
  }

  function handMusic() {
    
  }

  function handPost() {
    
  }
  function handWrite(){
    
  }

  // Xác định nút hiển thị dựa trên đường dẫn
  let buttons = [];

  if (timelineTypes.includes(path)) {
    buttons = [
      {label:"Thả cảm xúc",onClick:handFelling},
      {label: "Gửi thư vô hình",onClick:handMess},
      {label: "Thảo luận",onClick:handComment}
    ];
  }else if (path === "/timeline/diary") {
    buttons = [{label:"Viết",onClick:handWrite}];
  }else if (writeTypes.includes(path)) {
    buttons = [
      {label:"Ảnh",onClick:handImage},
      {label: "Video",onClick:handVideo},
      {label:"Nhạc",onClick:handMusic},
      {label:"Gửi",onClick:handPost}
    ];
  }else if(path === "/write/diary") {
    buttons = [{label:"Gửi",onClick:handPost}]
  }else{
    buttons = []; // fallback nếu không xác định được
  }

  return (
    <div className="post-footer">
      <div className="button-row">
        {buttons.map((btn, index) => (
          <button key={index} onClick={btn.onClick}>
            {btn.label}
          </button>
        ))}
      </div>

      {showFeelings && (
        <div className="feeling-span-box">
          {feelingOptions.map((item, index) => (
            <span
              key={index}
              className="feeling-span"
              title={item.label}
              onClick={() => {
                console.log("Bạn đã thả cảm xúc:", item.label);
                setShowFeelings(false);
              }}
            >
              {item.emoji}
            </span>
          ))}
        </div>
      )}

      {showInvisibleLetter && (
        <div className="input-box">
          <div className="input-wrapper">
            <textarea
              placeholder="Gửi điều gì đó nhẹ nhàng..."
              value={letterText}
              onChange={(e) => setLetterText(e.target.value)}
              className="text-textarea"
            />
            <span
              className="send-icon"
              title="Gửi thư"
              onClick={() => {
                console.log("Thư vô hình:", letterText);
                setLetterText("");
                setShowInvisibleLetter(false);
              }}
            >
              📩
            </span>
          </div>
        </div>
      )}

      {showComment && (
        <div className="input-box">
          <CommentList comments={sampleComments}/>
          <div className="input-wrapper">
            <textarea
              placeholder="Thảo luận gì đó thật vui vẻ..."
              value={commentText}
              onChange={(e)=>setCommentText(e.target.value)}
              className="text-textarea"/>
              <span 
                className="send-icon"
                title="Bình luận"
                onClick={()=>{
                  setCommentText("");
                  setShowComment(false);
                }}>
                🍃
              </span>
          </div>
        </div>
      )}
    </div>


  )

}
