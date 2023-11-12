import React, { useState } from "react";
import glassesData from "./glassesData.json";

const Content = () => {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const selectGlass = (glass) => {
    setSelectedGlass(glass);
  };

  return (
    <div className="content">
      <div className="model">
        <img
          // src={
          //   selectedGlass
          //     ? process.env.PUBLIC_URL + selectedGlass.url
          //     : process.env.PUBLIC_URL + "./img/model.jpg" // Default image
          // }
          src={
            "./img/model.jpg" // Default image
          }
          alt={selectedGlass ? selectedGlass.name : "Default model"}
        />
        <img
          // src={
          //   selectedGlass
          //     ? process.env.PUBLIC_URL + selectedGlass.url
          //     : process.env.PUBLIC_URL + "./img/model.jpg" // Default image
          // }
          src={
            "./img/model.jpg" // Default image
          }
          alt={selectedGlass ? selectedGlass.name : "Default model"}
        />
      </div>
      <div className="glass-items">
        {glassesData.map((glass) => (
          <div key={glass.id} onClick={() => selectGlass(glass)}>
            <img src={process.env.PUBLIC_URL + glass.url} alt={glass.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
