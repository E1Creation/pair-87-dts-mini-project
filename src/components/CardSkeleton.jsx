import { Box, Skeleton } from "@mui/material";
import React from "react";

const CardSkeleton = () => {
  return (
    <Box margin={"20px 10px"} sx={{ backgroundColor: "rgba(128,128,128,0.3)" }}>
      <Skeleton
        variant="rectangular"
        width={200}
        height={250}
        animation="wave"
      />
      <Skeleton variant="text" height={60} animation="wave" />
    </Box>
  );
};

export default CardSkeleton;
