import React, { useState } from "react";
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

function Requests() {
  const [users, setUsers] = useState(data.slice(0, 90));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div key={user.id} className="user">
          <div className="request_person">
            <img src="images/avatar.png" />
            <h3 className="name">{user.full_name}</h3>
            <h3 className="job">{user.job}</h3>
          </div>
          <div className="request_text">
            <p>
              السلام عليكم ورحمة الله وبركاته .. ارغب في عمل خاص للمؤسسة الخاص
              بي باللغه العربيه والانجليزيه يوجد مثال مرفق ارغب بتصميم الموقع
              نفس المنصه المعمول بها مع العلم ان النشاط مشابه ولاكن ارغب في
              الاختلاف في التصميم يفضل من يكون سعره متوافق للميزانية + الخبره
              والاحترافيه وشرحه لطريقة عمل الموقع
            </p>
            <p></p>
          </div>
          <div className="request_send">
            <NavLink className="plus_sign" to="/send_request" exact>
              <FontAwesomeIcon icon={faPaperPlane} />
            </NavLink>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

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
