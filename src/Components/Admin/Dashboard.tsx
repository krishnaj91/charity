import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserData from "../../Data/userData.json";
import VolunteerData from "../../Data/volunteer.json";
import CallbackData from "../../Data/callback.json";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import "./common.css";
import { textAlign } from "@mui/system";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "10%",
  bottom: "20%",
  left: "25%",
  width: "50%",
  maxHeight: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  textAlign: "center",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardActive, setDashboardActive] = useState("home");
  const [user, setUser] = useState<any>();
  const [volunteer, setVolunteer] = useState<any>();
  const [callback, setCallback] = useState<any>();
  const [kycDetail, setKycDetail] = useState<any>([]);
  const [kycDetailOpen, setKycDetailOpen] = useState<boolean>(false);

  useEffect(() => {
    setUser(UserData);
    setVolunteer(VolunteerData);
    setCallback(CallbackData);
    console.log(kycDetail);
    console.log(kycDetail.length > 0 && kycDetail[0].pan);
  });
  return (
    <>
      <div className="admin-dashboard-container">
        <div className="admin-dashboard-left">
          <ul>
            <li onClick={()=>setDashboardActive('home')} className={dashboardActive==='home'?'admin-dashboard-left-active':''}>HOME</li>
            <li onClick={()=>setDashboardActive('user-data')} className={dashboardActive==='user-data'?'admin-dashboard-left-active':''}>USER DATA</li>
            <li onClick={()=>setDashboardActive('volunteer-data')} className={dashboardActive==='volunteer-data'?'admin-dashboard-left-active':''}>VOLUNTEER DATA</li>
            <li onClick={()=>setDashboardActive('callback')} className={dashboardActive==='callback'?'admin-dashboard-left-active':''}>CALLBACK DATA</li>
            <li onClick={()=>setDashboardActive('charts')} className={dashboardActive==='charts'?'admin-dashboard-left-active':''}>CHARTS</li>
            <li onClick={()=>setDashboardActive('graphs')} className={dashboardActive==='graphs'?'admin-dashboard-left-active':''}>GRAPHS</li>
          </ul>
        </div>
        <div className="admin-dashboard-right">
          {/* home */}
          {dashboardActive==='home' &&(
            <div>
              <h1>welcome admin</h1>
            </div>
          )}
          {/* user data */}
          {dashboardActive === "user-data" && (
            <div>
              <h1 className="text-center">USER DATA</h1>
              <div className="admin-right-center">
                <table className="table">
                  <thead>
                    <tr>
                      <th>s.no</th>
                      <th>name</th>
                      <th>email</th>
                      <th>mobile</th>
                      <th>amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user &&
                      user.map((data: any) => {
                        return (
                          <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td>{data.amount}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* volunteer data */}
          {dashboardActive === "volunteer-data" && (
            <div>
              <h1 className="text-center">VOLUNTEER DATA</h1>
              <div className="admin-right-center">
                <table className="table">
                  <thead>
                    <tr>
                      <th>s.no</th>
                      <th>name</th>
                      {/* <th>email</th> */}
                      <th>mobile</th>
                      <th>city</th>
                      <th>username</th>
                      <th>kyc status</th>
                      <th>kycdetails</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteer &&
                      volunteer.map((data: any) => {
                        return (
                          <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            {/* <td>{data.email}</td> */}
                            <td>{data.mobile}</td>
                            <td>{data.city}</td>
                            <td>{data.username}</td>
                            <td>{data.kycStatus}</td>
                            <td
                              onClick={() => {
                                setKycDetail(data.kyc), setKycDetailOpen(true);
                              }}
                            >
                              <Button>Details</Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* callback data */}
          {dashboardActive === "callback" && (
            <div>
              <h1 className="text-center">USER DATA</h1>
              <div className="admin-right-center">
                <table className="table">
                  <thead>
                    <tr>
                      <th>s.no</th>
                      <th>name</th>
                      <th>email</th>
                      <th>subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {callback &&
                      callback.map((data: any) => {
                        return (
                          <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.subject}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* kyc details */}
      <Modal
        open={kycDetailOpen}
        onClose={() => setKycDetailOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>KYC DETAILS</h1>
          <div>
            {kycDetail.length > 0 && (
              <div>
                <Typography className="kyc-detail-modal">
                  <span>pan number</span>
                  <span>:</span>
                  <span>{kycDetail[0].pan}</span>
                </Typography>
                <Typography className="kyc-detail-modal">
                  <span>aadhar number</span>
                  <span>:</span>
                  <span>{kycDetail[0].aadhar}</span>
                </Typography>
                <Typography className="kyc-detail-modal">
                  <span>dob</span>
                  <span>:</span>
                  <span>{kycDetail[0].dob}</span>
                </Typography>
                <Typography className="kyc-detail-modal">
                  <span>pan-front</span>
                  <span>:</span>
                  <span>
                    <img src={kycDetail[0].panFront} />
                  </span>
                </Typography>
                <Typography className="kyc-detail-modal">
                  <span>pan-back</span>
                  <span>:</span>
                  <span>
                    <img src={kycDetail[0].panBack} />
                  </span>
                </Typography>
                <Typography className="kyc-detail-modal">
                  <span>aadhar-front</span>
                  <span>:</span>
                  <span>
                    <img src={kycDetail[0].aadharFront} />
                  </span>
                </Typography>
                <Typography className="kyc-detail-modal">
                  <span>aadhar-back</span>
                  <span>:</span>
                  <span>
                    <img src={kycDetail[0].aadharBack} />
                  </span>
                </Typography>
                <Typography className="kyc-detail-modal">
                  <span>selfie</span>
                  <span>:</span>
                  <span>
                    <img src={kycDetail[0].selfie} />
                  </span>
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Dashboard;
