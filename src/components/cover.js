import React from "react";


function Cover( ) {
  return (
    <div>
      <div className="cover">
        <div className="row">
            <div className="col imgText">
                <img className="cover-img" src="/volleyball.png" alt="..."/ >
                <div className="row coverText">
                    <div className="col-12 coverHText">Volleyball</div>
                    <div className="col-12 coverPText">Let's <span style={{color:'red'}}>Do</span> this.!</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
