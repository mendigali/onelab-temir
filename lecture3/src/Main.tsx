import { useContext } from "react";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import { ThemeContext } from "./App";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <Typography variant="h1">Main page</Typography>
      <Typography variant="h3">Theme: {theme}</Typography>
    </>
  );
};

export default Main;
