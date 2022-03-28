import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../Components/NavBar/NavBar";
import "../../../src/Components/css/ChangePassword.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function ChangePassword() {
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewPasswordConfirm, setNewPasswordConfirm] = useState("");

  const data = localStorage.getItem("user-info");
  const user = data ? JSON.parse(data) : "";

  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/login");
    }
  }, []);

  const handleOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleNewPasswordConfirm = (e) => {
    setNewPasswordConfirm(e.target.value);
  };

  const handleChange = (e) => {
    let body = {
      old_password: OldPassword,
      new_password: NewPassword,
      new_password_confirmation: NewPasswordConfirm,
    };

    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/change_password?_method=PUT";
    const config = {
      headers: {
        Authorization: `Bearer ${data ? user.data.token : ""}`,
      },
    };
    axios
      .post(url, body, config)
      //axios.put did not work !!
      .then((response) => {
        history.push("/user");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div id="change-wrapper">
        <h1>تغيير كلمة المرور</h1>
        <form id="change-form">
          <div id="change-fields">
            <div className="change-item">
              <label>
                <p>كلمة السر القديمة:</p>
                <input
                  name="old_password"
                  type="password"
                  onChange={handleOldPassword}
                  value={OldPassword}
                  required
                />
              </label>
            </div>
            <div className="change-item">
              <label>
                <p>كلمة السر الجديدة:</p>
                <input
                  name="new_password"
                  type="password"
                  onChange={handleNewPassword}
                  value={NewPassword}
                  required
                />
              </label>
            </div>
            <div className="change-item">
              <label>
                <p>تأكيد كلمة السر الجديدة:</p>
                <input
                  name="confirm_new_password"
                  type="password"
                  onChange={handleNewPasswordConfirm}
                  value={NewPasswordConfirm}
                  required
                />
              </label>
            </div>
            <div>
              <button id="change-button" type="button" onClick={handleChange}>
                تغيير كلمة المرور{" "}
              </button>
            </div>
          </div>

          <div id="change-img-container">
            <img id="change-img" src="images/forget_password.jpg" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ChangePassword;
