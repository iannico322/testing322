import React, { useEffect, useState } from "react";
import MagkahiosaLogo from "./../../../images/MagkahiOSA-logo.jpg";
import Input from "../../../components/input/input";
import { Form, useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    password: "",
    confirmpass: "",
  });

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  useEffect(() => {
    if (!regex.test(data.password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one letter and one number, and may only contain letters and numbers."
      );
      setValid(false);
    } else {
      setError("");
    }

    if (data.password !== data.confirmpass) {
      setError2("password not matched");
      setValid(false);
    } else {
      setError2("");
      setValid(true);
    }

    if (data.password == "") {
      setError("");
    }
  }, [data]);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="flex flex-wrap justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (valid) {
              navigate("/login");
            }
          }}
          className="flex w-[90%] max-w-md  flex-col items-center justify-center gap-4"
        >
          <img
            src={MagkahiosaLogo}
            className="h-[60px] object-contain mb-10"
          ></img>

          <p className="text-2xl">CREATE NEW PASSWORD</p>
          <Input
            label="Enter your user account's new password and please repeat for confirmation."
            placeholder="Enter New Password"
            type="password"
            value={data.password}
            warning={error}
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
          />
          <Input
            placeholder="Confirm New Password Created"
            type="password"
            warning={error2}
            value={data.confirmpass}
            onChange={(event) => {
              setData({ ...data, confirmpass: event.target.value });
            }}
          />
          <button className="w-100 bg-[#1D4ED8] hover:bg-[#1139a8]  text-white mt-0 py-2 px-4 rounded-[4px] font-normal active:bg-[#0338c8]">
            Confirm Password Reset
          </button>
          <p
            className="px-3 py-2 text-sm font-normal rounded-md cursor-pointer hover:bg-gray"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Back
          </p>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
