import React from "react";
import { NavLink } from "react-router-dom";
import icons from "./../common/Icons";


const Navbar = () => {
  let userInfo = JSON.parse(localStorage.getItem("user-info"));

  let user = userInfo ? userInfo.data.user : null;

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
          <ul className="sublist-left">
            {userInfo ? (
              <>
                <li key="user" className="nav-item">
                  <NavLink className="nav-link" to="/user">
                    {user
                      ? user.fullname.split(" ")[0]
                        ? user.fullname.split(" ")[0]
                        : user.fullname
                      : ""}{" "}
                    {icons.User}
                  </NavLink>
                </li>
                <li key="logout" className="nav-item nav-item-middle">
                  <NavLink className="nav-link" to="/logout">
                    تسجيل خروج {icons.SignOut}
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li key="register" className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    إنشاء حساب {icons.SignUp}
                  </NavLink>
                </li>
                <li key="login" className="nav-item nav-item-middle">
                  <NavLink className="nav-link" to="/login">
                    تسجيل دخول {icons.SignIn}
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <ul className="sublist-middle">
            <li key="requests" className="nav-item">
              <NavLink className="nav-link" to="/requests">
                الطلبات {icons.Requests}
              </NavLink>
            </li>
            <li key="offers" className="nav-item">
              <NavLink className="nav-link" to="/offers">
                الخدمات {icons.Services}
              </NavLink>
            </li>
            <li key="homepage" className="nav-item ">
              <NavLink className=" nav-link" to="/">
                الصفحة الرئيسية {icons.Home}
              </NavLink>
            </li>
          </ul>
      
          <div className="nav-logo-container">
            <NavLink key="logo" className="navbar-brand navbar-logo" to="/">
              الأجر
            </NavLink>
          </div>
              
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
