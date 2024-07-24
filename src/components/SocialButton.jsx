import { useState } from "react";
import "../Styles/SocialButton.css";

export function SocialButton({
  icon,
  initialBgColor,
  hoverBgColor,
  initialColor,
  hoverColor,
}) {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [color, setColor] = useState(initialColor);

  const handleMouseOver = () => {
    setBgColor(hoverBgColor);
    setColor(hoverColor);
  };

  const handleMouseOut = () => {
    setBgColor(initialBgColor);
    setColor(initialColor);
  };

  return (
    <span className="social-button">
      <button
        style={{ backgroundColor: bgColor, color: color }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <i>{icon}</i>
      </button>
    </span>
  );
}
