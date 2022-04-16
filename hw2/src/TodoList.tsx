import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoListProps = {
  todos: Todo[];
  searchTextField: string;
  handleCheckboxClick: (id: number) => void;
  handleDeleteIconClick: (id: number) => void;
};

const TodoList = ({
  todos,
  searchTextField,
  handleCheckboxClick,
  handleDeleteIconClick,
}: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <Typography align="center">
        Your todo list is empty. Add some items to your list.
      </Typography>
    );
  }

  return (
    <List>
      {todos
        .filter((todo) =>
          todo.text.toLowerCase().includes(searchTextField.toLowerCase())
        )
        .map((todo) => (
          <Box key={todo.id} my={1}>
            <ListItem
              selected={todo.done}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteIconClick(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Checkbox
                checked={todo.done}
                onClick={() => handleCheckboxClick(todo.id)}
              />
              <ListItemText primary={todo.text} />
            </ListItem>
            <Divider />
          </Box>
        ))}
    </List>
  );
};

export default TodoList;
