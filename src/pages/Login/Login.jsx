import React, { useState } from "react";
import SignButton from './../../Components/common/SignButton';
import Input from "../../Components/common/Input";
import ButtomLinkList from "../../Components/common/ButtomLinkList"
import userService from "../../services/userService";
import { toast } from 'react-toastify';
import checkLogginIn from './../../utils/checkLogginIn';

function Login() {
  checkLogginIn.redirectToHome();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
    try {
      await userService.login(Email, Password)
      window.location = "/";  // To full reload the application, instead of using naviagte('/) 
    } catch (er) {
      const responseMsg = er.response? er.response.data : er.response;
      toast.error(responseMsg);
    }
  };

  return (
    <React.Fragment>
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
