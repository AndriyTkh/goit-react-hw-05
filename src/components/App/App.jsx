import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Home = lazy(() => import("/src/pages/HomePage"));
const MovieDetails = lazy(() =>
  import("/src/pages/MovieDetails/MovieDetailsPage.jsx")
);
const Movies = lazy(() => import("/src/pages/MoviesPage.jsx"));
const NotFound = lazy(() => import("/src/pages/NotFoundPage.jsx"));

export default function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
