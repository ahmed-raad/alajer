import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/NavBar/NavBar";
import Input from "../../Components/common/Input";
import SignButton from './../../Components/common/SignButton';
import checkLogginIn from './../../utils/checkLogginIn';
import httpService from "../../services/httpService";
import config from '../../config.json';
import { toast } from 'react-toastify';

function ChangePassword() {
  checkLogginIn.redirectToLogin();  
  const navigate = useNavigate();

  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewPasswordConfirm, setNewPasswordConfirm] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const accessToken = userInfo ? userInfo.data.accessToken : null;
  const user = userInfo ? userInfo.data.user : null;


  const handleOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleNewPasswordConfirm = (e) => {
    setNewPasswordConfirm(e.target.value);
  };

  const handleChange = async (e) => {
    let body = {
      password: NewPassword,
    };

    const headers =  {
      'Authorization': `Bearer ${accessToken}`,
    };

    try {
      let response = await httpService.patch(`${config.apiUrl}/users/${user.id}`, body, {headers});
      let new_user = {...response.data}
      delete new_user.password;
      response.accessToken = accessToken;
      response.data = {accessToken: accessToken, user: new_user};
      localStorage.setItem("user-info", JSON.stringify(response));
      navigate("/user");
      toast.success("Password has been changed successfully!");
    } catch (er) {
      const responseMsg = er.response? er.response.data : er.response;
      toast.error(responseMsg);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="sign-wrapper">
        <h1>تغيير كلمة المرور</h1>
        <form className="sign-form">
          <div>
            <div className="sign-item">
              <Input
                inputName="old_password"
                inputValue={OldPassword}
                inputType="password"
                inputLabel="كلمة السر القديمة:"
                inputClass="long-input input"
                onChange={handleOldPassword}
              />
            </div>
            
            <div className="sign-item">
              <Input
                inputName="new_password"
                inputValue={NewPassword}
                inputType="password"
                inputLabel="كلمة السر الجديدة:"
                inputClass="long-input input"
                onChange={handleNewPassword}
              />
            </div>

            <div className="sign-item">
              <Input
                inputName="confirm_new_password"
                inputValue={NewPasswordConfirm}
                inputType="password"
                inputLabel="تأكيد كلمة السر الجديدة:"
                inputClass="long-input input"
                onChange={handleNewPasswordConfirm}
              />
            </div>

            <div>
              <SignButton
                btnLabel="تغيير كلمة المرور"
                onClick={handleChange}
              />
            </div>
          </div>

          <div className="sign-img-container">
            <img className="sign-img" src="images/forget_password.jpg" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ChangePassword;
