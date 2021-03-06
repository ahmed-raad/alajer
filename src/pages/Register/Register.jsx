import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "../../../src/Components/css/Register.css";
import Navbar from "../../Components/NavBar/NavBar";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, []);
  const [FullName, setFullName] = useState("");
  const [Job, setJob] = useState("");
  const [AccountType, setAccountType] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirmation, setPasswordConfirmation] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [City, setCity] = useState("");
  const history = useHistory();

  const options = [
    "بغداد",
    "البصرة",
    "نينوى",
    "أربيل",
    "النجف",
    "ذي قار",
    "كركوك",
    "الأنبار",
    "ديالى",
    "الديوانية",
    "تكريت",
    "ميسان",
    "واسط",
    "السليمانية",
    "بابل",
    "كربلاء",
    "دهوك",
    "المثنى",
  ];

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleJob = (e) => {
    setJob(e.target.value);
  };

  const handleAccountType = (e) => {
    setAccountType(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleregister = () => {
    let body = {
      fullname: FullName,
      job: Job,
      account_type: AccountType,
      email: Email,
      password: Password,
      password_confirmation: PasswordConfirmation,
      city: City,
      phonenumber: PhoneNumber,
    };
    const detail = {
      method: "post",
      responseType: "json",
      url: `http://127.0.0.1:8000/api/register`,
      data: body,
    };
    axios(detail)
      .then((response) => {
        localStorage.setItem("user-info", JSON.stringify(response));
        history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div id="register-wrapper">
        <h1>إنشاء حساب جديد</h1>
        <form id="register-form">
          <div id="register-fields">
            <div className="register-item">
              <label>
                <p>الأسم الكامل:</p>
                <input
                  name="fullname"
                  className="short-input input"
                  type="text"
                  onChange={handleFullName}
                  value={FullName}
                  required
                />
              </label>
              <label>
                <p>العنوان الوظيفي:</p>
                <input
                  name="job"
                  className="short-input input"
                  type="text"
                  onChange={handleJob}
                  value={Job}
                  required
                />
              </label>
            </div>

            <div id="account-type">
              <p>نوع الحساب:</p>
              <span>
                <input
                  type="radio"
                  name="account_type"
                  id="freelance-account"
                  onChange={handleAccountType}
                  value="حساب محترف"
                />
                <label htmlFor="freelance-account">حساب محترف</label>
              </span>

              <span>
                <input
                  type="radio"
                  name="account_type"
                  id="normal-account"
                  value="حساب عادي"
                  onChange={handleAccountType}
                />
                <label htmlFor="normal-account">حساب عادي</label>
              </span>
            </div>

            <div className="register-item">
              <label>
                <p>البريد الالكتروني:</p>
                <input
                  className="long-input input"
                  type="email"
                  onChange={handleEmail}
                  value={Email}
                  required
                />
              </label>
            </div>

            <div className="register-item">
              <label>
                <p>كلمة السر:</p>
                <input
                  name="password"
                  className="short-input input"
                  type="password"
                  onChange={handlePassword}
                  value={Password}
                  required
                />
              </label>
              <label>
                <p>تأكيد كلمة السر:</p>
                <input
                  name="confirm_password"
                  className="short-input input"
                  type="password"
                  onChange={handlePasswordConfirmation}
                  value={PasswordConfirmation}
                  required
                />
              </label>
            </div>
            <div className="register-item">
              <label>
                <p>رقم الهاتف:</p>
                <input
                  name="phonenumber"
                  className="short-input input"
                  type="tel"
                  onChange={handlePhoneNumber}
                  value={PhoneNumber}
                  required
                />
              </label>
              <label>
                <p>السكن:</p>
                <select
                  name="city"
                  className="short-input register-select"
                  onChange={handleCity}
                  value={City}
                >
                  <option value="" disabled selected hidden>
                    اختر المحافظة التي تسكن فيها{" "}
                  </option>

                  {options.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <button
                id="register-button"
                type="button"
                onClick={handleregister}
              >
                إنشاء الحساب
              </button>
            </div>
          </div>

          <div id="register-img-container">
            <img id="register-img" src="images/new-user.jpg" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Register;
