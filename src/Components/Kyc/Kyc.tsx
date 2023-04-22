import React, { useEffect, useState } from "react";
import "./kyc.css";
import Demo from "../../assets/bg.jpg";
import { Button } from "@mui/material";
import Panfront from "../../assets/kyc/panfront.jpg";
import Panback from "../../assets/kyc/panback.jpg";
import Aadharfront from "../../assets/kyc/aadharfront.jpg";
import Aadharback from "../../assets/kyc/aadharback.jpg";
import Sample from "../../assets/kyc/sample.jpg";
import Selfie from "../../assets/kyc/selfie.jpg";
import { useNavigate } from "react-router-dom";

const Kyc = () => {
  const name = localStorage.getItem("v-name");
  const navigate=useNavigate()
  const [step, setStep] = useState("pan");
  const [pan, setPan] = useState({
    pan: "",
    dob: "",
  });
  const [panError, setPanError] = useState({
    pan: "",
    dob: "",
  });
  const [aadhar, setAadhar] = useState("");
  const [aadharError, setAadharError] = useState("");
  const [panFront, setPanFront] = useState<any>("");
  const [panBack, setPanBack] = useState<any>("");
  const [aadharFront, setAadharFront] = useState<any>("");
  const [aadharBack, setAadharBack] = useState<any>("");
  const [selfie, setSelfie] = useState<any>("");
  const [header, setHeader] = useState({
    pan: true,
    aadhar: false,
    selfie: false,
  });
  const [kycStatus, setKycStatus] = useState({
    pan: "",
    aadhar: "",
    selfie: "",
  });
  const [uploadError, setUploadError] = useState({
    panFront: "",
    panBack: "",
    aadharFront: "",
    aadharBack: "",
    selfie: "",
  });
  const [id, setId] = useState({
    username: "",
    password: "",
  });
  const [idError, setIdError] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (step === "pan") {
      setHeader({ pan: true, aadhar: false, selfie: false });
    }
    if (step === "aadhar") {
      setHeader({ pan: false, aadhar: true, selfie: false });
    }
    if (step === "selfie") {
      setHeader({ pan: false, aadhar: false, selfie: true });
    }
  });

  const handlePanChange = (name: any, value: any) => {
    setPan((preValue) => ({ ...preValue, [name]: value }));
    setPanError((preValue) => ({ ...preValue, [name]: "" }));
  };

  //    -------base 64---------- another method
  // const handlePhotochange=(e:any)=>{
  //   const file=e.target.files[0];
  //   const reader=new FileReader();
  //   reader.onloadend=()=>{
  //     setPanFront(reader.result?.toString())
  //   }
  //   reader.readAsDataURL(file)
  // }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadPanFront = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPanFront(base64);
  };

  const uploadPanBack = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPanBack(base64);
  };

  const uploadAadharFront = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setAadharFront(base64);
  };

  const uploadAadharBack = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setAadharBack(base64);
  };

  const uploadSelfie = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSelfie(base64);
  };

  const validate = (name: any) => {
    if (name === "pan") {
      const tempPan = { ...panError };
      const regex: any = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
      if (pan.pan === "") {
        tempPan.pan = "Please Enter Your Pan Number";
      } else if (!regex.test(pan.pan)) {
        tempPan.pan = "Invalid Pan Number";
      } else {
        setStep("panFront");
      }
      if (pan.dob === "") {
        tempPan.dob = "Please Enter Your DOB";
      } else {
        tempPan.dob = "";
      }
      setPanError(tempPan);
    } else if (name === "aadhar") {
      const regex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
      if (aadhar === "") {
        setAadharError("Please Enter Your Aadhar Number");
      } else if (!regex.test(aadhar)) {
        setAadharError("Invalid Aadhar Number");
      } else {
        setAadharError("");
      }
    }
  };

  const handleSubmit = (name: any) => {
    const tempObj = { ...uploadError };
    // const tempAadhar = {...aadharError}
    const tempStatus = { ...kycStatus };
    // pan
    if (name === "pan") {
      validate("pan");
      const regex: any = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}$/;
      if (regex.test(pan.pan) && pan.dob) {
        setStep("panFront");
      }
    } else if (name === "pan-front") {
      if (panFront) {
        setStep("panBack");
        tempObj.panFront = "";
      } else {
        tempObj.panFront = "Please upload image";
      }
    } else if (name === "pan-back") {
      if (panBack) {
        setStep("panFrontPreview");
        tempObj.panBack = "";
      } else {
        tempObj.panBack = "Please upload image";
      }
    } else if (name === "pan-front-preview") {
      setStep("panBackPreview");
    } else if (name === "pan-back-preview") {
      setStep("aadhar");
      tempStatus.pan = "completed";
    }
    // aadhar
    else if (name === "aadhar") {
      const regex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
      validate("aadhar");
      if (regex.test(aadhar)) {
        setStep("aadharFront");
      }
    } else if (name === "aadhar-front") {
      if (aadharFront) {
        setStep("aadharBack");
        tempObj.aadharFront = "";
      } else {
        tempObj.aadharFront = "Please upload image";
      }
    } else if (name === "aadhar-back") {
      if (aadharBack) {
        setStep("aadharFrontPreview");
        tempObj.aadharBack = "";
      } else {
        tempObj.aadharBack = "Please upload image";
      }
    } else if (name === "aadhar-front-preview") {
      setStep("aadharBackPreview");
    } else if (name === "aadhar-back-preview") {
      setStep("selfie");
      tempStatus.aadhar = "completed";
    }
    // selfie
    else if (name === "selfie") {
      if (selfie) {
        setStep("congo");
        tempObj.selfie = "";
        tempStatus.selfie = "completed";
      } else {
        tempObj.selfie = "Please upload image";
      }
    }
    setUploadError(tempObj);
    setKycStatus(tempStatus);
  };

  const handleIdChange = (name: any, value: any) => {
    setId((preValue: any) => ({ ...preValue, [name]: value }));
    setIdError((preValue) => ({ ...preValue, [name]: "" }));
  };

  const validateId = () => {
    const temjObj = { ...idError };
    if (id.username === "") {
      temjObj.username = "Please enter your Username";
    } 
    else if(id.username.length<5){
      temjObj.username = "Invalid Username";
    }else {
      temjObj.username = "";
    }
    if (id.password === "") {
      temjObj.password = "Please enter your Password";
    } 
    else if(id.password.length<8){
      temjObj.password = "Invalid Password";
    }else {
      temjObj.password = "";
    }
    setIdError(temjObj);
  };

  const handleIdSubmit = () => {
    validateId();
    if (id.username.length>5 && id.password.length>8) {
      localStorage.setItem("username", id.username);
      localStorage.setItem("password", id.password);
      navigate('/login')
    }
  };

  return (
    <center>
      <div className="kyc-header">
        <p
          className={header.pan === true ? "kyc-header-active" : ""}
          onClick={() => {
            setHeader({ pan: true, aadhar: false, selfie: false }),
              setStep("pan");
          }}
        >
          PAN
        </p>
        <p
          className={header.aadhar === true ? "kyc-header-active" : ""}
          onClick={() => {
            setHeader({ pan: false, aadhar: true, selfie: false }),
              setStep("aadhar");
          }}
        >
          AADHAR
        </p>
        <p
          className={header.selfie === true ? "kyc-header-active" : ""}
          onClick={() => {
            setHeader({ pan: false, aadhar: false, selfie: true }),
              setStep("selfie");
          }}
        >
          SELFIE
        </p>
      </div>
      <div className="kyc-container">

        {step === "pan" && (
          <div className="kyc-body-container form">
            <h1>Enter your Pan Card Details</h1>
            <input
              type="text"
              value={pan.pan}
              placeholder="Enter your pan number"
              onChange={(e) =>
                handlePanChange("pan", e.target.value.toString().slice(0, 10))
              }
            />
            <p className="err">{panError.pan}</p>
            <input
              type="date"
              value={pan.dob}
              onChange={(e) => handlePanChange("dob", e.target.value)}
            />
            <p className="err">{panError.dob}</p>
            <Button variant="contained" onClick={() => handleSubmit("pan")}>
              SUBMIT
            </Button>
            <p className="auto" onClick={()=>setPan({pan:'ffdit5549h',dob:'20/11/1995'})}>Auto fill</p>
            <p style={{textAlign:"left"}}><a href="#" onClick={()=>setStep('congo')}>Skip For Now</a></p>
          </div>
        )}

        {step === "panFront" && (
          <div className="kyc-body-container">
            <h1>Upload Pan Front</h1>
            <div className="kyc-body">
              <img src={panFront ? panFront : Panfront} />
            </div>
            <input type="file" onChange={(e) => uploadPanFront(e)} />
            <p className="err">{uploadError.panFront}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("pan-front")}
            >
              CONTINUE
            </Button>
            <p className="auto" onClick={()=>setPanFront(Sample)}>Auto fill</p>
          </div>
        )}

        {step === "panBack" && (
          <div className="kyc-body-container">
            <h1>Upload Pan Back</h1>
            <div className="kyc-body">
              <img src={panBack ? panBack : Panback} />
            </div>
            <input type="file" onChange={(e) => uploadPanBack(e)} />
            <p className="err">{uploadError.panBack}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("pan-back")}
            >
              CONTINUE
            </Button>
            <p className="auto" onClick={()=>setPanBack(Sample)}>Auto fill</p>
          </div>
        )}

        {step === "panFrontPreview" && (
          <div className="kyc-body-container">
            <h1>pan Front Preview</h1>
            <div className="kyc-body">
              <img src={panFront} />
            </div>
            <div className="kyc-preview-btn">
              <Button variant="outlined" onClick={() => setStep("panFront")}>
                RETAKE
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("pan-front-preview")}
              >
                SUBMIT PHOTO
              </Button>
            </div>
          </div>
        )}

        {step === "panBackPreview" && (
          <div className="kyc-body-container">
            <h1>pan Back Preview</h1>
            <div className="kyc-body">
              <img src={panBack} />
            </div>
            <div className="kyc-preview-btn">
              <Button variant="outlined" onClick={() => setStep("panBack")}>
                RETAKE
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("pan-back-preview")}
              >
                SUBMIT PHOTO
              </Button>
            </div>
          </div>
        )}

        {step === "aadhar" && (
          <div className="kyc-body-container form">
            <h1>Enter your Aadhar Card Details</h1>
            <input
              type="text"
              value={aadhar}
              placeholder="Enter your Aadhar number"
              onChange={(e) => {setAadhar(e.target.value),setAadharError('')}}
            />
            <p className="err">{aadharError}</p>
            <Button variant="contained" onClick={() => handleSubmit("aadhar")}>
              SUBMIT
            </Button>
            <p className="auto" onClick={()=>setAadhar("9485 7345 6723")}>Auto fill</p>
          </div>
        )}

        {step === "aadharFront" && (
          <div className="kyc-body-container">
            <h1>Upload Aadhar Front</h1>
            <div className="kyc-body">
              <img src={aadharFront ? aadharFront : Aadharfront} />
            </div>
            <input type="file" onChange={(e) => uploadAadharFront(e)} />
            <p className="err">{uploadError.aadharFront}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("aadhar-front")}
            >
              CONTINUE
            </Button>
            <p className="auto" onClick={()=>setAadharFront(Sample)}>Auto fill</p>
          </div>
        )}

        {step === "aadharBack" && (
          <div className="kyc-body-container">
            <h1>Upload Aadhar Back</h1>
            <div className="kyc-body">
              <img src={aadharBack ? aadharBack : Aadharback} />
            </div>
            <input type="file" onChange={(e) => uploadAadharBack(e)} />
            <p className="err">{uploadError.aadharBack}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("aadhar-back")}
            >
              CONTINUE
            </Button>
            <p className="auto" onClick={()=>setAadharBack(Sample)}>Auto fill</p>
          </div>
        )}

        {step === "aadharFrontPreview" && (
          <div className="kyc-body-container">
            <h1>Aadhar Front Preview</h1>
            <div className="kyc-body">
              <img src={aadharFront} />
            </div>
            <div className="kyc-preview-btn">
              <Button variant="outlined" onClick={() => setStep("aadharFront")}>
                RETAKE
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("aadhar-front-preview")}
              >
                SUBMIT PHOTO
              </Button>
            </div>
          </div>
        )}

        {step === "aadharBackPreview" && (
          <div className="kyc-body-container">
            <h1>Aadhar Back Preview</h1>
            <div className="kyc-body">
              <img src={aadharBack} />
            </div>
            <div className="kyc-preview-btn">
              <Button variant="outlined" onClick={() => setStep("aadharBack")}>
                RETAKE
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("aadhar-back-preview")}
              >
                SUBMIT PHOTO
              </Button>
            </div>
          </div>
        )}

        {step === "selfie" && (
          <div className="kyc-body-container">
            <h1>Upload Selfie </h1>
            <div className="kyc-body">
              <img style={{ width: "40%" }} src={selfie ? selfie : Selfie} />
            </div>
            <input type="file" onChange={(e) => uploadSelfie(e)} />
            <p className="err">{uploadError.selfie}</p>
            <Button variant="contained" onClick={() => handleSubmit("selfie")}>
              SUBMIT PHOTO
            </Button>
            <p className="auto" onClick={()=>setSelfie(Sample)}>Auto fill</p>
          </div>
        )}

        {step === "congo" && (
          <>
            <h1 className="id-title">
              congralstions {name} your registration is successful
            </h1>
            <h1 className="id-title">
              create your username and password,for login
            </h1>
            <div className="kyc-id">
              <input
                type="text"
                placeholder="username"
                value={id.username}
                onChange={(e) => handleIdChange("username", e.target.value.toString().slice(0,10))}
              />
              <p className="id-info">min 5 characters</p>
              <p className='err'>{idError.username}</p>
              <input
                type="password"
                placeholder="password"
                value={id.password}
                onChange={(e) => handleIdChange("password", e.target.value.toString().slice(0,10))}
              />
              <p className="id-info">min 8 characters</p>
              <p className="err">{idError.password}</p>
              <Button onClick={handleIdSubmit} variant="contained">
                SUBMIT
              </Button>
              <p className="auto" onClick={()=>{setId({username:'sample12',password:'sample@12'}),setIdError({username:'',password:''})}}>Auto Fill</p>
            </div>
          </>
        )}
      </div>
    </center>
  );
};

export default Kyc;
