import React, { useState } from "react";
import reactSelect from "react-select";
import Navbar from "../../Components/NavBar/NavBar";
import colourStyles from "../Register/selectStyles";
import Select from "react-select";
import "../../Components/css/UserProfile.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user-info"));

  const [FullName, setFullName] = useState(user.data.fullname);
  const [Job, setJob] = useState(user.data.job);
  const [Email, setEmail] = useState(user.data.email);
  const [PhoneNumber, setPhoneNumber] = useState(user.data.phonenumber);
  const [City, setCity] = useState(user.data.city);

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
    setCity(e["value"]);
  };

  const handleChange = (e) => {
    console.log(user.data.city);
    let body = {
      fullname: FullName,
      job: Job,
      email: Email,
      city: City,
      phonenumber: PhoneNumber,
      token: user.data.token,
    };
    const detail = {
      method: "PUT",
      responseType: "json",
      url: `https://alajer.herokuapp.com/api/user_update`,
      data: body,
      headers: { Authorization: `Bearer ${user.data.token}` },
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

  const options = [
    { value: "بغداد", label: "بغداد" },
    { value: "البصرة", label: "البصرة" },
    { value: "نينوى", label: "نينوى" },
    { value: "البصرة", label: "البصرة" },
    { value: "أربيل", label: "أربيل" },
    { value: "النجف", label: "النجف" },
    { value: "ذي قار", label: "ذي قار" },
    { value: "كركوك", label: "كركوك" },
    { value: "الأنبار", label: "الأنبار" },
    { value: "ديالى", label: "ديالى" },
    { value: "الديوانية", label: "الديوانية" },
    { value: "تكريت", label: "تكريت" },
    { value: "ميسان", label: "ميسان" },
    { value: "واسط", label: "واسط" },
    { value: "السليمانية", label: "السليمانية" },
    { value: "بابل", label: "بابل" },
    { value: "كربلاء", label: "كربلاء" },
    { value: "دهوك", label: "دهوك" },
    { value: "المثنى", label: "المثنى" },
  ];

  const history = useHistory();

  return (
    <React.Fragment>
      <Navbar />
      <div id="user-wrapper">
        <h1>صفحة المستخدم</h1>

        <div id="user-description">
          <form id="user-img-form">
            <div className="user-img">
              <div>
                <img src="images/avatar.png" />
              </div>
              <div className="upload-submit-img">
                <label className="img-upload">
                  <input
                    className="user-img-input"
                    type="file"
                    id="user-img"
                    name="img"
                    accept="image/*"
                  />
                  <FontAwesomeIcon icon={faCloudUpload} /> تبديل الصورة
                </label>
                <button className="save-user-img-btn">حفظ الصورة</button>
              </div>
            </div>
          </form>
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
                  type="number"
                  onChange={handlePhoneNumber}
                  value={PhoneNumber}
                  required
                />
              </label>
              <label>
                <p>السكن:</p>
                <Select
                  name="city"
                  className="short-input user-select"
                  placeholder={City}
                  onChange={handleCity}
                  defaultValue={City}
                  options={options}
                  styles={colourStyles}
                />
              </label>
            </div>
            <div>
              <button id="user-button" type="button" onClick={handleChange}>
                حفظ التغييرات{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
