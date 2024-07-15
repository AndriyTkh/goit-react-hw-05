import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { tmdbSearchByID } from "../../tmdbMoviesAPI";
import css from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import BackBtn from "../../components/BackBtn/BackBtn";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/products");

  useEffect(() => {
    async function loadMovie() {
      try {
        const response = await tmdbSearchByID(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadMovie();
  }, [movieId]);

  return (
    <>
      <BackBtn backlink={backLinkHref.current}></BackBtn>

      <div className={css.movieBox}>
        <div className={css.imageContainer}>
          <img
            className={css.moviePreview}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>

        <div className={css.description}>
          <h1>{movie.original_title}</h1>
          <p>User Score: {Math.round(movie.vote_average * 10) + "%"}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className={css.genreList}>
            {movie.genres &&
              movie.genres.map((genre) => {
                return (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className={css.addBox}>
        <p>Additional information</p>
        <ul className={css.addList}>
          <li>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={movieId} />
      </Suspense>
    </>
  );
}
