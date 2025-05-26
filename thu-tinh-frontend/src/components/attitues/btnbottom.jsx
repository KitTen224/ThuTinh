import { useLocation } from "react-router-dom";

export default function ButtonBottom() {
  const location = useLocation();
  const path = location.pathname;
  const timelineTypes = ["/timeline/normal", "/timeline/anonymous"];
  const writeTypes = ["/write/normal","write/anonymous"];
  //chức năng onclick
  function handFelling() {
  
  }

  function handMess() {
    
  }

  function handComment() {
    
  }

  function handImage() {
    
  }

  function handVideo() {
    
  }

  function handMusic() {
    
  }

  function handPost() {
    
  }

  // Xác định nút hiển thị dựa trên đường dẫn
  let buttons = [];

  if (timelineTypes.includes(path)) {
    buttons = [
      {label:"Thả cảm xúc",onClick:handFelling},
      {label: "Gửi thư vô hình",onClick:handMess},
      {label: "Bình luận",onClick:handComment}
    ];
  }else if (path === "/timeline/diary") {
    buttons = [];
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
      {buttons.map((btn, index) => (
        <button key={index} onClick={btn.onClick}>{btn.label}</button>
      ))}
    </div>
  );
}
