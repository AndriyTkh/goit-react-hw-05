import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { tmdbCastByID } from "../../tmdbMoviesAPI";

export default function MovieCast() {
  const [cast, setCast] = useState();
  const id = useOutletContext();

  useEffect(() => {
    async function loadCast() {
      try {
        const response = await tmdbCastByID(id);
        console.log(response.data.cast);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadCast();
  }, [id]);

  return;
}
