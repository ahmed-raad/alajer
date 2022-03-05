import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import "../../../src/Components/css/Login.css";
import axios from "axios";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    let body = {
      email: Email,
      password: Password,
    };
    const detail = {
      method: "post",
      responseType: "json",
      url: `https://alajer.herokuapp.com/api/login`,
      data: body,
    };
    axios(detail)
      .then((response) => {
        console.log(response);
        localStorage.setItem("user-info", JSON.stringify(response));
        history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <React.Fragment>
      <NavBar />
      <div id="login-wrapper">
        <h1>تسجيل الدخول</h1>
        <form id="login-form">
          <div id="login-fields">
            <div className="login-item">
              <label>
                <p>البريد الالكتروني:</p>
                <input
                  type="email"
                  onChange={handleEmail}
                  value={Email}
                  required
                />
              </label>
            </div>

            <div className="login-item">
              <label>
                <p>كلمة السر:</p>
                <input
                  type="password"
                  onChange={handlePassword}
                  value={Password}
                  required
                />
              </label>
            </div>
            <div>
              <button id="login-button" type="button" onClick={handleLogin}>
                تسجيل الدخول
              </button>
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
