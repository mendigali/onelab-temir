import { Routes, Route } from "react-router-dom";
import LocalizationProvider from "./LocalizationContext";
import Main from "./Main";
import About from "./About";
import Users from "./Users";
import Navbar from "./Navbar";
import User from "./User";

const App = () => {
  return (
    <LocalizationProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="users/account/profile/:userId" element={<User />} />
        </Routes>
      </>
    </LocalizationProvider>
  );
};

export default App;
