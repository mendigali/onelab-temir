import { useContext } from "react";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import { ThemeContext } from "./App";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <Typography variant="h1">About page</Typography>
      <Typography variant="h3">Theme: {theme}</Typography>
    </>
  );
};

export default About;
