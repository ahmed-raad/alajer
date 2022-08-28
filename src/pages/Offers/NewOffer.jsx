import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/NavBar/NavBar";
import NewComment from "../../Components/common/newComment";
import checkLogginIn from './../../utils/checkLogginIn';
import httpService from "../../services/httpService";
import { toast } from 'react-toastify';
import config from '../../config.json';

function NewOffer() {
  checkLogginIn.redirectToLogin();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const user = userInfo ? userInfo.data.user : null;

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async() => {
    let body = {
      title: Title,
      description: Description,
      authorId: user.id
    };

    try {
      await httpService.post(`${config.apiUrl}/offers`, body);
      navigate('/offers');
    } catch (er) {
      const responseMsg = er.response? er.response.data : er.response;
      toast.error(responseMsg);
    }
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
