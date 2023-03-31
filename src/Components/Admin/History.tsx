import React from "react";
import "./history.css";

const History = () => {
  return (
    <div>
      <div className="head">
        <div className="box">
          <h1>Total contributers</h1>
          <h2>40</h2>
        </div>

        <div className="box">
          <h1>Total amount Received</h1>
          <h2>Rs - 100,000</h2>
        </div>
      </div>
      <div className="categories">
       <ul>
        <li>ALL</li>
        <li>SUCCESSFUL</li>
        <li>FAILED</li>
       </ul>
      </div>
    </div>
  );
};

export default History;
