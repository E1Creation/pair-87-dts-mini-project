import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "9498db9da5d48fd214c08283999ab8be";
const imageUrl = "https://image.tmdb.org/t/p/original/";
export const TMDBMovies = createApi({
  reducerPath: "tmdbpopularmovies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie",
  }),
  endpoints: (builder) => ({
    populars: builder.query({
      query: () => `/popular?api_key=${API_KEY}`,
    }),
    topRated: builder.query({
      query: () => `/top_rated?api_key=${API_KEY}`,
    }),
    upComing: builder.query({
      query: () => `/upcoming?api_key=${API_KEY}`,
    }),
  }),
});

export const { usePopularsQuery, useTopRatedQuery, useUpComingQuery } =
  TMDBMovies;
export { imageUrl };
