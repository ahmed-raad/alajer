import React, { Component } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Hero from './../../Components/Home/Hero';
import CarouselSkills from "../../Components/Home/CarouselSkills";
import CarouselPeople from './../../Components/Home/CarouselPeople';

class Home extends Component {
  render() {
      return (
        <React.Fragment>
          <Navbar />
          <section id="sec1">
            <Hero />
          </section>
          <section id="sec2">
            <CarouselSkills />
          </section>
          <section id="sec3">
            <CarouselPeople />
          </section>
        </React.Fragment>
      );
  }
}

export default Home;
