const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBkODY3MTczZGI5ZDUxZjAwYzA3MDEzN2ViODUzYiIsIm5iZiI6MTcyMDc4MDEwMy41MDQ3ODEsInN1YiI6IjY2OTEwNDczMzdmZTA4ZjNjOWQ5YTM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwsaLb8tZmEz1WgqAoVAgEmrXJPxbfwIwMnysZZV01E",
  },
};
