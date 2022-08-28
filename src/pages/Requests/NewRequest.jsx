import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewComment from "../../Components/common/newComment";
import Navbar from "../../Components/NavBar/NavBar";
import checkLogginIn from './../../utils/checkLogginIn';

function NewRequest() {
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
      // user_id: user.data.id,
    };
    // const detail = {
    //   method: "post",
    //   responseType: "json",
    //   url: `http://127.0.0.1:8000/api/create_request`,
    //   data: body,
    //   headers: { Authorization: `Bearer ${user.data.token}` },
    // };
    // axios(detail)
    //   .then((response) => {
    //     navigate("/requests");
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
    console.log(body)
  };
  return (
    <React.Fragment>
      <Navbar />

      <NewComment
        pageTitle="نشر طلب جديد"
        commentTitle="عنوان الطلب: &nbsp;"
        commentDescr="* يرجى كتابة تفاصيل طلبك بشكل دقيق لإيجاد أفضل المحترفين القادرين على تلبيته لك"
        Title={Title}
        Description={Description}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        handleSubmit={handleSubmit}
      />

    </React.Fragment>

  );
}

export default NewRequest;
