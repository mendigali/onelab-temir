import { ChangeEvent, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import SearchField from "./SearchField";
import TodoList from "./TodoList";
import AddField from "./AddField";
import { Todo } from "./TodoList";

interface AppState {
  todoList: Todo[];
  addTextField: string;
  searchTextField: string;
}

function App() {
  const [todos, setTodos] = useState<AppState>({
    todoList: [],
    addTextField: "",
    searchTextField: "",
  });

  const handleCheckboxClick = (id: number) => {
    setTodos({
      ...todos,
      todoList: todos.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    });
  };

  const handleDeleteIconClick = (id: number) => {
    setTodos({
      ...todos,
      todoList: todos.todoList.filter((todo) => todo.id !== id),
    });
  };

  const handleAddButtonClick = () => {
    if (todos.addTextField !== "") {
      setTodos({
        ...todos,
        todoList: [
          ...todos.todoList,
          {
            id: todos.todoList.length + 1,
            text: todos.addTextField,
            done: false,
          },
        ],
        addTextField: "",
      });
    }
  };

  const handleSearchTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodos({
      ...todos,
      searchTextField: e.target.value,
    });
  };

  const handleAddTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodos({
      ...todos,
      addTextField: e.target.value,
    });
  };

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
        <Grid item xs={12}>
          <SearchField
            value={todos.searchTextField}
            handleChange={handleSearchTextFieldChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TodoList
            todos={todos.todoList}
            searchTextField={todos.searchTextField}
            handleCheckboxClick={handleCheckboxClick}
            handleDeleteIconClick={handleDeleteIconClick}
          />
        </Grid>
        <Grid item xs={12}>
          <AddField
            value={todos.addTextField}
            handleButtonClick={handleAddButtonClick}
            handleChange={handleAddTextFieldChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
