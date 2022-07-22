import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "9498db9da5d48fd214c08283999ab8be";
const imageUrl = "https://image.tmdb.org/t/p/original/";
export const TMDBMovies = createApi({
  reducerPath: "tmdbpopularmovies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    populars: builder.query({
      query: () => `/movie/popular?api_key=${API_KEY}`,
    }),
    topRated: builder.query({
      query: () => `/movie/top_rated?api_key=${API_KEY}`,
    }),
    upComing: builder.query({
      query: () => `/movie/upcoming?api_key=${API_KEY}`,
    }),
    searchMovies: builder.query({
      query: (movie) => ({
        url: `/search/movie?api_key=${API_KEY}&query=${movie}`,
      }),
    }),
    detail: builder.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    video: builder.query({
      query: (id) => `/movie/${id}/videos?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  usePopularsQuery,
  useTopRatedQuery,
  useUpComingQuery,
  useDetailQuery,
  useSearchMoviesQuery,
  useVideoQuery,
} = TMDBMovies;
export { imageUrl };
