import { Typography } from "@mui/material";
import { useLocalization } from "./LocalizationContext";

const Main = () => {
  const { text } = useLocalization();
  return (
    <>
      <Typography variant="h1" align="center">
        {text.home.title}
      </Typography>
      <Typography variant="body1" align="center">
        {text.home.description}
      </Typography>
    </>
  );
};

export default Main;
