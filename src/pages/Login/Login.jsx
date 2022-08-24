import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../src/Components/css/Login.css";
import SignButton from './../../Components/common/SignButton';
import NavBar from "../../Components/NavBar/NavBar"
import Input from "../../Components/common/Input";;

function Login() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // let body = {
    //   email: Email,
    //   password: Password,
    // };
    // const detail = {
    //   method: "post",
    //   responseType: "json",
    //   url: `http://127.0.0.1:8000/api/login`,
    //   data: body,
    // };
    // axios(detail)
    //   .then((response) => {
    //     localStorage.setItem("user-info", JSON.stringify(response));
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
    console.log('Logged in!')
  };
  return (
    <React.Fragment>
      <NavBar />
      <div id="login-wrapper">
        <h1>تسجيل الدخول</h1>
        <form id="login-form">
          <div id="login-fields">

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
            <div id="bottom-links">
              <ul>
                <li>
                  <NavLink className="bottom-link" to="/forget-password">
                    نسيت كلمة المرور؟
                  </NavLink>
                </li>
                <li>
                  <NavLink className="bottom-link" to="/register">
                    إنشاء حساب
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div id="login-img-container">
            <img id="login-img" src="images/login.jpg" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
