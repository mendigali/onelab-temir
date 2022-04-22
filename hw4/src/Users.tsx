import React, { useRef, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Paper,
  Box,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocalization } from "./LocalizationContext";
import usersJson from "./users.json";

const Users = () => {
  const [users, setUsers] = useState(usersJson);
  const { text } = useLocalization();
  const searchRef = useRef<HTMLInputElement>();

  const handleSearchChange = () => {
    const search =
      searchRef && searchRef.current ? searchRef.current.value : "";

    const filteredUsers = usersJson.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={5}>
        <Box m={3} py={3}>
          <Typography variant="h4" align="center">
            {text.users.listTitle}
          </Typography>
          <TextField
            label="Search user"
            variant="filled"
            fullWidth
            inputRef={searchRef}
            onChange={handleSearchChange}
          />
          <List>
            {users.map((user) => (
              <React.Fragment key={user.id}>
                <ListItem component={Link} to={`/users/${user.id}`}>
                  <ListItemText>{user.name}</ListItemText>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default Users;
