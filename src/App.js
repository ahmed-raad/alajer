import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user" exact>
              <UserProfile />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>

            <Route path="/requests" exact>
              <Requests />
            </Route>
            <Route path="/new_request" exact>
              <NewRequest />
            </Route>
            <Route path="/offers" exact>
              <Offers />
            </Route>
            <Route path="/new_offer" exact>
              <NewOffer />
            </Route>
            <Route path="/change_password" exact>
              <ChangePassword />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default App;
