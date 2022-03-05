import React, { Component } from "react";
import "../../Components/css/Home.css";
import CarouselGroup1 from "./CarouselGroup1";

class HomeSec2 extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "بناء مواقع",
        imgUrl: "images/web-dev.jpg",
      },
      {
        id: 2,
        title: "بناء تطبيقات",
        imgUrl: "images/mobile-dev.png",
      },
      {
        id: 3,
        title: "مونتاج",
        imgUrl: "images/video-edit.jpg",
      },
      { id: 4, title: "كتابة", imgUrl: "images/writing.jpg" },
      { id: 5, title: "تصميم", imgUrl: "images/video-edit.jpg" },
    ],
  };

  render() {
    return (
      <section id="sec2">
        <h2 id="sec2-heading">الخدمات المتوفرة</h2>
        <CarouselGroup1 />
      </section>
    );
  }
}

export default HomeSec2;
