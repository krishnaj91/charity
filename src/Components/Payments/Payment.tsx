import React, { useState } from "react";
import "./payment.css";
import Gpay from "../../assets/payments/gpay.png";
import Paytm from "../../assets/payments/paytm.png";
import Phonepe from "../../assets/payments/phonepe.png";
import Master from "../../assets/payments/master.png";
import Visa from "../../assets/payments/visa.png";
import Rupay from "../../assets/payments/rupay.png";
import Hdfc from "../../assets/payments/hdfc.png";
import Icici from "../../assets/payments/icici.png";
import Axis from "../../assets/payments/axis.png";
import AmeicanExpress from "../../assets/payments/american-express.png";
import Amazon from "../../assets/payments/amazon.png";
import Mobikwik from "../../assets/payments/mobikwik.png";
import Freecharge from "../../assets/payments/freecharge.png";
import PaytmWallet from "../../assets/payments/paytm-wallet.png";
import Slice from "../../assets/payments/slice.png";
import Simpl from "../../assets/payments/simpl.png";
import Qr from "../../assets/payments/qr.png";
import Upi from "../../assets/payments/upi.jpg";
import Sbi from "../../assets/payments/sbi.png";
import Rbi from "../../assets/payments/rbi.png";
import Bhim from "../../assets/payments/bhim.png";
import Evm from "../../assets/payments/evm.png";
import Wifi from "../../assets/payments/sam.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Modal, Typography } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Payment = () => {
  // 
  const [paymentBox, setPaymentBox] = React.useState(false);
  // const handlePaymentBoxOpen = () => setPaymentBox(true);
  const handlePaymentBoxClose = () => {setPaymentBox(false),navigate('/')};
  // 
  const navigate = useNavigate();
  const amount = localStorage.getItem("amount");
  const [method, setMethod] = useState("");
  const [upiSelected, setUpiSelected] = useState("");
  const [walletSelected, setWalletSelected] = useState("");
  const [paylaterSelected, setPaylaterSelected] = useState("");
  const [upi, setUpi] = useState({
    upi: "",
    gpay: "",
    phonepe: "",
    bhim: "",
    paytm: "",
    amazonUpi: "",
  });
  const [upiError, setUpiError] = useState({
    upi: "",
    gpay: "",
    phonepe: "",
    bhim: "",
    paytm: "",
    amazonUpi: "",
  });

  const [card, setCard] = useState({
    bank: "",
    provider: "",
    number: "",
    month: "",
    name: ""
  });

  const [cardError, setCardError] = useState({
    bank: '',
    provider: '',
    number:'',
    month: '',
    name: ''
  });

  const handleChange = (name: any, value: any) => {
    setUpi((preValue: any) => ({ ...preValue, [name]: value }));
    setUpiError((preValue: any) => ({ ...preValue, [name]: "" }));
  };

  const Validate = (name: any, field: any) => {
    const upiTemp: any = { ...upiError };
    if (name === "upi") {
      if (upi.upi === "") {
        upiTemp.upi = "Please enter your UPI Id";
      } else {
        upiTemp.upi = "";
      }
    }

    if (name === "gpay") {
      if (upi.gpay === "") {
        upiTemp.gpay = "Please enter your UPI Id";
      }
    }

    if (name === "phonepe") {
      if (upi.phonepe === "") {
        upiTemp.phonepe = "Please enter your UPI Id";
      }
    }

    if (name === "bhim") {
      if (upi.bhim === "") {
        upiTemp.bhim = "Please enter your UPI Id";
      }
    }

    if (name === "paytm") {
      if (upi.paytm === "") {
        upiTemp.paytm = "Please enter your UPI Id";
      }
    }

    if (name === "amazonUpi") {
      if (upi.amazonUpi === "") {
        upiTemp.amazonUpi = "Please enter your UPI Id";
      }
    }
    setUpiError(upiTemp);
  };

  const ValidateCredirCard = ()=>{
    const tempObj = {...cardError}
    if(card.bank===''){
      tempObj.bank='Bank name is required'
    }else{
      tempObj.bank=''
    }

    if(card.month===''){
      tempObj.month='Expiration date is required'
    }else{
      tempObj.month=''
    }

    if(card.name===''){
      tempObj.name='Name is reqired'
    }
    else if(card.name.length <4){
      tempObj.name='Invalid Name'
    }else{
      tempObj.name=''
    }

    if(card.number===''){
      tempObj.number='Card number is required'
    }
    else if(card.number.length <16 ){
      tempObj.number='Invalid Card number'
    }else{
      tempObj.number=''
    }

    if(card.provider===''){
      tempObj.provider='Provider is required'
    }else{
      tempObj.provider=''
    }
    setCardError(tempObj)
  }

  const handleUpiSubmit = (name: any) => {
    if (name === "upi") {
      Validate("upi", upi);
      if (upi.upi) {
        setPaymentBox(true)
      }
    } else if (name === "gpay") {
      Validate("gpay", upi);
      if (upi.gpay) {
        setPaymentBox(true)
      }
    } else if (name === "phonepe") {
      Validate("phonepe", upi);
      if (upi.phonepe) {
        setPaymentBox(true)
      }
    } else if (name === "bhim") {
      Validate("bhim", upi);
      if (upi.bhim) {
        setPaymentBox(true)
      }
    } else if (name === "paytm") {
      Validate("paytm", upi);
      if (upi.paytm) {
        setPaymentBox(true)
      }
    } else if (name === "amazonUpi") {
      Validate("amazonUpi", upi);
      if (upi.amazonUpi) {
        setPaymentBox(true)
      }
    }
  };

  const handleCreditSubmit = ()=>{
    ValidateCredirCard()
    if(card.bank && card.month && card.name.length>3 && card.number.length>=16 && card.provider){
      setPaymentBox(true)
    }
  }

  const upiReset = () => {
    setUpi({
      upi: "",
      gpay: "",
      phonepe: "",
      bhim: "",
      paytm: "",
      amazonUpi: "",
    });
    setUpiError({
      upi: "",
      gpay: "",
      phonepe: "",
      bhim: "",
      paytm: "",
      amazonUpi: "",
    });
  };

  const creditCardReset = ()=>{
    setCard({
      bank: "",
      provider: "",
      number: "",
      month: "",
      name: ""
    })
    setCardError({
      bank: '',
      provider: '',
      number:'',
      month: '',
      name: '',
    })
  }

  const exceptThisSymbols = ["e", "E", "+", "-", "."];

  const handleCardChange = (name: any, value: any) => {
    setCard((preValue) => ({ ...preValue, [name]: value }));
    setCardError((preValue) => ({ ...preValue, [name]: '' }));
  };

  return (
    <>
      <h1>Please select a payment method to pay Rs {amount}</h1>
      <div className="payment">
        <div className="payment-options">
          <ul>
            <li
              onClick={() => {
                setMethod("upi"), setUpiSelected("");
              }}
            >
              UPI
              <div>
                <img className="upi-logo" src={Gpay} />
                <img className="upi-logo" src={Paytm} />
                <img className="upi-logo" src={Phonepe} />
              </div>
            </li>
            <li onClick={() => {setMethod("credit-card"),creditCardReset()}}>
              CREDIT CARD
              <div>
                <img className="upi-logo" src={Visa} />
                <img className="upi-logo" src={Master} />
                <img className="upi-logo" src={Rupay} />
              </div>
            </li>
            {/* temp using credit code for debit card */}
            <li onClick={() => {setMethod("debit-card"),creditCardReset()}}> 
              DEBIT CARD
              <div>
                <img className="upi-logo" src={Visa} />
                <img className="upi-logo" src={Master} />
                <img className="upi-logo" src={Rupay} />
              </div>
            </li>
            <li onClick={() => setMethod("net-banking")}>
              NET BANKING
              <div>
                <img className="upi-logo" src={Hdfc} />
                <img className="upi-logo" src={Icici} />
                <img className="upi-logo" src={Axis} />
              </div>
            </li>
            <li onClick={() => setMethod("wallets")}>
              WALLETS
              <div>
                <img className="upi-logo" src={Amazon} />
                <img className="upi-logo" src={Mobikwik} />
                <img className="upi-logo" src={PaytmWallet} />
                <img className="upi-logo" src={Freecharge} />
              </div>
            </li>
            <li onClick={() => setMethod("pay-later")}>
              PAY LATER
              <div>
                <img className="upi-logo" src={Simpl} />
                <img className="upi-logo" src={Slice} />
              </div>
            </li>
            <li onClick={() => setMethod("qr")}>
              QR SCAN
              <div>
                <img className="upi-logo" src={Qr} />
              </div>
            </li>
          </ul>
        </div>
        <div className="view-payment">
          {method === "upi" && (
            <div className="selected">
              <h2>UPI Options</h2>
              <br />
              <div>
                <ul>
                  {/* UPI Id */}
                  {upiSelected !== "upi" && (
                    <li
                      onClick={() => {
                        setUpiSelected("upi"), upiReset();
                      }}
                    >
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Upi} />
                          <p>Pay via UPI Id / UPI Number</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {upiSelected === "upi" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Upi} />
                          <p>Pay via UPI Id / UPI Number</p>
                        </div>
                        <div onClick={() => setUpiSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          value={upi.upi}
                          onChange={(e: any) =>
                            handleChange("upi", e.target.value)
                          }
                          placeholder="Enter UPI Id"
                        />
                        <p className="err">{upiError.upi}</p>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => handleUpiSubmit("upi")}
                        >
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Google pay */}
                  {upiSelected !== "google-pay" && (
                    <li
                      onClick={() => {
                        setUpiSelected("google-pay"), upiReset();
                      }}
                    >
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Gpay} />
                          <p>Google Pay</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {upiSelected === "google-pay" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Gpay} />
                          <p>Google Pay</p>
                        </div>
                        <div onClick={() => setUpiSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          value={upi.gpay}
                          onChange={(e: any) =>
                            handleChange("gpay", e.target.value)
                          }
                          placeholder="Enter UPI Id"
                        />
                        <p className="err">{upiError.gpay}</p>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => handleUpiSubmit("gpay")}
                        >
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Phonepe */}
                  {upiSelected !== "phonepe" && (
                    <li
                      onClick={() => {
                        setUpiSelected("phonepe"), upiReset();
                      }}
                    >
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Phonepe} />
                          <p>Phonepe</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {upiSelected === "phonepe" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Phonepe} />
                          <p>Phonepe</p>
                        </div>
                        <div onClick={() => setUpiSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          value={upi.phonepe}
                          onChange={(e: any) =>
                            handleChange("phonepe", e.target.value)
                          }
                          placeholder="Enter UPI Id"
                        />
                        <p className="err">{upiError.phonepe}</p>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => handleUpiSubmit("phonepe")}
                        >
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Bhim */}
                  {upiSelected !== "Bhim" && (
                    <li
                      onClick={() => {
                        setUpiSelected("Bhim"), upiReset();
                      }}
                    >
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Bhim} />
                          <p>BHIM</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {upiSelected === "Bhim" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Bhim} />
                          <p>BHIM</p>
                        </div>
                        <div onClick={() => setUpiSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          value={upi.bhim}
                          onChange={(e: any) =>
                            handleChange("bhim", e.target.value)
                          }
                          placeholder="Enter UPI Id"
                        />
                        <p className="err">{upiError.bhim}</p>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => handleUpiSubmit("bhim")}
                        >
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Paytm */}
                  {upiSelected !== "paytm" && (
                    <li
                      onClick={() => {
                        setUpiSelected("paytm"), upiReset();
                      }}
                    >
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Paytm} />
                          <p>Paytm</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {upiSelected === "paytm" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Paytm} />
                          <p>Paytm</p>
                        </div>
                        <div onClick={() => setUpiSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          value={upi.paytm}
                          onChange={(e: any) =>
                            handleChange("paytm", e.target.value)
                          }
                          placeholder="Enter UPI Id"
                        />
                        <p className="err">{upiError.paytm}</p>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => handleUpiSubmit("paytm")}
                        >
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Amazon pay */}
                  {upiSelected !== "amazon-pay" && (
                    <li
                      onClick={() => {
                        setUpiSelected("amazon-pay"), upiReset();
                      }}
                    >
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Amazon} />
                          <p>Amazon Pay</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {upiSelected === "amazon-pay" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Amazon} />
                          <p>Amazon pay</p>
                        </div>
                        <div onClick={() => setUpiSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          value={upi.amazonUpi}
                          onChange={(e: any) =>
                            handleChange("amazonUpi", e.target.value)
                          }
                          placeholder="Enter UPI Id"
                        />
                        <p className="err">{upiError.amazonUpi}</p>
                        <Button
                          color="success"
                          variant="contained"
                          onClick={() => handleUpiSubmit("amazonUpi")}
                        >
                          pay
                        </Button>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {method === "credit-card" && (
            <div className="selected">
              <h1>Credit Card</h1>
              <div className="cc-position">
                <div className="cc-card">
                  <div className="cc-top">
                    <div className="cc-bank">
                      {card.bank === "" && <img src={Rbi} />}
                      {card.bank === "HDFC" && <img src={Hdfc} />}
                      {card.bank === "AXIS" && <img src={Axis} />}
                      {card.bank === "SBI" && <img src={Sbi} />}
                      {card.bank === "ICICI" && <img src={Icici} />}
                      {card.bank ? <p>{card.bank}</p> : <p>RBI</p>}
                    </div>
                    <p>Credit</p>
                  </div>
                  <div className="cc-middle">
                    <img src={Wifi} />
                    <img src={Evm} />
                  </div>
                  <div className="cc-end">
                    {card.number ? (
                      <h2>
                        {card.number.slice(0, 4)} {card.number.slice(4, 8)}{" "}
                        {card.number.slice(8, 12).replaceAll(/[0-9]/g, "*")}{" "}
                        {card.number.slice(12, 16)}
                      </h2>
                    ) : (
                      <h2>9999 9999 9999 9999</h2>
                    )}
                  </div>
                  <div className="cc-end-detail">
                    <div className="cc-month">
                      {card.month ? <p>{card.month}</p> : <p>MM/YY</p>}
                      {card.name ? <p>{card.name}</p> : <p>Name on Card</p>}
                    </div>
                    <div className="cc-provider">
                      {card.provider === "" && <h2>VISA</h2>}
                      {card.provider === "visa" && <img src={Visa} />}
                      {card.provider === "master" && <img src={Master} />}
                      {card.provider === "rupay" && <img src={Rupay} />}
                      {card.provider === "american" && (
                        <img src={AmeicanExpress} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="cc-form">
                <center><h2>Enter your credit card detais</h2></center>
                <select
                  className="cc-form-inpt"
                  value={card.bank}
                  onChange={(e) => handleCardChange("bank", e.target.value)}
                >
                  <option value="">--Please select your bank--</option>
                  <option value="HDFC">HDFC</option>
                  <option value="AXIS">AXIS</option>
                  <option value="SBI">SBI</option>
                  <option value="ICICI">ICICI</option>
                </select>
                <select
                  className="cc-form-inpt"
                  value={card.provider}
                  onChange={(e) => handleCardChange("provider", e.target.value)}
                >
                  <option value="">--Please select your varient--</option>
                  <option value="visa">VISA</option>
                  <option value="master">MASTER CARD</option>
                  <option value="rupay">RUPAY</option>
                  <option value="american">AMERICAN EXPRESS</option>
                </select>
                <div className="err-space">
                  <span className="err">{cardError.bank}</span>
                  <span className="err">{cardError.provider}</span>
                </div>
                <input
                  className="cc-form-inpt-number"
                  placeholder="Enter your Card Number"
                  type="number"
                  value={card.number}
                  onKeyDown={(e) =>
                    exceptThisSymbols.includes(e.key) && e.preventDefault()
                  }
                  onWheel={(e:any) => e.target.blur()}
                  onChange={(e) =>
                    handleCardChange(
                      "number",
                      e.target.value.toString().slice(0, 16)
                    )
                  }
                /><br/>
                <p className="err">{cardError.number}</p>
                <PatternFormat
                  className="cc-form-inpt"
                  placeholder="MM/YY"
                  format="##/##"
                  value={card.month}
                  onChange={(e: any) =>
                    handleCardChange("month", e.target.value)
                  }
                />
                <input
                  className="cc-form-inpt"
                  placeholder="Name"
                  type="text"
                  value={card.name}
                  onChange={(e) =>
                    handleCardChange(
                      "name",
                      e.target.value
                        .toString()
                        .slice(0, 15)
                        .replace(/[^a-z ]/gi, "")
                    )
                  }
                />
                <div className="err-space">
                  <span className="err">{cardError.month}</span>
                  <span className="err">{cardError.name}</span>
                </div>
                <input
                  className="cc-form-inpt"
                  type="password"
                  placeholder="CVV"
                />

                <center><Button variant="contained" onClick={handleCreditSubmit}>Pay</Button></center>
              </div>
            </div>
          )}

          {method === "debit-card" && (
            <div className="selected">
            <h1>Debit Card</h1>
            <div className="cc-position">
              <div className="dc-card">
                <div className="cc-top">
                  <div className="cc-bank">
                    {card.bank === "" && <img src={Rbi} />}
                    {card.bank === "HDFC" && <img src={Hdfc} />}
                    {card.bank === "AXIS" && <img src={Axis} />}
                    {card.bank === "SBI" && <img src={Sbi} />}
                    {card.bank === "ICICI" && <img src={Icici} />}
                    {card.bank ? <p>{card.bank}</p> : <p>RBI</p>}
                  </div>
                  <p>Debit</p>
                </div>
                <div className="cc-middle">
                  <img src={Wifi} />
                  <img src={Evm} />
                </div>
                <div className="cc-end">
                  {card.number ? (
                    <h2>
                      {card.number.slice(0, 4)} {card.number.slice(4, 8)}{" "}
                      {card.number.slice(8, 12).replaceAll(/[0-9]/g, "*")}{" "}
                      {card.number.slice(12, 16)}
                    </h2>
                  ) : (
                    <h2>9999 9999 9999 9999</h2>
                  )}
                </div>
                <div className="cc-end-detail">
                  <div className="cc-month">
                    {card.month ? <p>{card.month}</p> : <p>MM/YY</p>}
                    {card.name ? <p>{card.name}</p> : <p>Name on Card</p>}
                  </div>
                  <div className="cc-provider">
                    {card.provider === "" && <h2>VISA</h2>}
                    {card.provider === "visa" && <img src={Visa} />}
                    {card.provider === "master" && <img src={Master} />}
                    {card.provider === "rupay" && <img src={Rupay} />}
                    {card.provider === "american" && (
                      <img src={AmeicanExpress} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="cc-form">
              <center><h2>Enter your credit card detais</h2></center>
              <select
                className="cc-form-inpt"
                value={card.bank}
                onChange={(e) => handleCardChange("bank", e.target.value)}
              >
                <option value="">--Please select your bank--</option>
                <option value="HDFC">HDFC</option>
                <option value="AXIS">AXIS</option>
                <option value="SBI">SBI</option>
                <option value="ICICI">ICICI</option>
              </select>
              <select
                className="cc-form-inpt"
                value={card.provider}
                onChange={(e) => handleCardChange("provider", e.target.value)}
              >
                <option value="">--Please select your varient--</option>
                <option value="visa">VISA</option>
                <option value="master">MASTER CARD</option>
                <option value="rupay">RUPAY</option>
                <option value="american">AMERICAN EXPRESS</option>
              </select>
              <div className="err-space">
                <span className="err">{cardError.bank}</span>
                <span className="err">{cardError.provider}</span>
              </div>
              <input
                className="cc-form-inpt-number"
                placeholder="Enter your Card Number"
                type="number"
                value={card.number}
                onKeyDown={(e) =>
                  exceptThisSymbols.includes(e.key) && e.preventDefault()
                }
                onWheel={(e:any) => e.target.blur()}
                onChange={(e) =>
                  handleCardChange(
                    "number",
                    e.target.value.toString().slice(0, 16)
                  )
                }
              /><br/>
              <p className="err">{cardError.number}</p>
              <PatternFormat
                className="cc-form-inpt"
                placeholder="MM/YY"
                format="##/##"
                value={card.month}
                onChange={(e: any) =>
                  handleCardChange("month", e.target.value)
                }
              />
              <input
                className="cc-form-inpt"
                placeholder="Name"
                type="text"
                value={card.name}
                onChange={(e) =>
                  handleCardChange(
                    "name",
                    e.target.value
                      .toString()
                      .slice(0, 15)
                      .replace(/[^a-z ]/gi, "")
                  )
                }
              />
              <div className="err-space">
                <span className="err">{cardError.month}</span>
                <span className="err">{cardError.name}</span>
              </div>
              <input
                className="cc-form-inpt"
                type="password"
                placeholder="CVV"
              />

              <center><Button variant="contained" onClick={handleCreditSubmit}>Pay</Button></center>
            </div>
          </div>
          )}

          {method === "net-banking" && (
            <div className="selected">
              <h1>Net Banking</h1>
              <br/><br/><br/><br/>
              <center><h1>comming soon.......</h1></center>
            </div>
          )}

          {method === "wallets" && (
            <div className="selected">
              <h2>Wallet Options</h2>
              <br />
              <div>
                <ul>
                  {/* Freecharge */}
                  {walletSelected !== "freecharge" && (
                    <li onClick={() => setWalletSelected("freecharge")}>
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Freecharge} />
                          <p>freecharge</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {walletSelected === "freecharge" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Freecharge} />
                          <p>Freecharge</p>
                        </div>
                        <div onClick={() => setWalletSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          placeholder="Enter Mobile Number"
                        />

                        <Button color="success" variant="contained">
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Mobikwik */}
                  {walletSelected !== "mobikwik" && (
                    <li onClick={() => setWalletSelected("mobikwik")}>
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Mobikwik} />
                          <p>Mobikwik</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {walletSelected === "mobikwik" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Mobikwik} />
                          <p>Mobikwik</p>
                        </div>
                        <div onClick={() => setWalletSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          placeholder="Enter Mobile Number"
                        />

                        <Button color="success" variant="contained">
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Paytm Wallet */}
                  {walletSelected !== "paytm-wallet" && (
                    <li onClick={() => setWalletSelected("paytm-wallet")}>
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={PaytmWallet} />
                          <p>Paytm Wallet</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {walletSelected === "paytm-wallet" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={PaytmWallet} />
                          <p>Paytm Wallet</p>
                        </div>
                        <div onClick={() => setWalletSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          placeholder="Enter Mobile Number"
                        />

                        <Button color="success" variant="contained">
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Amazon pay */}
                  {walletSelected !== "amazon-pay" && (
                    <li onClick={() => setWalletSelected("amazon-pay")}>
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Amazon} />
                          <p>Amazon Pay</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {walletSelected === "amazon-pay" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Amazon} />
                          <p>Amazon pay</p>
                        </div>
                        <div onClick={() => setWalletSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          placeholder="Enter Mobile Number"
                        />

                        <Button color="success" variant="contained">
                          pay
                        </Button>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {method === "pay-later" && (
            <div className="selected">
              <h2>Pay Later Options</h2>
              <br />
              <div>
                <ul>
                  {/* Slice */}
                  {paylaterSelected !== "slice" && (
                    <li onClick={() => setPaylaterSelected("slice")}>
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Slice} />
                          <p>Slice</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {paylaterSelected === "slice" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Slice} />
                          <p>Slice</p>
                        </div>
                        <div onClick={() => setPaylaterSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          placeholder="Enter Mobile Number"
                        />

                        <Button color="success" variant="contained">
                          pay
                        </Button>
                      </div>
                    </li>
                  )}

                  {/* Simpl */}
                  {paylaterSelected !== "simpl" && (
                    <li onClick={() => setPaylaterSelected("simpl")}>
                      <div className="selected-inactive">
                        <div className="selected-center">
                          <img className="selected-logo" src={Simpl} />
                          <p>Simpl</p>
                        </div>
                        <div>
                          <ChevronRightIcon />
                        </div>
                      </div>
                    </li>
                  )}

                  {paylaterSelected === "simpl" && (
                    <li className="selected-active">
                      <div className="selected-active-space">
                        <div className="selected-center">
                          <img className="selected-logo" src={Simpl} />
                          <p>Simpl</p>
                        </div>
                        <div onClick={() => setPaylaterSelected("")}>
                          <CloseIcon />
                        </div>
                      </div>
                      <div className="selected-active-extra">
                        <input
                          className="selected-active-input"
                          placeholder="Enter Mobile Number"
                        />

                        <Button color="success" variant="contained">
                          pay
                        </Button>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {method === "qr" && (
            <div className="selected">
              <div>
                <h2>QR Scan</h2>
              </div>
              <div className="qr">
                <div className="qr-body">
                  <img src={Qr} />
                  <p>Scan the above QR using your UPI app</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <Modal
          open={paymentBox}
          onClose={handlePaymentBoxClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              We have received your payment
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ₹{amount} has been contributed successfully
            </Typography><br/>
            <Button variant="contained" onClick={()=>navigate('/')}>OK</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Payment;
