import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function CarouselGroup1() {
  const items = [
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
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  // Show one item for mobiles and 3 otherwise
  const itemstoShow = isMobile ? 1 : 3;

  function myArrow({ type, onClick, isEdge }) {
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

  return (
    <Carousel
      itemsToScroll={itemstoShow}
      itemsToShow={itemstoShow}
      showEmptySlots
      enableAutoPlay
      autoPlaySpeed={4000}
      renderArrow={myArrow}
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

export default CarouselGroup1;
