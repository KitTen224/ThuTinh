import { useState } from "react"
export default function UserInputWhisper({onSubmit}){
  const [input,setInput] = useState("");

  const handleSend =()=>{
    if(input.trim() !== ""){
      onSubmit(input); //send
      setInput("");    //refesh
    }
  }
  return(
    <div className="input_box">
      <div className="input-wrapper">
        <textarea
          className="text-textarea"
          placeholder="Hãy nói lên những điều cậu muốn thì thầm…"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // chặn xuống dòng
              handleSend(); // gọi hàm gửi
            }
          }}
          />
          <span
            className="send-icon"
            title="Thì thầm"
            onClick={handleSend}>💭</span>
      </div>
    </div>
  )
}