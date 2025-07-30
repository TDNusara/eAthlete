import React from "react";

function CoachCheckBox({ selectedStyle, onChange }) {
  return (
    <div className="check-container">
      <label className="check-label">Karate Style</label>
      <div className="check-group">
        {["SHOTOKAN", "SHITO", "GOJU RYU", "WADO RYU"].map((style) => (
          <label key={style} className="check-item">
            <input
              type="radio"
              name="karateStyle"
              value={style}
              checked={selectedStyle === style}
              onChange={onChange}
            />
            <span>{style.charAt(0) + style.slice(1).toLowerCase()}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CoachCheckBox;
