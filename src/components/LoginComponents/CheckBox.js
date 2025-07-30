import React from "react";


function CheckBox() {
  return (
    <div className="check-container">
      <label className="check-label">Training Focus</label>
      <div className="check-group">
        <label className="check-item">
          <input type="checkbox" name="training" value="basic" />
          <span>Basic Techniques</span>
        </label>
        <label className="check-item">
          <input type="checkbox" name="training" value="kata" />
          <span>Kata</span>
        </label>
        <label className="check-item">
          <input type="checkbox" name="training" value="kumite" />
          <span>Kumite</span>
        </label>
      </div>
    </div>
  );
}

export default CheckBox;
