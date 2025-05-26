import { useNavigate } from 'react-router-dom';

export default function PostButton(){
   const navigate = useNavigate();

  return(
      <div className="post-button">
        <button onClick={() => navigate('/timeline/normal')}>Hằng ngày</button>
        <button onClick={() => navigate('/timeline/anonymous')}>Tâm sự</button>
        <button onClick={() => navigate('/timeline/diary')}>Nhật ký</button>
      </div>
  );
}