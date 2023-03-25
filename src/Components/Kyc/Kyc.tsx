import React, { useEffect, useState } from "react";
import "./kyc.css";
import Demo from "../../assets/bg.jpg";
import { Button } from "@mui/material";
import Panfront from "../../assets/kyc/panfront.jpg";
import Panback from "../../assets/kyc/panback.jpg";
import Aadharfront from "../../assets/kyc/aadharfront.jpg";
import Aadharback from "../../assets/kyc/aadharback.jpg";
import Selfie from "../../assets/kyc/selfie.jpg";

const Kyc = () => {
  const name=localStorage.getItem('v-name')
  const [step, setStep] = useState("congo");
  const [panFront, setPanFront] = useState<any>("");
  const [panBack, setPanBack] = useState<any>("");
  const [aadharFront, setAadharFront] = useState<any>("");
  const [aadharBack, setAadharBack] = useState<any>("");
  const [selfie, setSelfie] = useState<any>("");
  const [kycStatus,setKycStatus] = useState({
    pan:'',
    aadhar:'',
    selfie:''
  })
  const[uploadError,setUploadError]=useState({
    panFront:'',
    panBack:'',
    aadharFront:'',
    aadharBack:'',
    selfie:''
  })
  const[id,setId]=useState({
    username:'',
    password:''
  })
  const[idError,setIdError]=useState({
    username:'',
    password:''
  })

  const handleIdChange=(name:any,value:any)=>{
    setId((preValue:any)=>({...preValue,[name]:value}))
    setIdError((preValue)=>({...preValue,[name]:''}))
  }

  const validateId=()=>{
    const temjObj={...idError}
    if(id.username===''){
      temjObj.username='Please enter your Username'
    }else{
      temjObj.username=''
    }
    if(id.password===''){
      temjObj.password='Please enter your Password'
    }else{
      temjObj.password=''
    }
    setIdError(temjObj)
  }

  const handleIdSubmit=()=>{
    validateId();
    if(id.username&&id.password){
    localStorage.setItem('username',id.username)
    localStorage.setItem('password',id.password)
    }
  }

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

  const handleSubmit = (name: any) => {
    const tempObj={...uploadError}
    const tempStatus={...kycStatus}
    // pan
    if (name === "pan-front") {
      if (panFront) {
        setStep("panBack");
        tempObj.panFront=""
      }else{
        tempObj.panFront="Please upload image"
      }
    } 
    else if (name === "pan-back") {
      if (panBack) {
        setStep("panFrontPreview");
        tempObj.panBack=""
      }else{
        tempObj.panBack="Please upload image"
      }
    } 
    else if (name === "pan-front-preview") {
      setStep("panBackPreview");
    } 
    else if (name === "pan-back-preview") {
      setStep("aadharFront");
      tempStatus.pan='completed'
    } 
    // aadhar
    else if (name === "aadhar-front") {
      if (aadharFront) {
        setStep("aadharBack");
        tempObj.aadharFront=""
      }else{
        tempObj.aadharFront="Please upload image"
      }
    } 
    else if (name === "aadhar-back") {
      if (aadharBack) {
        setStep("aadharFrontPreview");
        tempObj.aadharBack=""
      }else{
        tempObj.aadharBack="Please upload image"
      }
    } 
    else if (name === "aadhar-front-preview") {
      setStep("aadharBackPreview");
    } 
    else if (name === "aadhar-back-preview") {
      setStep("selfie");
      tempStatus.aadhar='completed'
    } 
    // selfie
    else if (name === "selfie") {
      if (selfie) {
        setStep("congo");
        tempObj.selfie=""
        tempStatus.selfie='completed'
      }else{
        tempObj.selfie="Please upload image"
      }
    }
    setUploadError(tempObj)
    setKycStatus(tempStatus)
  };
  return (
    <center>
      <div className="kyc-container">
        <div className="kyc-header">
          <p className={step==='panFront'||step==='panBack'||step==='panFrontPreview'||step==='panBackPreview' ? "kyc-header-active":''} onClick={() => setStep("panFront")}>pan</p>
          <p className={step==='aadharFront'||step==='aadharBack'||step==='aadharFrontPreview'||step==='aadharBackPreview' ? "kyc-header-active":''} onClick={() => {kycStatus.pan==='completed' && setStep("aadharFront")}}>aadhar</p>
          <p className={step==='selfie' ? "kyc-header-active":''} onClick={() => {kycStatus.pan==='completed' && kycStatus.aadhar==='completed' && setStep("selfie")}}>selfie</p>
        </div>

        {step === "panFront" && (
          <div className="kyc-body-container">
            <h1>Pan Front</h1>
            <div className="kyc-body">
              <img src={panFront ? panFront : Panfront} />
            </div>
            <input type="file" onChange={(e) => uploadPanFront(e)} />
            <p className="err">{uploadError.panFront}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("pan-front")}
            >
              submit
            </Button>
          </div>
        )}

        {step === "panBack" && (
          <div className="kyc-body-container">
            <h1>Pan Back</h1>
            <div className="kyc-body">
              <img src={panBack ? panBack : Panback} />
            </div>
            <input type="file" onChange={(e) => uploadPanBack(e)} />
            <p className="err">{uploadError.panBack}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("pan-back")}
            >
              submit
            </Button>
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
                Retake
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("pan-front-preview")}
              >
                Submit
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
                Retake
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("pan-back-preview")}
              >
                Submit
              </Button>
            </div>
          </div>
        )}

        {step === "aadharFront" && (
          <div className="kyc-body-container">
            <h1>Aadhar Front</h1>
            <div className="kyc-body">
              <img src={aadharFront ? aadharFront : Aadharfront} />
            </div>
            <input type="file" onChange={(e) => uploadAadharFront(e)} />
            <p className="err">{uploadError.aadharFront}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("aadhar-front")}
            >
              submit
            </Button>
          </div>
        )}

        {step === "aadharBack" && (
          <div className="kyc-body-container">
            <h1>Aadhar Back</h1>
            <div className="kyc-body">
              <img src={aadharBack ? aadharBack : Aadharback} />
            </div>
            <input type="file" onChange={(e) => uploadAadharBack(e)} />
            <p className="err">{uploadError.aadharBack}</p>
            <Button
              variant="contained"
              onClick={() => handleSubmit("aadhar-back")}
            >
              submit
            </Button>
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
                Retake
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("aadhar-front-preview")}
              >
                Submit
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
                Retake
              </Button>
              <Button
                variant="contained"
                onClick={() => handleSubmit("aadhar-back-preview")}
              >
                Submit
              </Button>
            </div>
          </div>
        )}

        {step === "selfie" && (
          <div className="kyc-body-container">
            <h1>selfie </h1>
            <div className="kyc-body">
              <img style={{ width: "40%" }} src={selfie?selfie: Selfie} />
            </div>
            <input
              type="file"
              onChange={(e) => uploadSelfie(e)}
            />
            <p className="err">{uploadError.selfie}</p>
            <Button variant="contained" onClick={() => handleSubmit("selfie")}>
              submit
            </Button>
          </div>
        )}

          {step === "congo" && (<>
            <h1 className="id-title">congralstions {name} your registration is successful</h1>
            <h1 className="id-title">create your username and password,for login</h1>
          <div className="kyc-id">
            <input type='text' placeholder="username" value={id.username} onChange={(e)=>handleIdChange('username',e.target.value)}/>
            <p>min 5 characters</p>
            <span>{idError.username}</span><br/><br/>
            <input type='password' placeholder="password" value={id.password} onChange={(e)=>handleIdChange('password',e.target.value)}/>
            <p>min 8 characters</p>
            <span>{idError.password}</span><br/><br/>
            <Button onClick={handleIdSubmit} variant='contained'>submit</Button>
          </div>
        </>)}
      </div>
    </center>
  );
};

export default Kyc;
