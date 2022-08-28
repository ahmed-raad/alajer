import React, { useState, useEffect } from "react";
import httpService from "../../services/httpService";
import config from '../../config.json';

import Navbar from "../../Components/NavBar/NavBar";
import { toast } from 'react-toastify';
import CommentPage from "../../Components/common/CommentPage";


function Requests() {
  const [pageNumber, setPageNumber] = useState(0);
  const [requests, setRequests] = useState([]);
  
  const usersPerPage = 10;
  const pageCount = Math.ceil(requests.length / usersPerPage);
  const firstInPage = pageNumber * usersPerPage;


  
  const getUsers = () => {
    return httpService.get(`${config.apiUrl}/users`);
  };

  const getRequests = () => {
      return httpService.get(`${config.apiUrl}/requests`);
  }

  useEffect(async () => {    
    try {
    let promise = await Promise.all([
      getUsers(),
      getRequests(),
    ]);

    const allUsers = promise[0].data;
    const allRequests = promise[1].data

    let requests = allRequests.map(req => {
      const author = allUsers.find(u => u.id === req.authorId);
      req.authorName = author.fullname;
      req.authorJob = author.job;
      req.authorEmail = author.email;
      return req;
    })
    setRequests(requests);

    } catch (er) {
      const responseMsg = er.response? er.response.statusText : er.response;
      toast.error(responseMsg);
    }
  }, []);



  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <React.Fragment>
      <Navbar />

      <CommentPage
        newCommentLink="/new_request"
        comments={requests}
        firstInPage={firstInPage}
        usersPerPage={usersPerPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />

    </React.Fragment>
  );
}

export default Requests;
