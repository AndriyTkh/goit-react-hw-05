import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { tmdbCastByID } from "../../tmdbMoviesAPI";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function loadCast() {
      try {
        const response = await tmdbCastByID(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadCast();
  }, [movieId]);

  return (
    <ul>
      {cast != undefined &&
        cast.map((person) => {
          return (
            <li key={person.id} className={css.actorBox}>
              <img
                className={css.profileImg}
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.original_name}
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          );
        })}
    </ul>
  );
}
