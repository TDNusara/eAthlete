import React from "react";

function TextAreaField(props) {
  return (
    <>
      <div className="FFields">
        <label className="FLabel">{props.label}</label>
        <textarea
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="FInput"
          rows={props.rows || 1}
        />
      </div>
    </>
  );
}

export default TextAreaField;
