import React from "react";

function CheckBoxAgree() {
  return (
    <div className="FCheckbox">
      <input type="checkbox" id="agree" />
      <label  className="Fcondition">
        Agree to our Terms and Conditions
      </label>
    </div>
  );
}

export default CheckBoxAgree;
