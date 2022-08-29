import React from "react";
import Carousel from "react-elastic-carousel";
import { useMediaQuery } from "react-responsive";
import items from "../../utils/homePageSkills";
import CarouselArrow from "./CarouselArrow";

function CarouselSkills() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  // Show one item for mobiles and 3 otherwise
  const itemstoShow = isMobile ? 1 : 3;

  return (
    <React.Fragment>
      <h2 id="sec2-heading">الخدمات المتوفرة</h2>
      <Carousel
        itemsToScroll={itemstoShow}
        itemsToShow={itemstoShow}
        showEmptySlots
        enableAutoPlay
        autoPlaySpeed={4000}
        renderArrow={CarouselArrow}
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
    </React.Fragment>
  );
}

export default CarouselSkills;
