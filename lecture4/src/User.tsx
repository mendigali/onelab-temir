import { Container, Paper, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useLocalization } from "./LocalizationContext";
import users from "./users.json";

const User = () => {
  const { text } = useLocalization();
  const params = useParams();

  const user = users.find((user) => user.id === Number(params.userId));

  return (
    <Container maxWidth="sm">
      <Paper elevation={5}>
        <Box m={3} p={3}>
          <Typography variant="h5">
            {text.user.userId}: {user?.id}
          </Typography>
          <Typography variant="h5">
            {text.user.name}: {user?.name}
          </Typography>
          <Typography variant="h5">
            {text.user.email}: {user?.email}
          </Typography>
          <Typography variant="h5">
            {text.user.country}: {user?.country}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default User;
