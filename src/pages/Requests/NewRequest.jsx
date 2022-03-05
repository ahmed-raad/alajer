import axios from "axios";
import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../src/Components/css/NewRequest.css";
import Navbar from "../../Components/NavBar/NavBar";

function NewRequest() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    let body = {
      title: Title,
      description: Description,
      user_id: user.data.id,
    };
    const detail = {
      method: "post",
      responseType: "json",
      url: `http://127.0.0.1:8000/api/create_request`,
      data: body,
      headers: { Authorization: `Bearer ${user.data.token}` },
    };
    axios(detail)
      .then((response) => {
        history.push("/requests");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <React.Fragment>
      <Navbar />
      <div id="new-wrapper">
        <h1>نشر طلب جديد</h1>
        <form id="new-form">
          <div id="new-fields">
            <div className="new-item">
              <label>
                <p id="new-title">عنوان الطلب: &nbsp;</p>
                <input
                  name="title"
                  type="text"
                  value={Title}
                  onChange={handleTitle}
                  required
                />
              </label>
            </div>

            <div className="new-item">
              <label>
                <p id="new-detail">
                  * يرجى كتابة تفاصيل طلبك بشكل دقيق لإيجاد أفضل المحترفين
                  القادرين على تلبيته لك
                </p>
                <textarea
                  name="description"
                  value={Description}
                  onChange={handleDescription}
                  required
                ></textarea>
              </label>
            </div>
            <div>
              <button id="new-button" onClick={handleSubmit} type="button">
                نشر الطلب
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default NewRequest;
