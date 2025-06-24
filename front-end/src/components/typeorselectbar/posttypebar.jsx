function PostTypeBar({ type,visibility,onClickChangeType }) {
  const visibilityMap = {
    public: "Công khai",
    private: "Chỉ mình",
    friends: "Bạn bè",
  };

  const typeMap = {
    normal: {
      icon: "📘",
      title: "Bình thường",
      desc: "bài viết chia sẻ cuộc sống",
    },
    anonymous: {
      icon: "🌙",
      title: "Tâm sự",
      desc: "bài viết ẩn danh muốn có người lắng nghe",
    },
    diary: {
      icon: "🔒",
      title: "Nhật ký",
      desc: "những dòng chữ chỉ của mình bạn",
    },
  };

  const current = typeMap[type];
  const currentVisibility = visibilityMap[visibility];
  return (
    <div className="post-type-bar">
      <p>
        {current.icon} Bạn đang viết ở: <strong>{current.title}</strong> – {current.desc}
      </p>
      <p>
        [ Chế độ:  {current.title==="Nhật ký"? visibilityMap["private"]:currentVisibility } ]{" "}
        <span
          className="change-type"
          onClick={onClickChangeType}
          style={{ cursor: "pointer", color: "#6a6a6a", marginLeft: "1rem" }}>
          🔄 Đổi loại bài viết
        </span>
      </p>
    </div>
  );
}
export default PostTypeBar;