import React from "react";
import Carousel from "react-elastic-carousel";
import items from '../../utils/homePagePeople'

function CarouselPeople() {

  return (
    <React.Fragment>
      <h2 id="sec3-heading">آراء أشخاص استفادوا من موقع الأجر</h2>
      <Carousel
        itemsToScroll={1}
        itemsToShow={1}
        showEmptySlots
        enableAutoPlay
        autoPlaySpeed={4000}
        isRTL={true}
      >
        {items.map((item) => (
          <div key={item.id} className="sec3-item">
            <div key={item.id} className="sec3-item-comment">
              <p>{item.comment}</p>
            </div>
            <div className="sec3-person">
              <img
                key={"sec3-img" + item.id}
                className="sec3-img"
                src={item.imgUrl}
              />
              <h4 key={item.id} className="sec3-item-heading">
                {item.name} - {item.city}
                <br />
                {item.job}
              </h4>
            </div>
          </div>
        ))}
      </Carousel>
    </React.Fragment>
  );
}


export default CarouselPeople;
