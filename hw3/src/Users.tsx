import {
  List,
  ListItem,
  ListItemText,
  Container,
  Paper,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocalization } from "./LocalizationContext";
import users from "./users.json";

const Users = () => {
  const { translations } = useLocalization();

  const text = translations.users;

  return (
    <Container maxWidth="sm">
      <Paper elevation={5}>
        <Box m={3} py={3}>
          <Typography variant="h4" align="center">
            {text.listTitle}
          </Typography>
          <List>
            {users.map((user) => (
              <>
                <ListItem
                  key={user.id}
                  component={Link}
                  to={`/users/account/profile/${user.id}`}
                >
                  <ListItemText>{user.name}</ListItemText>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default Users;
