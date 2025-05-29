import React from "react";
import "../styles/multirow.css";
import { useState } from "react";

function multirow() {
  const [val, setVal] = useState({ color: "red" });

  return (
    <div>
      <div className="multirow">
        <div className="multirow-content">
          <h1 className="main-header">Services</h1>
          <h1 className="child-header">Services</h1>
          <div className="row row1">
            <div className="row-cont-left">
              <h1 className="row1-title">Row1</h1>
              <p className="row1-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus.
              </p>
            </div>
            <div className="row-cont-right">
              <h1 className="row1-title">Row1</h1>
              <p className="row1-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus.
              </p>
            </div>
          </div>
          <div className="row row2">
            <div className="row-cont-left">
              <h1 className="row1-title">Row1</h1>
              <p className="row1-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus.
              </p>
            </div>
            <div className="row-cont-right">
              <h1 className="row1-title">Row1</h1>
              <p className="row1-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus.
              </p>
            </div>
          </div>
          <div className="row row3">
            <div className="row-cont-left">
              <h1 className="row1-title">Row1</h1>
              <p className="row1-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus.
              </p>
            </div>
            <div className="row-cont-right">
              <h1 className="row1-title">Row1</h1>
              <p className="row1-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default multirow;
