import ButtonBottom from "../buttonbar/btnbottom";
import ReactionDislay from "./reaction";
import UserInfor from "../user/userinfor";

export default function SmallPost({type}){
  return(
    <>
     <div className="post-header">
        <UserInfor type={type}/>
      </div>
      <div className="post-content">
        <p>Hôm nay tớ cùng tạo trang web với Duyệt Tình</p>
          <div className="image-placeholder">Hình ảnh</div>
      </div>
      <ReactionDislay/>
      <ButtonBottom/>
    </>
  )
}