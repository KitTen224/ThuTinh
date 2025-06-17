import { useState } from "react";
import { Link } from 'react-router-dom';
import arrow_up from "../image/arrow-up.png";
import arrow_down from "../image/arrow-down.png";
//css -> mainlayout.css
export default function InviLetterCard(){
  const letter = [
    {
      title:"Cùng với Duyệt Tình",
      getletter:["Mừng vì cậu vui!","Mừng cho cậu"],
    },
    {
      title:"Tâm sự cùng mây",
      getletter:["Nhìn rất vui!","Mong cậu luôn tự do như mây!","Nay nắng lắm nhớ đội nón nha!"],
    },
   
  ];
   const [showGetletter, setShowGetletter] = useState({}); // theo từng index/title

  const toggleGetletter = (index) => {
    setShowGetletter((prev) => ({
      ...prev,
      [index]: !prev[index]  // toggle trạng thái cho card cụ thể
    }));
  };
    return (
    <div>
      {letter.map((item, index) => (
        <div key={index} className="letter_card">
          <h3>
            Bạn có <span style={{ color: "#84D58C" }}>{item.getletter.length}</span> thư vô hình từ bài viết <Link to="" className="link-decor">[{item.title}]</Link>
            <span className="arrow_control">
              <img 
                onClick={() => toggleGetletter(index)}
                src={showGetletter[index] ? arrow_up : arrow_down}
                alt="arrow_control"
                width={20}
              />
            </span>
          </h3>

          {showGetletter[index] && (
            <div className="list_li">
              {item.getletter.map((text, i) => (
              <p key={i}>
                <span className="dot"/>
                <span className="label_dot" >{text}</span>
              </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
