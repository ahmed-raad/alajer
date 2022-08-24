import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Requests from "./pages/Requests/Requests";
import NewRequest from "./pages/Requests/NewRequest";
import Offers from "./pages/Offers/Offers";
import NewOffer from "./pages/Offers/NewOffer";
import Footer from "./Components/Footer/Footer";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/user" element={<UserProfile />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/requests" element={<Requests />} exact />
          <Route path="/new_request" element={<NewRequest />} exact />
          <Route path="/offers" element={<Offers />} exact />
          <Route path="/new_offer" element={<NewOffer />} exact />
          <Route path="/change_password" element={<ChangePassword />} exact />        
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default App;
