import { useEffect, useState } from "react";
import { tmdbReviewsByID } from "../../tmdbMoviesAPI";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import ReviewsList from "../ReviewsList/ReviewsList";

export default function MovieReviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await tmdbReviewsByID(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadReviews();
  }, [movieId]);

  return (
    <ul className={css.container}>
      <ReviewsList reviews={reviews} />
    </ul>
  );
}
