import React from "react";
import { consts } from "react-elastic-carousel";
import { Button } from "react-bootstrap";

const CarouselArrow = ({ type, onClick, isEdge }) => {
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

export default CarouselArrow;