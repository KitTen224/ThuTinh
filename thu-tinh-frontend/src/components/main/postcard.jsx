
import PostButton from "../attitues/postbutton";
import "../style/body.css"

function PostCard({children}) {
  return (
    <section>
      <PostButton/>
      <div className="post-card">
        {children}
      </div>
    </section>
  );
}

export default PostCard;

