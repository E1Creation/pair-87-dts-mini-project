import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import {
  useDetailQuery,
  imageUrl,
  useVideoQuery,
} from "../services/Movies/TMDBMoviesAPI";

const Detail = () => {
  const url = "https://www.youtube.com/embed/";
  const param = useParams();
  const { data, error, isLoading } = useDetailQuery(param.id);
  const {
    data: video,
    error: errVid,
    isLoading: isLoadingVid,
  } = useVideoQuery(param.id);
  console.log(param.id);
  if (video) {
    console.log(`video data: ${video.results[0].key}`);
  }
  return data && video ? (
    <Box
      bgcolor={"rgba(0,0,0,0.8)"}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Box>
        <iframe
          id="video"
          width="100%"
          height="800"
          src={url + video.results[0].key}
          title={"test"}
          frameBorder="0"
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      {/* <CardMedia src={`${url}${video.results[0].key}`}></CardMedia> */}
      <Box display={"flex"}>
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
    </Box>
  ) : null;
};

export default Detail;
