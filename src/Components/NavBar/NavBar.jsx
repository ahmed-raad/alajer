import React, { useEffect } from "react";
import "../css/NavBar.css";
import { NavLink, useHistory } from "react-router-dom";
import $ from "jquery";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignIn,
  faCommenting,
  faTags,
  faHome,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          {localStorage.getItem("user-info") ? (
            <>
              <li key="user" className="nav-item">
                <NavLink className="nav-link" to="/user" exact>
                  {user.data.fullname.split(" ")[0]
                    ? user.data.fullname.split(" ")[0]
                    : user.data.fullname}{" "}
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>

              <li key="logout" className="nav-item nav-item-middle">
                <a href="/" onClick={logOut} className="nav-link" to="/">
                  تسجيل الخروج <FontAwesomeIcon icon={faSignOut} />
                </a>
              </li>
            </>
          ) : (
            <>
              <li key="register" className="nav-item">
                <NavLink className="nav-link" to="/register" exact>
                  إنشاء حساب <FontAwesomeIcon icon={faUserPlus} />
                </NavLink>
              </li>

              <li key="login" className="nav-item nav-item-middle">
                <NavLink className="nav-link" to="/login" exact>
                  تسجيل دخول <FontAwesomeIcon icon={faSignIn} />
                </NavLink>
              </li>
            </>
          )}

          <li key="requests" className="nav-item">
            <NavLink className="nav-link" to="/requests" exact>
              الطلبات <FontAwesomeIcon icon={faCommenting} />
            </NavLink>
          </li>
          <li key="offers" className="nav-item">
            <NavLink className="nav-link" to="/offers" exact>
              الخدمات <FontAwesomeIcon icon={faTags} />
            </NavLink>
          </li>

          <li key="homepage" className="nav-item ">
            <NavLink className=" nav-link" to="/" exact>
              الصفحة الرئيسية <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink key="logo" className="navbar-brand navbar-logo" to="" exact>
        الأجر
      </NavLink>
    </nav>
  );
};
export default Navbar;
