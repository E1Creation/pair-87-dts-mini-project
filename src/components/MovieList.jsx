import { Box } from "@mui/material";
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ data, error, isLoading }) => {
  return (
    <Box>
      {error ? (
        <>Ada error</>
      ) : isLoading ? (
        <>lagi loading..</>
      ) : (
        <>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                p: 5,
              }}
            >
              {data.results.map((popular) => {
                console.log(popular);
                return (
                  <MovieItem key={popular.id} popular={popular}></MovieItem>
                );
              })}
            </Box>
          </div>
        </>
      )}
    </Box>
  );
};

export default MovieList;
