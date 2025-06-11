import { useNavigate } from "react-router-dom";

export default function ControlButton({ isPaused, onTogglePause }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/gentle/home");
  }

  return (
    <div className="meditation-controls">
      <button onClick={onTogglePause}>
        {isPaused ? "Tiếp tục" : "Tạm dừng"}
      </button>
      <button onClick={handleBack}>Quay lại</button>
    </div>
  );
}
