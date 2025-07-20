import React from "react";
import "./PageTop.css";

function PageTop(props) {
    return (
        <div>
            <div className="TopAddLesson">
                <div className="AddLesson-text">
                    <h1><b>{props.title}</b></h1>
                    <h2>{props.topic}</h2>
                </div>
            </div>
        </div>
    );
}

export default PageTop;