import React from "react";
import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Container,
  Toolbar,
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { red } from "@mui/material/colors";
import Logout from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { auth, logOut } from "../services/authentication/firebase";
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
    >
      {isHomePage ? (
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <LocalMoviesIcon
              sx={{
                display: { xs: "none", md: "flex" },
                width: 40,
                color: "red",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "arial",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              My Movies
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">Popular</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/upcoming" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">Up Coming</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/toprated" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">Top Rated</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <LocalMoviesIcon
              sx={{
                display: { xs: "none", md: "none" },
                width: 40,
                color: "red",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "arial",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              My Movies
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Popular
                </Button>
              </Link>
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
              {user ? (
                <Box>
                  <input
                    type="search"
                    id="searchId"
                    placeholder="Type title to search..."
                    onChange={searchHandler}
                    value={searchContent}
                    onKeyPress={keyPressSearchHandler}
                  />
                </Box>
              ) : (
                <></>
              )}
            </Box>
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={user?.email}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: red[500],
                      }}
                    >
                      {user?.email.substr(0, 1).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Tooltip title="Sign Out">
                        <ListItemIcon onClick={logOutHandler}>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                      </Tooltip>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                {/* Karena button ini dari MUI, maka yang kita gunakan adalah sx */}
                <Button
                  sx={{ color: "#ffffff", bgcolor: "red" }}
                  onClick={navigateToLogin}
                >
                  Sign In
                </Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      ) : (
        <></>
      )}
    </AppBar>
  );
};

export default NavBar;
