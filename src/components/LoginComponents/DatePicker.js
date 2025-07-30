import React from "react";

function DatePicker(props) {

    return (
        <>

            <div className="FFields">

                <label className="FLabel">{props.label}</label>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder || "YYYY-MM-DD"}
                    className="FInput"
                    pattern={props.pattern || "\\d{4}-\\d{2}-\\d{2}"}
                    

                />


            </div>


        </>

    )



}

export default DatePicker;