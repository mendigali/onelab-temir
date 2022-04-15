import { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      done: false,
    },
    {
      id: 2,
      text: "Learn Redux",
      done: false,
    },
    {
      id: 3,
      text: "Learn TypeScript",
      done: false,
    },
  ]);

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" align="center">
          Todo list of Temir Mendigali
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label="Search todo item"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="large" fullWidth>
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List>
            {todos.map((todo) => (
              <Box key={todo.id} my={1}>
                <ListItem
                  secondaryAction={
                    !todo.done && (
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    )
                  }
                >
                  <ListItemText primary={todo.text} />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="New todo item"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" size="large" fullWidth>
            Add new item
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
