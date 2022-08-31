import React, { useState, useEffect } from "react";
import Input from "../../Components/common/Input";
import SelectMenu from './../../Components/common/SelectMenu';
import SignButton from './../../Components/common/SignButton';

import { NavLink } from "react-router-dom";
import options from "../../utils/cityOptions";
import checkLogginIn from './../../utils/checkLogginIn';
import { toast } from 'react-toastify';
import userService from "../../services/userService";

 
function UserProfile() {
  checkLogginIn.redirectToLogin();
  const userInfo = JSON.parse(localStorage.getItem("user-info")); 
  const { user, accessToken } = userInfo ? userInfo: {user: {}, accessToken: ""};

  const [FullName, setFullName] = useState(user? user.fullname: null);
  const [Job, setJob] = useState(user? user.job: null);
  const [Email, setEmail] = useState(user? user.email: null);
  const [PhoneNumber, setPhoneNumber] = useState(user? user.phonenumber: null);
  const [City, setCity] = useState(user? user.city: null);

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleJob = (e) => {
    setJob(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleChange = async (e) => {
    e.preventDefault()
    let body = {
      id: user.id,
      fullname: FullName,
      job: Job,
      email: Email,
      city: City,
      phonenumber: PhoneNumber,
    };

    try {
      await userService.user_update(body, accessToken);
      window.location = "/user";
      
    } catch (er) {
      const responseMsg = er.response? er.response : er.response;
      toast.error(responseMsg);
    }
  };


  return (
    <React.Fragment>
      <div id="user-wrapper">
        <h1>صفحة المستخدم</h1>

        <div id="user-description">
          <div className="user-img">
            <div>
              <img
                src='images/avatar.png'
                alt="صورة المستخدم"
              />
            </div>
          </div>
          <form id="user-form">
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
                selectClass="short-input select"
                firstOption="اختر المحافظة التي تسكن فيها"
                options={options}
                onChange={handleCity}
              />
            </div>

            <div>
              <SignButton 
                btnLabel="حفظ التغييرات"
                onClick={handleChange}
                btnType="submit"
              />
            </div>

          </form>
          <div className="bottom-links">
            <NavLink className="bottom-link" to="/change_password">
              تغيير كلمة المرور{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
