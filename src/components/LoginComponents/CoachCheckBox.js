import React from "react";


function CoahCheckBox() {
  return (
    <div className="check-container">
      <label className="check-label">Karate Style</label>
      <div className="check-group">
        <label className="check-item">
          <input type="checkbox" name="training" value="SHOTOKAN" />
          <span>Shotokan</span>
        </label>
        <label className="check-item">
          <input type="checkbox" name="training" value="SHITO" />
          <span>Shito</span>
        </label>
        <label className="check-item">
          <input type="checkbox" name="training" value="GOJU RYU" />
          <span>Gojuryu</span>
        </label>
        <label className="check-item">
          <input type="checkbox" name="training" value="WADO RYU" />
          <span>Wadoryu</span>
        </label>
      </div>
    </div>
  );
}

export default CoahCheckBox;
