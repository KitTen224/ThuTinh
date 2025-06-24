import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "../style/buttonstyle.css";
export default function PostButton(){
   const navigate = useNavigate();
   const location = useLocation();
  return(
      <div className="post-button">
        <button onClick={() => navigate('/timeline/normal')}
          className={location.pathname === "/timeline/normal" ? "active-button" : ""}>Hằng ngày</button>
        <button onClick={() => navigate('/timeline/anonymous')}
          className={location.pathname === "/timeline/anonymous" ? "active-button" : ""}>Tâm sự</button>
        <button onClick={() => navigate('/timeline/diary')}
          className={location.pathname === "/timeline/diary" ? "active-button" : ""}>Nhật ký</button>
      </div>
  );
}