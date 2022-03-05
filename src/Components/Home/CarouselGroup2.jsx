import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

class CarouselGroup2 extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "محمد حسن",
        job: "رائد أعمال",
        city: "بغداد",
        comment:
          "كدرت من خلال هذا الموقع أحصل على مبرمج تطبيقات موبايل سوالي تطبيقي بالوقت  .المناسب و ضمن المواصفات الي طلبتها منه و لهذا السبب كدرت أبدي بمشروعي بالوقت الي حددته",
        imgUrl: "images/person1.png",
      },
      {
        id: 2,
        name: "محمد حسن",
        job: "رائد أعمال",
        city: "بغداد",
        comment:
          "كدرت من خلال هذا الموقع أحصل على مبرمج تطبيقات موبايل سوالي تطبيقي بالوقت  .المناسب و ضمن المواصفات الي طلبتها منه و لهذا السبب كدرت أبدي بمشروعي بالوقت الي حددته",
        imgUrl: "images/person1.png",
      },
      {
        id: 3,
        name: "محمد حسن",
        job: "رائد أعمال",
        city: "بغداد",
        comment:
          "كدرت من خلال هذا الموقع أحصل على مبرمج تطبيقات موبايل سوالي تطبيقي بالوقت  .المناسب و ضمن المواصفات الي طلبتها منه و لهذا السبب كدرت أبدي بمشروعي بالوقت الي حددته",
        imgUrl: "images/person1.png",
      },
      {
        id: 4,
        name: "محمد حسن",
        job: "رائد أعمال",
        city: "بغداد",
        comment:
          "كدرت من خلال هذا الموقع أحصل على مبرمج تطبيقات موبايل سوالي تطبيقي بالوقت  .المناسب و ضمن المواصفات الي طلبتها منه و لهذا السبب كدرت أبدي بمشروعي بالوقت الي حددته",
        imgUrl: "images/person1.png",
      },
      {
        id: 5,
        name: "محمد حسن",
        job: "رائد أعمال",
        city: "بغداد",

        comment:
          "كدرت من خلال هذا الموقع أحصل على مبرمج تطبيقات موبايل سوالي تطبيقي بالوقت  .المناسب و ضمن المواصفات الي طلبتها منه و لهذا السبب كدرت أبدي بمشروعي بالوقت الي حددته",
        imgUrl: "images/person1.png",
      },
    ],
  };

  render() {
    const { items } = this.state;

    return (
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
    );
  }
}

export default CarouselGroup2;
