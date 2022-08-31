import React, { useState, useEffect } from "react";
import CommentPage from "../../Components/common/CommentPage";
import commentService from "../../services/commentService";
import { toast } from 'react-toastify';

function Offers() {
  const [pageNumber, setPageNumber] = useState(0);
  const [offers, setOffers] = useState([]);

  const usersPerPage = 10;
  const firstInPage = pageNumber * usersPerPage;


  useEffect(async () => {
    try {
      const offers = await commentService.get_comments("offers");
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
