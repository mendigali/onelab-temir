import { Typography } from "@mui/material";
import { useLocalization } from "./LocalizationContext";

const About = () => {
  const { translations } = useLocalization();

  const text = translations.about;

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

export default About;
