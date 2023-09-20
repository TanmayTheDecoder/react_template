import React from "react";
import "./upsidedownparagraphs.css";

const UpsideDown = () => {
  return (
    <div className="para-container">
      <div className="para-inner">
        <div className="para-l-side">
          <span>Visual communication</span> for brands and people
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            itaque facilis minima recusandae sequi vel aperiam tenetur, minus
            ipsum facere doloremque quas assumenda voluptates architecto
            expedita quidem suscipit nulla beatae!
          </p>
          <div className="blue-box">
            <a href="https://www.eleconone.com/">Read More</a>
          </div>
        </div>
        <div className="para-r-side">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            laborum reiciendis neque iusto vero libero! Deserunt sequi magni
            quaerat voluptate dolores ullam alias, hic culpa doloremque
            excepturi, sit reiciendis impedit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpsideDown;
