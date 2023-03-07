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
        <div className="category">
          <h2>CHILDREN EDUCATION</h2>
          <h2>10 users (25%)</h2>
          <h2>Rs-25,000</h2>
        </div>
        <div className="category">
          <h2>CHILDREN HEALTH</h2>
          <h2>10 users (25%)</h2>
          <h2>Rs-25,000</h2>
        </div>
        <div className="category">
          <h2>CHILDREN WEALTH</h2>
          <h2>10 users (25%)</h2>
          <h2>Rs-25,000</h2>
        </div>
        <div className="category">
          <h2>CHILDREN WELFARE</h2>
          <h2>10 users (25%)</h2>
          <h2>Rs-25,000</h2>
        </div>
      </div>
      <div className="user-data">
        <table>
          <thead>
            <th>s.no</th>
            <th>name</th>
            <th>email</th>
            <th>category</th>
            <th>amount</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>sad</td>
              <td>as.vom</td>
              <td>edu</td>
              <td>230</td>
            </tr>
            <tr>
              <td>2</td>
              <td>cvd</td>
              <td>jf.vom</td>
              <td>wel</td>
              <td>460</td>
            </tr>
            <tr>
              <td>3</td>
              <td>fvd</td>
              <td>ad.vom</td>
              <td>hel</td>
              <td>430</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default History;
