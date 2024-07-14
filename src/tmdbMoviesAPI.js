import axios from "axios";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBkODY3MTczZGI5ZDUxZjAwYzA3MDEzN2ViODUzYiIsIm5iZiI6MTcyMDc4MDEwMy41MDQ3ODEsInN1YiI6IjY2OTEwNDczMzdmZTA4ZjNjOWQ5YTM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwsaLb8tZmEz1WgqAoVAgEmrXJPxbfwIwMnysZZV01E",
  },
};

export function tmdbTrendingMovies() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?include_adult=false&language=en-US&page=1&api_key=920d867173db9d51f00c070137eb853b`;

  return axios.get(url, options);
}

export function tmdbSearchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=920d867173db9d51f00c070137eb853b`;

  return axios.get(url, options);
}
