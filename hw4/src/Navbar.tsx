import { Link } from "react-router-dom";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { useLocalization, Language } from "./LocalizationContext";
import { useUserContext } from "./UserContext";

const Navbar = () => {
  const { language, setLanguage, text } = useLocalization();
  const { isAuthenticated, setUser } = useUserContext();

  const ROUTES = [
    {
      path: "/",
      name: text.navbar.home,
    },
    {
      path: "/about",
      name: text.navbar.about,
    },
    {
      path: "/users",
      name: text.navbar.users,
    },
  ];

  const handleSelectChange = (e: SelectChangeEvent) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            lecture 3 react-router-dom
          </Typography>
          {ROUTES.map((route, index) => (
            <Button
              key={index}
              sx={{ my: 2, color: "white" }}
              component={Link}
              to={route.path}
            >
              {route.name}
            </Button>
          ))}
          {!isAuthenticated && (
            <Button
              sx={{ my: 2, color: "white" }}
              component={Link}
              to="/users/login"
            >
              {text.navbar.login}
            </Button>
          )}
          {isAuthenticated && (
            <Button
              sx={{ my: 2, color: "white" }}
              // onClick={() => setUser(null)}
            >
              {text.navbar.logout}
            </Button>
          )}
          <FormControl
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
            size="small"
          >
            <Select
              sx={{ color: "white" }}
              value={language as string}
              label="Translations"
              onChange={handleSelectChange}
            >
              <MenuItem value="ru">Русский</MenuItem>
              <MenuItem value="kk">Қазақша</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
