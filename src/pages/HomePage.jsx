import { useEffect, useState } from "react";
import { tmdbTrendingMovies } from "../tmdbMoviesAPI";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function loadTrending() {
      try {
        const response = await tmdbTrendingMovies();
        setTrending(response.data.results);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadTrending();
  }, []);

  return (
    <main>
      <h1>Trending Today</h1>
      <MovieList movies={trending} />
    </main>
  );
}
