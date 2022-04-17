import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Button, AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeContext } from "./App";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const ROUTES = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            lecture 3 react-router-dom
          </Typography>
          {ROUTES.map((route, index) => (
            <Button
              key={index}
              sx={{ my: 2, color: "white" }}
              component={Link}
              to={route.path}
            >
              {route.name}
            </Button>
          ))}
          <Button sx={{ my: 2, color: "white" }}>Theme: {theme}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
