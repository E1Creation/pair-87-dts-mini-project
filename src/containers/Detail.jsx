import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { useDetailQuery, imageUrl } from "../services/Movies/TMDBMoviesAPI";

const Detail = () => {
  const param = useParams();
  //   console.log(param);
  const { data, error, isLoading } = useDetailQuery(param.id);
  console.log(`upComing data: ${data}`);
  return data ? (
    <Box bgcolor={"rgba(0,0,0,0.8)"}>
      <Box
        component="img"
        sx={{
          width: 200,
          maxWidth: { xs: 100, md: 200 },
        }}
        src={imageUrl + data.poster_path}
        alt={data.original_title}
      />
    </Box>
  ) : null;
};

export default Detail;
