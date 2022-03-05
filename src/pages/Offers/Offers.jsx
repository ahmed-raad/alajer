import React, { useState, Component, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../../Components/css/Offers.css";
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

function Offers() {
  const [users, setUsers] = useState(data.slice(0, 90));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div key={user.id} className="offer">
          <div className="request_person">
            <img src="images/person2.png" />
            <h3 className="name">{user.full_name}</h3>
            <h3 className="job">{user.job}</h3>
          </div>
          <div className="request_text">
            <p>
              اذا كان لديك شركة او مكتب يقدم خدمات خاصة او استشارات, اذا كنت
              طبيب او محامي او مهندس او محاسب قانوني … الخ, ولديك مكتب خاص وتريد
              موقع بسيط يعرض خدماتك او منتجاتك ويوسع من قاعدة عملائك وزيادة
              ارباحك, ويعرض معلومات وبيانات الاتصال بشركتك او مكتبك, ويستطيع
              الزوار ان يتصلو بك ويتواصلو معك من خلال الموقع, اذا تريد موقع
              الكتروني يساهم في زيادة عدد العملاء لديك, فأننا نقدم لك عرض تصميم
              موقع شركة, لنساهم في تطوير اعمالك واضافة المزيد من النجاح الى
              عملك,
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
          <NavLink className="plus_sign" to="/new_offer" exact>
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

export default Offers;
