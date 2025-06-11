import { useState } from "react";
import UserWhisper from "./userwhisper";
import AiWhisper from "./aiwhisper";
import UserInputWhisper from "./userinputwhisper";
import NotificationWhisper from "./notewhisper";

export default function WhisperCard(){
  const[whispers,setWhispers] =useState([]);

  const handleWhisper = (text) =>{
    //const aiResponse = generateRandomResponse(); // có thể là random hoặc AI thật
    setWhispers([...whispers,{user:text,ai:"Test"}]);//ai:aiResponse
  };

  return(
    <div className="whisper_card">
      {whispers.map((w,index)=>(
        <div key={index}>
          <UserWhisper content={w.user}/>
          <AiWhisper content={w.ai}/>
        </div>
      ))}
      <UserInputWhisper onSubmit={handleWhisper}/>
      <NotificationWhisper/>
    </div>
  )
}


// (Giả sử generateRandomResponse() là một hàm tạo phản hồi ngẫu nhiên)