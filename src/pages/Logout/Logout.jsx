import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/");
  }
};

export default Logout;
