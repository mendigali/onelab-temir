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
  isDone: boolean;
};

type TodoListProps = {
  todos: Todo[];
  searchValue: string;
  handleCheckboxClick: (id: number) => void;
  handleDeleteIconClick: (id: number) => void;
};

export const TodoList = ({
  todos,
  searchValue,
  handleCheckboxClick,
  handleDeleteIconClick,
}: TodoListProps) => {
  return (
    <>
      {todos.length === 0 && (
        <Typography align="center">
          Your todo list is empty. Add some items to your list.
        </Typography>
      )}
      <List>
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((todo) => (
            <Box key={todo.id} my={1}>
              <ListItem
                selected={todo.isDone}
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
                  checked={todo.isDone}
                  onClick={() => handleCheckboxClick(todo.id)}
                />
                <ListItemText primary={todo.text} />
              </ListItem>
              <Divider />
            </Box>
          ))}
      </List>
    </>
  );
};

// use right naming convention as in App.tsx explanation
//maybe you can make TodoList as react funct component? to show that TodoList has ToDoListProps not its params, but it is not necessary