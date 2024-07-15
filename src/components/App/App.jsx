import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Home = lazy(() => import("/src/pages/HomePage"));
const MovieDetails = lazy(() =>
  import("/src/pages/MovieDetails/MovieDetailsPage.jsx")
);
const Cast = lazy(() => import("/src/components/MovieCast/MovieCast.jsx"));
const Reviews = lazy(() =>
  import("/src/components/MovieReviews/MovieReviews.jsx")
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
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
