import logo from "../image/logo.jpg";
import UserInfor from "../user/userinfor";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="menu">
          <li id="timeline"><Link to="/timeline/normal">Dòng thời gian</Link></li>
          <li id="write"><Link to="/write/normal">Viết bài</Link></li>
          <li id="withAi">Không gian thì thầm</li>
          <li id="music"><Link to="/gentle/home">Góc dịu dàng</Link></li>
          <li id="mesbox">Hộp thư vô hình</li> 
      </ul>
      <div className="profile-status">
        <UserInfor/>
      </div>
    </aside>
  );
}

export default Sidebar;
