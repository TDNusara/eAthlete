import React from "react";

function PasswordField(props) {

    return (
        <>

            <div className="FFields">

                <label className="FLabel">{props.label}</label>
                <input

                    type={props.type || "password"}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    className="FInput"
                    minLength={props.minLength || 8}


                />

            </div>



        </>

    )



}

export default PasswordField;