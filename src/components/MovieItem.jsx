import { Box, Typography } from "@mui/material";
import React from "react";
import { imageUrl } from "../services/Movies/TMDBMoviesAPI";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../services/authentication/firebase";
import CardSkeleton from "./CardSkeleton";
import { useState } from "react";

const MovieItem = ({ popular, loading }) => {
  const [user, isLoading] = useAuthState(auth);
  const [state, setState] = useState(false);
  setTimeout(() => {
    setState(true);
  }, 2000);
  if (!state && !loading) {
    return <CardSkeleton />;
  }
  return (
    <Box>
      {user ? (
        <Link to={`/detail/${popular.id}`} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.paper",
              maxWidth: 200,
              m: 2,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              sx={{
                width: 200,
                maxWidth: { xs: 100, md: 200 },
              }}
              src={imageUrl + popular.poster_path}
              alt={popular.original_title}
            />
            <Box sx={{ p: "5px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <StarRateIcon />
                {popular.vote_average}
              </Box>
            </Box>
          </Box>
        </Link>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.paper",
            maxWidth: 200,
            m: 2,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            sx={{
              width: 200,
              maxWidth: { xs: 100, md: 200 },
            }}
            src={imageUrl + popular.poster_path}
            alt={popular.original_title}
          />
          <Box sx={{ p: "5px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <StarRateIcon />
              {popular.vote_average}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MovieItem;
