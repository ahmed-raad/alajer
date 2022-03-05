import React, { Component } from "react";
import HomeSec1 from "../../Components/Home/HomeSec1";
import HomeSec2 from "../../Components/Home/HomeSec2";
import HomeSec3 from "../../Components/Home/HomeSec3";
import Navbar from "../../Components/NavBar/NavBar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <HomeSec1 />
        <HomeSec2 />
        <HomeSec3 />
      </React.Fragment>
    );
  }
}

export default Home;
