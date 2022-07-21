import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { auth, logOut } from "../services/authentication/firebase";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const NavBar = ({ isHomePage }) => {
  const [searchContent, setSearchContent] = useState("");
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const searchHandler = (event) => {
    setSearchContent(event.target.value);
  };
  const logOutHandler = () => {
    logOut();
  };
  const keyPressSearchHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      navigate("/search", { state: { movie: event.target.value } });
    }
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
    >
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
            <Box display={"flex"}>
              <LocalMoviesIcon sx={{ width: 40, mt: 0.3, color: "red" }} />
              <Typography variant="h5">Movieku</Typography>
            </Box>
            {isHomePage ? (
              <Box display={"flex"} sx={{ alignItems: "center", gap: "20px" }}>
                {/* <TextField
                  id="searchId"
                  label="search..."
                  type="search"
                  variant="filled"
                /> */}

                <input
                  type="search"
                  id="searchId"
                  placeholder="Search..."
                  onChange={searchHandler}
                  value={searchContent}
                  onKeyPress={keyPressSearchHandler}
                />
                <Typography variant="body1" sx={{ color: "white" }}>
                  {user?.email}
                </Typography>
                <Link to="/upcoming" style={{ textDecoration: "none" }}>
                  {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Up Coming
                  </Button>
                </Link>
                <Link to="/toprated" style={{ textDecoration: "none" }}>
                  {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Top Rated
                  </Button>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Populer
                  </Button>
                </Link>

                {/* Karena link ini bukan dari MUI yang kita gunakan adalah style, bukan sx */}
                {user ? (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                    <Button
                      sx={{ my: 2, color: "white", display: "block" }}
                      onClick={logOutHandler}
                    >
                      <LogoutIcon />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                    <Button
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        backgroundColor: "red",
                      }}
                      onClick={navigateToLogin}
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </Box>
            ) : (
              <></>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
