import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { tmdbReviewsByID } from "../../tmdbMoviesAPI";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState();
  const id = useOutletContext();

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await tmdbReviewsByID(id);
        setReviews(response.data.results);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadReviews();
  }, []);

  return (
    <ul className={css.container}>
      {reviews != undefined &&
        reviews.map((review) => {
          return (
            <li key={review.id} className={css.reviewBox}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
    </ul>
  );
}
