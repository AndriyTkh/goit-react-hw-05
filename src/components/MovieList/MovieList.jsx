import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <p className={css.link}>{movie.original_title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
