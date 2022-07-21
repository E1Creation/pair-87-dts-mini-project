import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";
import { useSearchMoviesQuery } from "../services/Movies/TMDBMoviesAPI";

const Search = () => {
  const { state } = useLocation();
  console.log(`movie : ${state.movie}`);
  const { data, error, isLoading } = useSearchMoviesQuery(state.movie);
  console.log(`movie data: ${data}`);
  return (
    <Box bgcolor={"rgba(0,0,0,0.8)"}>
      <MovieList data={data} error={error} isLoading={isLoading} />
    </Box>
  );
};

export default Search;
