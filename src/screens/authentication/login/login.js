import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";


import axios from "./../../../lib/main_connection";

import Input from "../../../components/input/input";
import backgroundImage from "./../../../images/Background.png";
import magkahiosaLogo from "./../../../images/MagkahiOSA-logo.jpg";

import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import jwt_decode from "jwt-decode";
import { useAuthUser } from "react-auth-kit";


const LoginPage = () => {
  // const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate();

  const signIn = useSignIn();

  const userState = useAuthUser();
  const [text,settext] = useState()

  const [data, setData] = useState({
    email: "",
    password: "",
  });
 

  const [alert, setAlert] = useState({
    display: false,
    type: "warning",
    text: "",
  });

  // useEffect(() => {
  //   if (userState()) {
  //     navigate('/user/dashboard');
  //   }
  // })


  return (
    <div className="flex justify-center w-screen h-screen overflow-hidden">
      <img
        src={backgroundImage}
        alt="BackgroundImage"
        className=" h-screen w-[45%] object-cover md:hidden"
      />
      <div className="flex w-[60%] h-screen justify-center items-center ">
        <div className="flex flex-col h-[500px] max-w-[520px] w-[80%] md:w-[90%]">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              axios.post('auth/login',data).then(response=>{
                console.table(response.data)
                settext(response.data.message)
              })
            //   setAlert({
            //     display: true,
            //     type: "info",
            //     text: "Processing, Please wait...",
            //   });

            //   await axios
            //     .post(`auth/login`, data)
            //     .then((response) => {
            //       try {
            //         const token = response.data.data;
                  
            //           setAlert({
            //             display: true,
            //             type: response.data.status==="fail"? "error": "success",
            //             text: response.data.status==="fail"? "Invalid Credentials": response.data.message,
            //           });
                    

                    
            //         localStorage.setItem('token',response.data.data)

 
                    
            //         axios.get(`users/getUser/`,{
            //           headers: {
            //             Authorization: `Token ${token}`,
            //           },
            //         }).then(response=>{

                      
            //           localStorage.setItem('name',response.data.name)
            //           localStorage.setItem('email',response.data.email)

                    
            //           const decoded = jwt_decode(token);
                      
            //           signIn({
            //             token:token,
            //             expiresIn: decoded.exp,
            //             tokenType: "Bearer",
            //             authState: decoded,
            //           });
            //           console.table(userState())
            //         })
                    
            //          //Show success alert when api is reachable
                    
            //         // navigate('/admin/dashboard');
            //       } catch (e) {
            //          //Show error alert when payload is invalid
            //         setAlert({
            //           display: true,
            //           type: "error",
            //           text: response.data.message,
            //         });
            //       }
            //     }).catch(e=>{
            //         //Show alert when api is not reachable
            //         setAlert({
            //           display: true,
            //           type: "error",
            //           text: "Invalid Credentials",
            //         })

            //       setTimeout(() => {
            //         setAlert({
            //           display: false,
            //           type: "error",
            //           text: "",
            //         });
            //       }, 3000);
            //     });

            //   // reset the warning if it has reponse or not reponse
            //   setTimeout(() => {
            //     setAlert({
            //       display: false,
            //       type: "error",
            //       text: "",
            //     });
            //   }, 3000);
            // }}
            }}
            className="flex flex-col w-full"
          >
            <div className="flex justify-center w-full h-[50px] mb-[40px]">
              <img
                src={magkahiosaLogo}
                alt="Magkahiosa-Logo"
                className="h-full w-[250px] object-contain"
              />
            </div>
            <p className="self-start mt-8 mb-5 text-xl font-bold">
              {text}
            </p>

            <div className={alert.display ? "block animate-pulse" : "hidden"}>
              <Alert severity={alert.type} variant="standard">
                {" "}
                {alert.text}
              </Alert>
            </div>

            <div className="w-full my-2">
              <Input
                label="Email Address"
                placeholder="Email"
                type="email"
                value={data.email}
                onChange={(event) => {
                   
                  setData({ ...data, email: event.target.value });
                }}
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value={data.password}
                onChange={(event) => {
                  setData({ ...data, password: event.target.value });
                }}
              />
            </div>
            <button
              className={
                alert.display
                  ? " flex items-center justify-center gap-3 w-full bg-[#1D4ED8] text-white mt-10 py-[10px] px-4 rounded-[4px] font-normal active:bg-[#0338c8] pointer-events-none"
                  : " flex items-center justify-center gap-3 w-full bg-[#1D4ED8] text-white mt-10 py-[10px] px-4 rounded-[4px] font-normal active:bg-[#0338c8]"
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
              Login
            </button>

            <div className="mt-16 leading-3">
              <p
                className="text-xs font-normal hover:text-[#4472fc] cursor-pointer  w-[200px] "
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot your password?
              </p>
              <p className="text-xs font-normal">Contact your administrator</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
