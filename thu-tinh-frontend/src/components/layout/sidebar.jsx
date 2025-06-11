import logo from "../image/logo.jpg";
import UserInfor from "../user/userinfor";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="list_li">
        <p>
          <span className="dot" />
          <span className="label_dot" id="timeline"><Link to="/timeline/normal">Dòng thời gian</Link></span>
        </p>
        <p>
          <span className="dot" />
          <span className="label_dot"  id="write"><Link to="/write/normal">Viết bài</Link></span>
        </p>
        <p>
          <span className="dot" />
          <span className="label_dot" id="whisper_space">Không gian thì thầm</span>
        </p>
        <p>
          <span className="dot" />
          <span className="label_dot" id="gentle"><Link to="/gentle/home">Góc dịu dàng</Link></span>
        </p>
        <p>
          <span className="dot" />
          <span className="label_dot" id="invisible_letter"><Link to="/invisibleletter">Hộp thư vô hình</Link></span>
        </p>
      </div>
      <div className="profile-status">
        <UserInfor/>
      </div>
    </aside>
  );
}

export default Sidebar;
