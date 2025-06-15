import { useState } from "react";
import UserWhisper from "./userwhisper";
import AiWhisper from "./aiwhisper";
import UserInputWhisper from "./userinputwhisper";
import NotificationWhisper from "./notewhisper";
import "../style/whispercard.css"
export default function WhisperCard(){
  const[whispers,setWhispers] =useState([]);

  const handleWhisper = (text) =>{
    //const aiResponse = generateRandomResponse(); // có thể là random hoặc AI thật
    setWhispers([...whispers,{user:text,ai:"Test"}]);//ai:aiResponse
  };

  return(
    <div className="whisper_card">
      <div className="chat_box">
        {whispers.map((w,index)=>(
          <div key={index}>
            <UserWhisper content={w.user}/>
            <AiWhisper content={w.ai}/>
          </div>
        ))}
      </div>
      <div>
        <UserInputWhisper onSubmit={handleWhisper}/>
      </div>
      <div>
        <NotificationWhisper/>
      </div>
    </div>
  )
}


// (Giả sử generateRandomResponse() là một hàm tạo phản hồi ngẫu nhiên)