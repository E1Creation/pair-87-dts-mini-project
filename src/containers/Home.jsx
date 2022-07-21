import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";
import { usePopularsQuery } from "../services/Movies/TMDBMoviesAPI";

const Home = () => {
  const { data, error, isLoading } = usePopularsQuery();
  // console.log(`popular data: ${data?.results[0]?.original_title}`);
  return (
    <Box bgcolor={"rgba(0,0,0,0.8)"}>
      <MovieList data={data} error={error} isLoading={isLoading} />
    </Box>
  );
};

export default Home;
