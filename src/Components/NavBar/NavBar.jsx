import React from "react";
import { NavLink } from "react-router-dom";
import icons from "./../common/Icons";


const Navbar = ({ user }) => {

  const userFirstName = () => {
    return user ? user.fullname.split(' ')[0] : null;
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
          <ul className="sublist-left">
            {!user && 
                <React.Fragment>
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
                </React.Fragment>
            }

            {user && 
                <React.Fragment>
                  <li key="user" className="nav-item">
                    <NavLink className="nav-link" to="/user">
                      {userFirstName()} {icons.User}
                    </NavLink>
                  </li>
                  <li key="logout" className="nav-item nav-item-middle">
                    <NavLink className="nav-link" to="/logout">
                      تسجيل خروج {icons.SignOut}
                    </NavLink>
                  </li>
                </React.Fragment>
            }

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
