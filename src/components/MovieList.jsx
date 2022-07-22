import { Box } from "@mui/material";
import React from "react";
import Loading from "./Loading";
import MovieItem from "./MovieItem";

const MovieList = ({ data, error, isLoading }) => {
  return (
    <Box>
      {error ? (
        <>Ada error</>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "normal",
                p: "0 6vw",
              }}
            >
              {data.results.map((popular) => {
                console.log(popular);

                return (
                  <MovieItem
                    key={popular.id}
                    popular={popular}
                    loading={isLoading}
                  ></MovieItem>
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
