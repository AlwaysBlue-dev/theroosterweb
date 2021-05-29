import React from "react";

function Cards(props) {
  return (
    <>
      <div className="container-fluid cont">
        <div className="col">
          <div className="col-10 mx-auto"></div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={props.imgsrc} className="card-img-top" alt="deals" />
            <div className="card-body">
              <h5 className="card-title ">{props.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
