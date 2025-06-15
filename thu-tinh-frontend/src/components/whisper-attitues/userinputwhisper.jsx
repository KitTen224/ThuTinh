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
      <input
        type="text"
        placeholder="Hãy nói lên những điều cậu muốn thì thầm…"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={(e)=>e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Gửi</button>
    </div>
  )
}