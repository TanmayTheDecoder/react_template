import React from "react";
import "./two-partitions.css";

const lsideimage = require("../assets/images/laptop-hands.png");
const rsideimage = require("../assets/images/laptop-man.jpg");
const TwoPartitions = () => {
  return (
    <div className="partitions">
      <div className="partition-container">
        <div className="partitions-inner">
          <div className="lside">
            <div className="lside-head">
              <div className="inner-lside-head">
                I am&nbsp;<span>designer</span>
              </div>
            </div>
            <div className="lside-image">
              <img src={lsideimage} alt="" srcset="" />
            </div>
          </div>
          <div className="rside">
            <div className="rside-image">
              <img src={rsideimage} alt="" srcset="" />
            </div>
            <div className="rside-text">
              <p>
                Images from <a href="https://www.freepik.com/">Freepik</a>
              </p>
              <div className="link-box">
                <a href="https://www.eleconone.com/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grey-bar"></div>
    </div>
  );
};

export default TwoPartitions;
