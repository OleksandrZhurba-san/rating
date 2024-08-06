import { useState } from "react";
import RatingButton from "../ratingButton";
import RatingImage from "../ratingImg";
import styles from "./styles.module.css";

function Rating() {
  const [ratingValue, setRatingValue] = useState(1);
  function changeRating(rating) {
    setRatingValue(rating);
  }
  const ratingsList = [
    { rating: 1, url: "https://i.imgur.com/L0Fcwhx.jpeg" },
    { rating: 2, url: "https://i.imgur.com/409w583.jpeg" },
    { rating: 3, url: "https://i.imgur.com/ZaLUPuK.jpeg" },
    { rating: 4, url: "https://i.imgur.com/kHMysK3.jpeg" },
    { rating: 5, url: "https://i.imgur.com/sQXEqUK.jpeg" },
  ];
  return (
    <div className={styles.rating_container}>
      <div className={styles.buttons_container}>
        {ratingsList.map((ratingObj) => {
          return (
            <RatingButton
              key={ratingObj.rating}
              rating={ratingObj.rating}
              onClick={() => changeRating(ratingObj.rating)}
            />
          );
        })}
      </div>
      <RatingImage url={ratingsList[ratingValue - 1].url} />
    </div>
  );
}

export default Rating;
