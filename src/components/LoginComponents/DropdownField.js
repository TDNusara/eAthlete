import React from "react"

function DropdownField(props) {
    return(
        <>
        
        <div className="FFields">
         <label className="FLabel">{props.label}</label>
        <select value={props.value}  onChange={props.onChange} className="FInput">

        <option value="">-- Select Option --</option>

          {props.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
          ))}
        
          </select>

        </div>
        
        
        </>

    )


}
export default DropdownField;