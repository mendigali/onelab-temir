import { Typography } from "@mui/material";
import { useLocalization } from "./LocalizationContext";

const Main = () => {
  const { translations } = useLocalization();

  const text = translations.home;

  return (
    <>
      <Typography variant="h1" align="center">
        {text.title}
      </Typography>
      <Typography variant="body1" align="center">
        {text.description}
      </Typography>
    </>
  );
};

export default Main;
