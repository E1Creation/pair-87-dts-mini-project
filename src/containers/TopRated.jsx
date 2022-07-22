import { Box } from "@mui/material";
import React from "react";
import MovieList from "../components/MovieList";
import { useTopRatedQuery } from "../services/Movies/TMDBMoviesAPI";

const TopRated = () => {
  const { data, error, isLoading } = useTopRatedQuery();
//   console.log(`top rated data: ${data?.results[0]?.original_title}`);
  return (
    <Box bgcolor={"rgba(0,0,0,0.8)"}>
      <MovieList data={data} error={error} isLoading={isLoading} />
    </Box>
  );
};

export default TopRated;
