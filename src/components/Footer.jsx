import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      sx={{
        backgroundColor: "rgba(0,0,0,0.75)",
        color: "grey",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1">
        Created by: Kurniawan Sudirman and Syarif Nurhidayah
      </Typography>
    </Box>
  );
};

export default Footer;
