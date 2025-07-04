import { useState } from "react";
import PostTypeBar from "./posttypebar";
import PostTypeSelector from "./PostTypeSelector";
import "../style/body.css"
export default function PostTypeController({ type, onChange }) {
  const [visibility, setVisibility] = useState("public");
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirm = (newVisibility) => {
    setVisibility(newVisibility);
    setShowPopup(false);
    if (onChange) onChange(newVisibility); // Gửi ra ngoài nếu cần
  };

  return (
    <>
      <PostTypeBar
        type={type}
        visibility={visibility}
        onClickChangeType={() => setShowPopup(true)}
      />

      {showPopup && (
        <PostTypeSelector
          type={type}
          visibility={visibility}
          onClose={() => setShowPopup(false)}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
