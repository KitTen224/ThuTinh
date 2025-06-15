import logo from "../image/logo.jpg";
import UserInfor from "../user/userinfor";
import { Link } from 'react-router-dom';
function Sidebar() {
  const menulist =[
    {
      id:"timeline",
      title:"Dòng thời gian",
      link:"/timeline/normal",
    },
    {
      id:"write",
      title:"Viết bài",
      link:"/write/normal",
    },
    {
      id:"invisible_letter",
      title:"Hộp thư vô hình",
      link:"/invisibleletter",
    },
    {
      id:"gentle",
      title:"Góc dịu dàng",
      link:"/gentle/home",
    },
    {
      id:"whisper_space",
      title:"Không gian thì thầm",
      link:"/whisperspace",
    },

  ]
  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="list_li">
        {menulist.map((list,index)=>(
        <p>
          <span className="dot" />
          <span className="label_dot" id={list.id}><Link to={list.link}>{list.title}</Link></span>
        </p>
         ))}
      </div>
      <div className="profile-status">
        <UserInfor/>
      </div>
    </aside>
  );
}

export default Sidebar;
