import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Logout from "./Components/Logout/Logout";
import Requests from "./pages/Requests/Requests";
import NewRequest from "./pages/Requests/NewRequest";
import Offers from "./pages/Offers/Offers";
import NewOffer from "./pages/Offers/NewOffer";
import Footer from "./Components/Footer/Footer";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/NavBar/NavBar";
import userService from "./services/userService";


const App = () => {
  
  const [user, setUser] = useState();
  
  useEffect(() => {
    try {
      const userInfo = userService.get_current_user();
      setUser(userInfo.user);
    } catch (ex) {}

  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/register" element={<Register />}  />
          <Route path="/login" element={<Login />}  />
          <Route path="/logout" element={<Logout />}  />
          <Route path="/requests" element={<Requests />}  />
          <Route path="/new_request" element={<NewRequest />}  />
          <Route path="/offers" element={<Offers />}  />
          <Route path="/new_offer" element={<NewOffer />}  />
          <Route path="/change_password" element={<ChangePassword />}  />        
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default App;
