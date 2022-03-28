import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../../Components/css/Requests.css";
import data from "../../data.json";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlusCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Components/NavBar/NavBar";
import axios from "axios";

function Requests() {
  const [users, setUsers] = useState(data.slice(0, 90));
  const [pageNumber, setPageNumber] = useState(0);
  const [requests, setRequests] = useState([]);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/requests").then((response) => {
      setRequests(response.data.data);
    });
  }, []);

  function addDefaultSrc(ev) {
    ev.target.src = "images/avatar.png";
  }

  const displayUsers = requests
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((request) => {
      return (
        <div key={request.id} className="request">
          <div className="request_person">
            <img
              src="images/avatar.png"
              onError={addDefaultSrc}
              alt="صورة المستخدم"
            />
            <h3 className="name">{request.author_name}</h3>
            <h3 className="job">{request.author_job}</h3>
          </div>
          <div className="request_text">
            <p>{request.description}</p>
          </div>
          <div className="request_send">
            <NavLink className="plus_sign" to="/send_request" exact>
              <FontAwesomeIcon icon={faPaperPlane} />
            </NavLink>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(requests.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div id="requests_page">
        <span id="circle_span">
          <NavLink className="plus_sign" to="/new_request" exact>
            <FontAwesomeIcon icon={faPlusCircle} />
          </NavLink>
        </span>

        <div className="App">
          {displayUsers}
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faAngleDoubleRight} />}
            nextLabel={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"arrowBtn"}
            nextLinkClassName={"arrowBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            pageLinkClassName={"paginationBtn"}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Requests;
