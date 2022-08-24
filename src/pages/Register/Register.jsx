import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import options from "../../utils/cityOptions";
import config from '../../config.json';
import axios from "axios";

import "../../../src/Components/css/Register.css";
import Navbar from "../../Components/NavBar/NavBar";
import Input from "../../Components/common/Input";
import SelectMenu from './../../Components/common/SelectMenu';
import RadioGroup from "../../Components/common/RadioGroup";
import SignButton from './../../Components/common/SignButton';

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
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

  const handleRegister = (e) => {
    e.preventDefault();
    let body = {
      fullname: FullName,
      job: Job,
      account_type: AccountType,
      email: Email,
      password: Password,
      city: City,
      phonenumber: PhoneNumber,
    };

    console.log(body);
    const detail = {
      method: "post",
      responseType: "json",
      url: config.apiUrl,
      data: body,
    };
    axios(detail)
      .then((response) => {
        localStorage.setItem("user-info", JSON.stringify(response));
        navigate("/");
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
            <div className="sign-item">

              <Input
                inputName="fullname"
                inputValue={FullName}
                inputLabel="الأسم الكامل:"
                inputClass="short-input input"
                onChange={handleFullName}
              />

              <Input
                inputName="job"
                inputValue={Job}
                inputLabel="العنوان الوظيفي:"
                inputClass="short-input input"
                onChange={handleJob}
              />

            </div>

            <div className="account-type">
              <RadioGroup
                groupLabel="نوع الحساب:"
                groupName="account_type"
                choices={["حساب محترف", "حساب عادي"] }
                onChange={handleAccountType}
              />
            </div>

            <div className="sign-item">

              <Input
                inputName="email"
                inputValue={Email}
                inputLabel="البريد الالكتروني:"
                inputClass="long-input input"
                inputType="email"
                onChange={handleEmail}
              />

            </div>

            <div className="sign-item">

              <Input
                inputName="password"
                inputValue={Password}
                inputLabel="كلمة السر:"
                inputClass="short-input input"
                inputType="password"
                onChange={handlePassword}
              />

              <Input
                inputName="confirm_password"
                inputValue={PasswordConfirmation}
                inputLabel="تأكيد كلمة السر:"
                inputClass="short-input input"
                inputType="password"
                onChange={handlePasswordConfirmation}
              />

            </div>
            
            <div className="sign-item">

              <Input
                inputName="phonenumber"
                inputValue={PhoneNumber}
                inputLabel="رقم الهاتف:"
                inputClass="short-input input"
                inputType="tel"
                onChange={handlePhoneNumber}
              />
            
              <SelectMenu
                selectName="city"
                selectValue={City}
                selectLabel="السكن:"
                selectClass="short-input register-select"
                firstOption="اختر المحافظة التي تسكن فيها"
                options={options}
                onChange={handleCity}
              />

            </div>

            <div>
              <SignButton 
                btnLabel="إنشاء الحساب"
                onClick={handleRegister}
              />
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
