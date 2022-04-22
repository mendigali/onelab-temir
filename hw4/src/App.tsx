import React from "react";
import { Routes, Route } from "react-router-dom";
import LocalizationProvider from "./LocalizationContext";
import UserProvider, { useUserContext } from "./UserContext";
import Main from "./Main";
import About from "./About";
import Users from "./Users";
import Navbar from "./Navbar";
import User from "./User";
import Login from "./Login";
import Registration from "./Registration";
import NotFound from "./NotFound";

const App = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <LocalizationProvider>
      <UserProvider>
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />
            {!isAuthenticated && (
              <>
                <Route path="users/login" element={<Login />} />
                <Route path="users/registration" element={<Registration />} />
                <Route path="users/:userId" element={<User />} />
              </>
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Fragment>
      </UserProvider>
    </LocalizationProvider>
  );
};

export default App;
