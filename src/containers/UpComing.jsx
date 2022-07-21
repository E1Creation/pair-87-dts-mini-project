import { Box } from "@mui/material";
import React from "react";
import MovieList from "../components/MovieList";
import { useUpComingQuery } from "../services/Movies/TMDBMoviesAPI";

const UpComing = () => {
  const { data, error, isLoading } = useUpComingQuery();
  //   console.log(`upComing data: ${data?.results[0]?.original_title}`);
  return (
    <Box bgcolor={"rgba(0,0,0,0.8)"}>
      <MovieList data={data} error={error} isLoading={isLoading} />
    </Box>
  );
};

export default UpComing;
