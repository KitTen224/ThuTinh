export default function StartButton({ onClick, disabled }) {
  return (
    <button className="start-button" onClick={onClick} disabled={disabled}>
      Bắt đầu
    </button>
  );
}