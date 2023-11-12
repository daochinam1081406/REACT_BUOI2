import React from "react";

export default function Content() {
  return (
    <div className="content">
      <div className="inner-content">
        <div className="portrait-images">
          <img
            src={process.env.PUBLIC_URL + "/img/model.jpg"}
            alt="Portrait 1"
          />
          <img
            src={process.env.PUBLIC_URL + "/img/model.jpg"}
            alt="Portrait 2"
          />
        </div>
        <div className="glass-item"></div>
      </div>
    </div>
  );
}
