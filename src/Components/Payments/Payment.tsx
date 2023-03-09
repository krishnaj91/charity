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
import Amazon from "../../assets/payments/amazon.png";
import Mobikwik from "../../assets/payments/mobikwik.png";
import Freecharge from "../../assets/payments/freecharge.png";
import PaytmWallet from "../../assets/payments/paytm-wallet.png";
import Slice from "../../assets/payments/slice.png";
import Simpl from "../../assets/payments/simpl.png";
import Qr from "../../assets/payments/qr.png";
import Upi from "../../assets/payments/upi.jpg";
import Bhim from "../../assets/payments/bhim.png";
import Evm from "../../assets/payments/evm.png";
import Wifi from "../../assets/payments/sam.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const Payment = () => {
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

  const handleChange = (name: any, value: any) => {
    setUpi((preValue: any) => ({ ...preValue, [name]: value }));
    setUpiError((preValue: any) => ({ ...preValue, [name]: "" }));
  };
  
  const Validate=(name:any,field:any)=>{
    const upiTemp:any = {...upiError}
        if(name==='upi'){
            if(upi.upi===''){
                upiTemp.upi='Please enter your UPI Id'
            }else{
                upiTemp.upi=''
            }
        }
        
        if(name==='gpay'){
            if(upi.gpay===''){
                upiTemp.gpay='Please enter your UPI Id'
            }
        }
        
        if(name==='phonepe'){
            if(upi.phonepe===''){
                upiTemp.phonepe='Please enter your UPI Id'
            }
        }

        if(name==='bhim'){
            if(upi.bhim===''){
                upiTemp.bhim='Please enter your UPI Id'
            }
        }

        if(name==='paytm'){
            if(upi.paytm===''){
                upiTemp.paytm='Please enter your UPI Id'
            }
        }

        if(name==='amazonUpi'){
            if(upi.amazonUpi===''){
                upiTemp.amazonUpi='Please enter your UPI Id'
            }
        }
    setUpiError(upiTemp)
  }

  const handleUpiSubmit = (name:any)=>{
    if(name==='upi'){
        Validate('upi',upi)
        if(upi.upi){
            alert('upi')
            console.log('o');
            
        }
    }
    else if(name==='gpay'){
        Validate('gpay',upi)
        if(upi.gpay){
            alert('gpay')
            console.log('f');
            
        }
    }
    else if(name==='phonepe'){
        Validate('phonepe',upi)
        if(upi.phonepe){
            alert('phonepe')
        }
    }
    else if(name==='bhim'){
        Validate('bhim',upi)
        if(upi.bhim){
            alert('bhim')
        }
    }
    else if(name==='paytm'){
        Validate('paytm',upi)
        if(upi.paytm){
            alert('paytm')
        }
    }
    else if(name==='amazonUpi'){
        Validate('amazonUpi',upi)
        if(upi.amazonUpi){
            alert('amazonUpi')
        }
    }
  }

  const upiReset = ()=>{
    setUpi({
        upi: "",
        gpay: "",
        phonepe: "",
        bhim: "",
        paytm: "",
        amazonUpi: "",
    })
    setUpiError({
        upi: "",
        gpay: "",
        phonepe: "",
        bhim: "",
        paytm: "",
        amazonUpi: "",
    })
  }

  return (
    <div className="payment">
      <div className="payment-options">
        <ul>
          <li onClick={() => {setMethod("upi"),setUpiSelected('')}}>
            UPI
            <div>
              <img className="upi-logo" src={Gpay} />
              <img className="upi-logo" src={Paytm} />
              <img className="upi-logo" src={Phonepe} />
            </div>
          </li>
          <li onClick={() => setMethod("credit-card")}>
            CREDIT CARD
            <div>
              <img className="upi-logo" src={Visa} />
              <img className="upi-logo" src={Master} />
              <img className="upi-logo" src={Rupay} />
            </div>
          </li>
          <li onClick={() => setMethod("debit-card")}>
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
                  <li onClick={() => {setUpiSelected("upi"),upiReset()}}>
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
                      <p className='err'>{upiError.upi}</p>
                      <Button color="success" variant="contained" onClick={()=>handleUpiSubmit('upi')}>
                        pay
                      </Button>
                    </div>
                  </li>
                )}

                {/* Google pay */}
                {upiSelected !== "google-pay" && (
                  <li onClick={() => {setUpiSelected("google-pay"),upiReset()}}>
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
                      <p className='err'>{upiError.gpay}</p>
                      <Button color="success" variant="contained" onClick={()=>handleUpiSubmit('gpay')}>
                        pay
                      </Button>
                    </div>
                  </li>
                )}

                {/* Phonepe */}
                {upiSelected !== "phonepe" && (
                  <li onClick={() => {setUpiSelected("phonepe"),upiReset()}}>
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
                      <p className='err'>{upiError.phonepe}</p>
                      <Button color="success" variant="contained" onClick={()=>handleUpiSubmit('phonepe')}>
                        pay
                      </Button>
                    </div>
                  </li>
                )}

                {/* Bhim */}
                {upiSelected !== "Bhim" && (
                  <li onClick={() => {setUpiSelected("Bhim"),upiReset()}}>
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
                      <p className='err'>{upiError.bhim}</p>
                      <Button color="success" variant="contained" onClick={()=>handleUpiSubmit('bhim')}>
                        pay
                      </Button>
                    </div>
                  </li>
                )}

                {/* Paytm */}
                {upiSelected !== "paytm" && (
                  <li onClick={() => {setUpiSelected("paytm"),upiReset()}}>
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
                      <p className='err'>{upiError.paytm}</p>
                      <Button color="success" variant="contained" onClick={()=>handleUpiSubmit('paytm')}>
                        pay
                      </Button>
                    </div>
                  </li>
                )}

                {/* Amazon pay */}
                {upiSelected !== "amazon-pay" && (
                  <li onClick={() => {setUpiSelected("amazon-pay"),upiReset()}}>
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
                      <p className='err'>{upiError.amazonUpi}</p>
                      <Button color="success" variant="contained" onClick={()=>handleUpiSubmit('amazonUpi')}>
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
            <h1>{method}</h1>
            <div className="cc-card">
              <div className="cc-top">
                <div className="cc-bank">
                  <img src={Axis} />
                  <p style={{ fontSize: "30px" }}>HDFC</p>
                </div>
                <p>Credit</p>
              </div>
              <div className="cc-middle">
                <img src={Wifi} />
                <img src={Evm} />
              </div>
              <div className="cc-end">
                <h2>1234 1234 1323 1234</h2>
              </div>
              <div className="cc-end-detail">
                <div>
                  <p>03/26</p>
                  <p>full name</p>
                </div>
                <div>
                  <img src={Rupay} />
                  {/* <h1><i>RuPay</i></h1> */}
                </div>
              </div>
            </div>
          </div>
        )}

        {method === "debit-card" && (
          <div className="selected">
            <h1>{method}</h1>
          </div>
        )}

        {method === "net-banking" && (
          <div className="selected">
            <h1>{method}</h1>
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
            <h1>{method}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
