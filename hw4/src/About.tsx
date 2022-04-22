import { Typography } from "@mui/material";
import { useLocalization } from "./LocalizationContext";

const About = () => {
  const { text } = useLocalization();

  return (
    <>
      <Typography variant="h1" align="center">
        {text.about.title}
      </Typography>
      <Typography variant="body1" align="center">
        {text.about.description}
      </Typography>
    </>
  );
};

export default About;
