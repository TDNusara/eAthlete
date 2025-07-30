import React from "react";

function PasswordField(props) {

    return (
        <>

            <div className="FFields">

                <label className="FLabel">{props.label}</label>
                <input

                    type={props.Password || "password"}
                    value={props.value}
                    name={props.name}
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