import { useEffect, useState } from "react";
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
import { TodoList, Todo } from "./TodoList";
import AddField from "./AddField";

const App = () => {
  const [todos, setTodos] = useState([] as Todo[]);
  const [prevTodos, setPrevTodos] = useState([] as Todo[]);
  const [newTodoItem, setNewTodoItem] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>("success");

  const handleCheckboxClick = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
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
    if (newTodoItem !== "") {
      setPrevTodos(todos);
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: newTodoItem,
          isDone: false,
        },
      ]);
      setNewTodoItem("");
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason !== "clickaway") setIsSnackbarOpened(false);
  };

  useEffect(() => {
    if (prevTodos.length > todos.length) {
      const deletedTodo = prevTodos.find((todo) => !todos.includes(todo));
      setSnackbarMessage(`Deleted: ${deletedTodo!.text}`);
      setSnackbarSeverity("error");
      setIsSnackbarOpened(true);
    } else if (prevTodos.length < todos.length) {
      const addedTodo = todos.find((todo) => !prevTodos.includes(todo));
      setSnackbarMessage(`Added: ${addedTodo!.text}`);
      setSnackbarSeverity("success");
      setIsSnackbarOpened(true);
    }
  }, [todos.length, todos, prevTodos]);

  return (
    <Container maxWidth="md">
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={isSnackbarOpened}
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
            value={searchValue}
            handleChange={(e) => setSearchValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TodoList
            todos={todos}
            searchValue={searchValue}
            handleCheckboxClick={handleCheckboxClick}
            handleDeleteIconClick={handleDeleteIconClick}
          />
        </Grid>
        <Grid item xs={12}>
          <AddField
            value={newTodoItem}
            handleButtonClick={handleAddButtonClick}
            handleChange={(e) => setNewTodoItem(e.target.value)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

// Nice Job!!
// fix warnings in console
  // remove unused modules (useRef)
  // if the length of array todos is changed, aren't values todos and prevTodo also changed?
  //(in useEffect write all list of dependencies 92 code line, 104 slide 2nd pres-n)

// maybe you can use decomposition, better to divide App.tsx code in Todo Component, App returns <Todo/>
// write shortly if you can for handlers, functions
// follow naming conventions 
//for hooks and variables:
  // searchValue - searchValue ...
  // setSnackbarOpen would make think it is function that sets true to snackbar, but it is not,
    // so use SetIsSnackbarOpened that sets true or false for isSnackbarOpene
  //...etc
