import React from "react";

function FileUpload(props) {
  return (
    <>
      <div className="FFields">
        <label className="FLabel">{props.label}</label>
        <input
          type="file"
          onChange={props.onChange}
          className="FInput"
          accept={props.accept || "*"} // e.g., "image/*" or ".pdf"
        />
      </div>
    </>
  );
}

export default FileUpload;
