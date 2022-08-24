import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import "../../Components/css/UserProfile.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import options from "../../utils/cityOptions";


function UserProfile() {
  const navigate = useNavigate();
  let { user } = JSON.parse(localStorage.getItem("user-info")).data;

  const [FullName, setFullName] = useState(user.fullname);
  const [Job, setJob] = useState(user.job);
  const [Email, setEmail] = useState(user.email);
  const [PhoneNumber, setPhoneNumber] = useState(user.phonenumber);
  const [City, setCity] = useState(user.city);

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, []);

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

  const handleChange = (e) => {
    let body = {
      fullname: FullName,
      job: Job,
      email: Email,
      city: City,
      phonenumber: PhoneNumber,
    };

    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/user_update?_method=PUT";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .post(url, body, config)
      //axios.put did not work !!
      .then((response) => {
        localStorage.setItem("user-info", JSON.stringify(response));
        navigate("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
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
            <div className="user-item">
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

            <div className="user-item">
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

            <div className="user-item">
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
                  className="short-input user-select"
                  onChange={handleCity}
                  value={City}
                >
                  {options.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="user-item">
              <button id="user-button" onClick={handleChange} type="submit">
                حفظ التغييرات{" "}
              </button>
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
