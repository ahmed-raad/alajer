import React, { Component } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { Button } from "react-bootstrap";

class CarouselGroup1 extends Component {
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
      { id: 5, title: "تصميم", imgUrl: "images/photo-edit.png" },
      {
        id: 6,
        title: "مونتاج",
        imgUrl: "images/video-edit.jpg",
      },
      {
        id: 7,
        title: "بناء تطبيقات",
        imgUrl: "images/mobile-dev.png",
      },
      {
        id: 8,
        title: "بناء مواقع",
        imgUrl: "images/web-dev.jpg",
      },
      { id: 9, title: "كتابة", imgUrl: "images/writing.jpg" },
    ],
  };

  myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <img width={28} height={28} src="images/right-arrow.svg" />
      ) : (
        <img width={28} height={28} src="images/left-arrow.svg" />
      );
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  }

  render() {
    const { items } = this.state;

    return (
      <Carousel
        itemsToScroll={3}
        itemsToShow={3}
        showEmptySlots
        enableAutoPlay
        autoPlaySpeed={4000}
        renderArrow={this.myArrow}
        isRTL={true}
      >
        {items.map((item) => (
          <div key={item.id} className="sec2-item">
            <h4 key={item.id} className="sec2-item-heading">
              {item.title}
            </h4>
            <img
              key={"sec2-img" + item.id}
              className="sec2-img"
              src={item.imgUrl}
            />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CarouselGroup1;
