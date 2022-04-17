import { ChangeEvent, useEffect, useState, useRef } from "react";
import {
  Alert,
  AlertColor,
  Box,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import SearchField from "./SearchField";
import TodoList from "./TodoList";
import AddField from "./AddField";
import { Todo } from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([] as Todo[]);
  const [prevTodos, setPrevTodos] = useState([] as Todo[]);
  const [addTextField, setAddTextField] = useState("");
  const [searchTextField, setSearchTextField] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>("success");

  const handleCheckboxClick = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  const handleDeleteIconClick = (id: number) => {
    setPrevTodos(todos);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddButtonClick = () => {
    if (addTextField !== "") {
      setPrevTodos(todos);
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: addTextField,
          done: false,
        },
      ]);
      setAddTextField("");
    }
  };

  const handleSearchTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchTextField(e.target.value);
  };

  const handleAddTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddTextField(e.target.value);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (prevTodos.length > todos.length) {
      const deletedTodo = prevTodos.find((todo) => !todos.includes(todo));
      setSnackbarMessage(`Deleted: ${deletedTodo!.text}`);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } else if (prevTodos.length < todos.length) {
      const addedTodo = todos.find((todo) => !prevTodos.includes(todo));
      setSnackbarMessage(`Added: ${addedTodo!.text}`);
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    }
  }, [todos.length]);

  return (
    <Container maxWidth="md">
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
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
        <Grid item xs={12}>
          <SearchField
            value={searchTextField}
            handleChange={handleSearchTextFieldChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TodoList
            todos={todos}
            searchTextField={searchTextField}
            handleCheckboxClick={handleCheckboxClick}
            handleDeleteIconClick={handleDeleteIconClick}
          />
        </Grid>
        <Grid item xs={12}>
          <AddField
            value={addTextField}
            handleButtonClick={handleAddButtonClick}
            handleChange={handleAddTextFieldChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
