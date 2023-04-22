import React, { useEffect, useState } from "react";
import "./history.css";
import PaymentData from "../../Data/payments.json";

const History = () => {
  const [history, setHistory] = useState<any>();
  const [categories, setCategories] = useState("all");
  const [total,setTotal] = useState<any>()

  useEffect(() => {
    setHistory(PaymentData);
    // {history&&history.map((item:any)=>{
    //   return(
    //   setTotal([...total,{item.amount}])
    // )})}
    
  });

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
          <li className={categories==='all' ? 'payment-active':''} onClick={() => setCategories("all")}>ALL</li>
          <li className={categories==='successful' ? 'payment-active':''} onClick={() => setCategories("successful")}>SUCCESSFUL</li>
          <li className={categories==='failed' ? 'payment-active':''} onClick={() => setCategories("failed")}>FAILED</li>
        </ul>
      </div>
      <div className="table-history">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>amount</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* all */}
            {categories === "all" &&
              history &&
              history.map((item: any) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.amount}</td>
                    <td className={item.status === "successful" ? "col-green" : "col-red" }>{item.status}</td>
                  </tr>
                );
              })}

            {categories === "successful" &&
              history &&
              history.map((item: any) => {
                return (
                  <>
                    {item.status === "successful" && (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.amount}</td>
                        <td className="col-green">{item.status}</td>
                      </tr>
                    )}
                  </>
                );
              })}

              {categories === "failed" &&
              history &&
              history.map((item: any) => {
                return (
                  <>
                    {item.status === "failed" && (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.amount}</td>
                        <td className="col-red">{item.status}</td>
                      </tr>
                    )}
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
