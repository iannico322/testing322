import React, { useState } from "react";
import MagkahiosaLogo from "./../../../images/MagkahiOSA-logo.jpg";
import Input from "../../../components/input/input";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import axios from "./../../../lib/main_connection";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });

  const [alert, setAlert] = useState({
    display: false,
    type: "warning",
    text: "",
  });
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="flex flex-wrap justify-center">
        <form onSubmit={async(e)=>{
          
          setAlert({
            display: true,
            type: "info",
            text: "Proccessing...",
          });

          e.preventDefault()
          await axios.post('auth/forgotPassword',data).then(response=>{
            setAlert({
              display: true,
              type: "success",
              text: response.data.message,
            });
            setTimeout(()=>{
              setAlert({
                display: false,
                type: "",
                text: "",
              });
            },2000)
          })

          setTimeout(()=>{
            setAlert({
              display: false,
              type: "",
              text: "",
            });
          },2000)
          
          
          // navigate('/password-reset')
        }} className="flex w-[90%]  flex-col items-center justify-center gap-4">
          <img
            src={MagkahiosaLogo}
            className="h-[60px] object-contain mb-10"
          ></img>
          <p className="text-2xl">RESET YOUR PASSWORD</p>

          <div className={alert.display ? "block animate-pulse" : "hidden"}>
              <Alert severity={alert.type} variant="standard">
                {" "}
                {alert.text}
              </Alert>
            </div>
          <Input
            label="Enter your user account's verified email address and we will send you a password reset link."
            placeholder="Enter Email for Password Recovery"
            type="email"
            value={data.email}
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
            }}
          />
          <button  
          className={
                alert.display
                  ? " min-w-60 bg-[#1D4ED8] hover:bg-[#1139a8] flex items-center justify-center gap-2  text-white mt-0 py-3 px-4 rounded-[4px] font-normal active:bg-[#0338c8] pointer-events-none"
                  : " min-w-60 bg-[#1D4ED8] hover:bg-[#1139a8]  text-white mt-0 py-3 px-4 rounded-[4px] font-normal active:bg-[#0338c8]"
              }
            >
              <span
                className={
                  alert.display
                    ? "material-symbols-outlined  animate-spin  "
                    : "hidden material-symbols-outlined "
                }
              >
                refresh
              </span>
            
            Send password reset email
          </button>
          <p
            className="px-3 py-2 text-sm font-normal rounded-md cursor-pointer hover:bg-gray"
            onClick={() => {
              navigate("/login");
            }}
          >
            Back
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
