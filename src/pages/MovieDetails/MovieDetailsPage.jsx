import { useParams } from "react-router-dom";
import { tmdbSearchByID } from "../../tmdbMoviesAPI";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function loadMovie() {
      try {
        const response = await tmdbSearchByID(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadMovie();
  }, [id]);

  return (
    <>
      <div className={css.container}>
        <div className={css.imageContainer}>
          <img
            className={css.moviePreview}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        </div>

        <div className={css.description}>
          <h1>{movie.original_title}</h1>
          <p>User Score: {Math.round(movie.vote_average * 10) + "%"}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p></p>
        </div>
      </div>
    </>
  );
}
