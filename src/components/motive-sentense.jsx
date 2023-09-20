import React from "react";
import "./motive-sentense.css";

const downArrow = require("../assets/icons/down-arrow.png");
const MotiveSentense = () => {
  return (
    <div className="motive-container">
      <hr size="5px" color="rgba(12, 12, 54)" width="80%" />
      <p>Technology is best </p>
      <p>when it brings people together</p>
      <img src={downArrow} alt="" srcset="" />
      <span>View Portfolio</span>
    </div>
  );
};

export default MotiveSentense;
