import React from "react";

function CheckBoxAgree() {
  return (
    <div className="FCheckbox">
      <br />
      <input type="checkbox" id="agree" />
      <label  className="Fcondition">
        &nbsp; Agree to our Terms and Conditions
      </label>
    </div>
  );
}

export default CheckBoxAgree;
