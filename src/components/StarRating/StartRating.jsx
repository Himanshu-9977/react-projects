import React, { useState } from "react";
import { Star } from "lucide-react";

const StartRating = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (i) => {
    setRating(i);
  };
  const handleMouseMove = (i) => {
    setHover(i);
  };
  const handleMouseLeave = () => {
    setHover(rating)
  };

  return (
    <div className="max-w-4xl my-20 flex justify-center items-center gap-4 mx-auto">
      {[...Array(stars)].map((_, i) => {
        i = i + 1;
        return (
          <Star
          strokeWidth={1}
            key={i}
            color={i <= (hover || rating) ? 'yellow' : 'white'}
            fill={i <= (hover || rating) ? 'yellow' : ''}
            size={50}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseMove(i)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StartRating;
