import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  auth,
  loginWithEmailandPassword,
  registerithEmailandPassword,
} from "../services/authentication/firebase";

// import { useDispatch } from "react-redux";
// import { saveUser } from "../features/user";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";

const SignForm = ({ text }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userAuth, isLoading] = useAuthState(auth);
  useEffect(
    () => {
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (userAuth) {
        navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [userAuth, isLoading, navigate]
  );
  // const dispatcher = useDispatch();
  const loginOrRegisterHandler = () => {
    if (text === "Login") {
      loginWithEmailandPassword(user.email, user.password);
      navigate("/");
    } else {
      registerithEmailandPassword(user.email, user.password);
      navigate("/");
    }
  };
  const emailHandler = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
  };
  const passwordHandler = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: "10%",
        bgcolor: "rgb(255,255,255,0.9)",
        pt: 5,
        pb: 5,
        borderRadius: 3,
      }}
    >
      <Box fullWidth textAlign="center">
        {text === "Login" ? (
          <Avatar
            sx={{ bgcolor: "black", margin: "0 auto", width: 60, height: 60 }}
          >
            <LockIcon />
          </Avatar>
        ) : (
          <Avatar
            sx={{ bgcolor: "black", margin: "0 auto", width: 60, height: 60 }}
          >
            <AssignmentIcon />
          </Avatar>
        )}
        <Typography variant="h4">{text}</Typography>
      </Box>
      <Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={emailHandler}
          value={user.email}
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={passwordHandler}
          value={user.password}
          autoComplete="current-password"
          sx={{ borderRadius: 40 }}
        />
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          height: 40,
          backgroundColor: "rgba(0,0,0,1)",
          borderRadius: 10,
        }}
        onClick={loginOrRegisterHandler}
      >
        {text}
      </Button>
      <Box textAlign="center">
        {text === "Register" ? (
          <Link to="/login">Already have an account?</Link>
        ) : (
          <Link to="/register">Don't have an account? Sign Up</Link>
        )}
      </Box>
    </Container>
  );
};

export default SignForm;
