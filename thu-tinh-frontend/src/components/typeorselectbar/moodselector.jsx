
function MoodSelector({ mood, setMood }) {
  const moods = [
    { key: "happy", label: "🌤️ Vui", color: "#84D58C" },
    { key: "sad", label: "🌧️ Buồn", color: "#A6B7D4" },
    { key: "tired", label: "😴 Mệt", color: "#D3C1C1" },
    { key: "grateful", label: "🌿 Biết ơn", color: "#AACCA4" },
    { key: "anxious", label: "⛅ Bất an", color: "#E1B7B7" },
  ];

  return (
    <div className="mood-selector">
      {moods.map((m) => (
        <button
          key={m.key}
          className={`mood-btn ${mood === m.key ? "active" : ""}`}
          style={{ backgroundColor: mood === m.key ? m.color : "#f0f0f0" }}
          onClick={() => setMood(m.key)}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;