import React from "react";

function EmailL(props) {

    return (
        <>

            <div className="FFields">

                <label className="FLabel">{props.label}</label>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder || "example@domain.com"}
                    className="FInput"
                    
                />


            </div>


        </>

    )



}

export default EmailL;