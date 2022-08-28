import React, { useState, useEffect } from "react";
import httpService from "../../services/httpService";
import config from '../../config.json';
import Navbar from "../../Components/NavBar/NavBar";
import CommentPage from "../../Components/common/CommentPage";
import { toast } from 'react-toastify';

function Offers() {
  const [pageNumber, setPageNumber] = useState(0);
  const [offers, setOffers] = useState([]);

  const usersPerPage = 10;
  const firstInPage = pageNumber * usersPerPage;


  const getUsers = () => {
    return httpService.get(`${config.apiUrl}/users`);
  };

  const getOffers = () => {
      return httpService.get(`${config.apiUrl}/offers`);
  }

  useEffect(async () => {    
    try {
    let promise = await Promise.all([
      getUsers(),
      getOffers(),
    ]);

    const allUsers = promise[0].data;
    const allOffers = promise[1].data

    let offers = allOffers.map(off => {
      const author = allUsers.find(u => u.id === off.authorId);
      off.authorName = author.fullname;
      off.authorJob = author.job;
      off.authorEmail = author.email;
      return off;
    })
    setOffers(offers);

    } catch (er) {
      const responseMsg = er.response? er.response.statusText : er.response;
      toast.error(responseMsg);
    }
  }, []);


  const pageCount = Math.ceil(offers.length / usersPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <React.Fragment>
      <Navbar />

      <CommentPage
        newCommentLink="/new_offer"
        comments={offers}
        firstInPage={firstInPage}
        usersPerPage={usersPerPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />

    </React.Fragment>
  );
}

export default Offers;
