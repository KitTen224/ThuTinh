import { useNavigate } from "react-router-dom";
function PostTypeSelector({ type, visibility, onClose, onConfirm }) {
  const navigate = useNavigate();
  return (
    <div className="type-popup">
      <h3>Chọn loại bài viết</h3>
      <div className="popup-section">
        <label><input type="radio" name="type" value="normal" defaultChecked={type === "normal"} /> Bình thường</label><br />
        <label><input type="radio" name="type" value="anonymous" defaultChecked={type === "anonymous"} /> Tâm sự</label><br />
        <label><input type="radio" name="type" value="diary" defaultChecked={type === "diary"} /> Nhật ký</label>
      </div>

      <h3>Chọn chế độ hiển thị</h3>
      <div className="popup-section">
        <label><input type="radio" name="visibility" value="public" defaultChecked={visibility === "public"} /> Công khai</label><br />
        <label><input type="radio" name="visibility" value="private" defaultChecked={visibility === "private"} /> Chỉ mình</label><br />
        <label><input type="radio" name="visibility" value="friends" defaultChecked={visibility === "friends"} /> Bạn bè</label>
      </div>

      <button
        onClick={() => {
          const selectedType = document.querySelector("input[name='type']:checked").value;
          const selectedVisibility = document.querySelector("input[name='visibility']:checked").value;
          onConfirm(selectedVisibility);
          onClose();

          // ✅ Chuyển route theo loại
          navigate(`/write/${selectedType}`);
        }}
      >
        Xác nhận
      </button>
    </div>
  );
}

export default PostTypeSelector;
