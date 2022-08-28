import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/NavBar/NavBar";
import NewComment from "../../Components/common/newComment";
import checkLogginIn from './../../utils/checkLogginIn';

function NewOffer() {
  checkLogginIn.redirectToLogin();
  const user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();

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
      url: `http://127.0.0.1:8000/api/create_offer`,
      data: body,
      headers: { Authorization: `Bearer ${user.data.token}` },
    };
    axios(detail)
      .then((response) => {
        navigate("/offers");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <React.Fragment>
      <Navbar />
      
      <NewComment
        pageTitle="نشر خدمة جديدة"
        commentTitle="عنوان الخدمة: &nbsp;"
        commentDescr="* يرجى كتابة تفاصيل الخدمات التي تعرضها و مدى مهرتك فيها بشكل دقيق"
        Title={Title}
        Description={Description}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        handleSubmit={handleSubmit}
      />

    </React.Fragment>
  );
}

export default NewOffer;
