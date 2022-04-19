import { Container, Paper, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useLocalization } from "./LocalizationContext";
import users from "./users.json";

const User = () => {
  const { translations } = useLocalization();
  const params = useParams();

  const user = users.find((user) => user.id === Number(params.userId));
  const text = translations.user;

  return (
    <Container maxWidth="sm">
      <Paper elevation={5}>
        <Box m={3} p={3}>
          <Typography variant="h5">
            {text.userId}: {user?.id}
          </Typography>
          <Typography variant="h5">
            {text.name}: {user?.name}
          </Typography>
          <Typography variant="h5">
            {text.email}: {user?.email}
          </Typography>
          <Typography variant="h5">
            {text.country}: {user?.country}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default User;
