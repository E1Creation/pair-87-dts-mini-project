import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useDetailQuery, imageUrl } from "../services/Movies/TMDBMoviesAPI";

const Detail = () => {
  const param = useParams();
  const { data, error, isLoading } = useDetailQuery(param.id);
  console.log(`upComing data: ${data}`);
  return data ? (
    <Box
      bgcolor={"rgba(0,0,0,0.8)"}
      sx={{ display: "flex", justifyContent: "flex-start", padding: "20px" }}
    >
      <Box
        component="img"
        sx={{
          width: 300,
          maxWidth: { xs: 150, md: 300 },
          margin: "15px 15px",
        }}
        src={imageUrl + data.poster_path}
        alt={data.original_title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#ffffff",
          textAlign: "left",
          padding: "15px",
        }}
      >
        <Typography variant="h4" gutterBottom component="div">
          {data.original_title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {data.release_date}
        </Typography>
        <Typography
          sx={{ fontStyle: "italic" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          {data.tagline}
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Overview
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          {data.overview}
        </Typography>
      </Box>
    </Box>
  ) : null;
};

export default Detail;
