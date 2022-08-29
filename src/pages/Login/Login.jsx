import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignButton from './../../Components/common/SignButton';
import NavBar from "../../Components/NavBar/NavBar";
import Input from "../../Components/common/Input";
import ButtomLinkList from "../../Components/common/ButtomLinkList"
import httpService from "../../services/httpService";
import config from '../../config.json';
import { toast } from 'react-toastify';
import checkLogginIn from './../../utils/checkLogginIn';

function Login() {
  checkLogginIn.redirectToHome();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    let body = {
      email: Email,
      password: Password,
    };
    
    let response;

    try {
      response = await httpService.post(`${config.apiUrl}/login`, body);
      localStorage.setItem("user-info", JSON.stringify(response));
      navigate("/");
    } catch (er) {
      const responseMsg = er.response? er.response.data : er.response;
      toast.error(responseMsg);
    }
    
  };
  return (
    <React.Fragment>
      <NavBar />
      <div className="sign-wrapper">
        <h1>تسجيل الدخول</h1>
        <form className="sign-form">
          <div>

            <div className="sign-item">
              <Input
                inputName="email"
                inputValue={Email}
                inputType="email"
                inputLabel="البريد الالكتروني:"
                inputClass="long-input input"
                onChange={handleEmail}
              />
            </div>

            <div className="sign-item">
              <Input
                inputName="password"
                inputValue={Password}
                inputType="password"
                inputLabel="كلمة السر:"
                inputClass="long-input input"
                onChange={handlePassword}
              />
            </div>

            <div>
              <SignButton
                btnLabel="تسجيل الدخول"
                onClick={handleLogin}
              />
            </div>

            <ButtomLinkList
              links = {[ 
                {path: "/forget-password", label: "نسيت كلمة المرور؟"},
                {path: "/register", label: "إنشاء حساب"},
              ]}
            />

          </div>

          <div className="sign-img-container">
            <img className="sign-img" src="images/login.jpg" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
