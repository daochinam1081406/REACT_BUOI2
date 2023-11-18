// Content.jsx

import React, { useState } from "react";
import glassesData from "./glassesData.json";
import { Row, Col } from "react-bootstrap"; // Import Row and Col from Bootstrap

const Content = () => {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const selectGlass = (glass) => {
    setSelectedGlass(glass);
  };

  return (
    <div className="content">
      <Row>
        <Col className="col-4">
          <img
            className="img-model"
            src={"./img/model.jpg"}
            alt={selectedGlass ? selectedGlass.name : "Default model"}
          />
        </Col>
        <Col className="col-4" style={{ position: "relative", zIndex: 1 }}>
          <img
            className="img-model"
            src={"./img/model.jpg"}
            alt={selectedGlass ? selectedGlass.name : "Default model"}
          />
        </Col>
        <Col className="col-4" style={{ position: "relative", zIndex: 2 }}>
          <img
            className="img-model"
            src={
              selectedGlass ? process.env.PUBLIC_URL + selectedGlass.url : ""
            }
            alt={selectedGlass ? selectedGlass.name : "Default model"}
          />
        </Col>
      </Row>
      <div className="glass-content">
        <Row>
          {glassesData.map((glass) => (
            <Col key={glass.id} className="col-3">
              <img
                src={process.env.PUBLIC_URL + glass.url}
                alt={glass.name}
                className="img-fluid"
                onClick={() => selectGlass(glass)}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Content;
