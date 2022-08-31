import React, { useState, useEffect } from "react";

import CommentPage from "../../Components/common/CommentPage";

import { toast } from 'react-toastify';
import commentService from "../../services/commentService";


function Requests() {
  const [pageNumber, setPageNumber] = useState(0);
  const [requests, setRequests] = useState([]);
  
  const usersPerPage = 10;
  const pageCount = Math.ceil(requests.length / usersPerPage);
  const firstInPage = pageNumber * usersPerPage;


  useEffect(async () => {
    try {
      const requests = await commentService.get_comments("requests");
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
      {/* <Navbar /> */}

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
