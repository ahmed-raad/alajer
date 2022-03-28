import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import "../../Components/css/UserProfile.css";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";

function UserProfile() {
  const data = localStorage.getItem("user-info");
  const user = data ? JSON.parse(data) : "";
  const history = useHistory();
  const [FullName, setFullName] = useState(data ? user.data.fullname : "");
  const [Job, setJob] = useState(data ? user.data.job : "");
  const [Email, setEmail] = useState(data ? user.data.email : "");
  const [PhoneNumber, setPhoneNumber] = useState(
    data ? user.data.phonenumber : ""
  );
  const [City, setCity] = useState(data ? user.data.city : "");

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/login");
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
        Authorization: `Bearer ${data ? user.data.token : ""}`,
      },
    };
    axios
      .post(url, body, config)
      //axios.put did not work !!
      .then((response) => {
        localStorage.setItem("user-info", JSON.stringify(response));
        history.push("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

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

  // Temporary Image Section
  const [picture, setPicture] = useState(data ? user.data.image : "");
  const [imgData, setImgData] = useState(data ? user.data.image : "");
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const newImg = e.target.files[0];
      setPicture(newImg);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  // End Temporary Image Section

  const handleImgChange = (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/change_image?_method=PUT";
    const formData = new FormData();
    formData.append("img", picture);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${data ? user.data.token : ""}`,
      },
    };
    axios
      .post(url, formData, config)
      //axios.put did not work !!
      .then((response) => {
        localStorage.setItem("user-info", JSON.stringify(response));
        history.push("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  function addDefaultSrc(ev) {
    ev.target.src = "images/avatar.png";
  }

  return (
    <React.Fragment>
      <Navbar />
      <div id="user-wrapper">
        <h1>صفحة المستخدم</h1>

        <div id="user-description">
          <form id="user-img-form">
            <div className="user-img">
              <div>
                <img
                  src={imgData}
                  alt="صورة المستخدم"
                  onError={addDefaultSrc}
                />
              </div>
              <div className="upload-submit-img">
                <label className="img-upload">
                  <input
                    className="user-img-input"
                    type="file"
                    id="user-img"
                    name="img"
                    accept="image/*"
                    onChange={onChangePicture}
                  />
                  <FontAwesomeIcon icon={faCloudUpload} /> تبديل الصورة
                </label>
                <button
                  className="save-user-img-btn"
                  onClick={handleImgChange}
                  type="submit"
                >
                  حفظ الصورة
                </button>
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
            <div>
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
