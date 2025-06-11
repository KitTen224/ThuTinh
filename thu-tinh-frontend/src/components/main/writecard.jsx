import { useState } from "react";
import ButtonBottom from "../attitues/btnbottom";
import UserInfor from "../user/userinfor";
import "../style/body.css"
function WriteCard({type}) {
  const [content, setContent] = useState("");
  return (
    <section>
    <div className="post-card">
      <div className="post-header">
          <UserInfor type={type}/>
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

