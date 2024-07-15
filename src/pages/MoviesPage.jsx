import { Formik, Form, Field } from "formik";
import { tmdbSearchMovies } from "../tmdbMoviesAPI";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [userInput, setUserInput] = useState(() => {
    return searchParams.get("userInput") ?? "";
  });

  const initValues = { userInput: "" };

  useEffect(() => {
    if (userInput === "") {
      return;
    }

    const nextParams = userInput !== "" ? { userInput } : {};
    setSearchParams(nextParams);

    async function loadUserSearch() {
      try {
        const response = await tmdbSearchMovies(userInput);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to load API", error);
      }
    }

    loadUserSearch();
  }, [userInput]);

  const handleSubmit = (values, actions) => {
    if (values.userInput === "") {
      alert("Enter search prompt");
      return;
    }

    setUserInput(values.userInput);

    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="userInput" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <MovieList movies={movies}></MovieList>
    </div>
  );
}
