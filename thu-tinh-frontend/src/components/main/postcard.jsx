import ButtonBottom from "../attitues/btnbottom";
import PostButton from "../attitues/postbutton";
import logo from "../image/logo.jpg";
function PostCard() {
  return (
    <section>
      <PostButton></PostButton>
    <div className="post-card">
      <div className="post-header">
        <div className="profile">
          <img src={logo} alt="avatar" className="avatar" />
          <p><strong>Bé Con</strong></p>
        </div>
         <p><span className="status-green">Đang thấy vui</span></p>
      </div>
      <div className="post-content">
        <p>Hôm nay tớ cùng tạo trang web với Duyệt Tình</p>
        <div className="image-placeholder">Hình ảnh</div>
      </div>
      <ButtonBottom></ButtonBottom>
    </div>
    </section>
  );
}

export default PostCard;

