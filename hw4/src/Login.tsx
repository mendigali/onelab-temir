import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Box, Button } from "@mui/material";
import { useUserContext } from "./UserContext";
import users from "./users.json";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitClick = () => {
    if (username.length < 1 || password.length < 0) return;

    const user = users.find((user) => user.username === username);

    if (!user || user.password !== password) return console.log("Invalid user");

    setUser(user);

    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center">
        Login page
      </Typography>
      <Box mt={5}>
        <TextField
          label="Username"
          variant="filled"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <Box mt={2}>
        <TextField
          label="Password"
          variant="filled"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleSubmitClick}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
