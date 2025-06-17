import logo from "../image/logo.jpg";
import UserInfor from "../user/userinfor";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Sidebar() {
  const location = useLocation();
  const menulist =[
    {
      id:"timeline",
      title:"Dòng thời gian",
      link:"/timeline/normal",
      base:"/timeline",
    },
    {
      id:"write",
      title:"Viết bài",
      link:"/write/normal",
      base:"/write",
    },
    {
      id:"invisible_letter",
      title:"Hộp thư vô hình",
      link:"/letter",
      base:"/letter"
    },
    {
      id:"gentle",
      title:"Góc dịu dàng",
      link:"/gentle/home",
      base:"/gentle"
    },
    {
      id:"whisper_space",
      title:"Không gian thì thầm",
      link:"/whisper",
      base:"/whisper",
    },

  ]
   return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="list_li">
        {menulist.map((list, index) => {
          const isActive = location.pathname.startsWith(list.base);
          return (
            <p key={index}>
              <span className="dot" />
              <span
                className={`label_dot ${isActive ? "active-label" : ""}`}
                id={list.id}
              >
                <Link to={list.link} className="link-decor">
                  {list.title}
                </Link>
              </span>
            </p>
          );
        })}
      </div>

      <div className="profile-status">
        <UserInfor />
      </div>
    </aside>
  );
}

