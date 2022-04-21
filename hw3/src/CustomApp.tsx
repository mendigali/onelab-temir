import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Users from "./Users";
import Navbar from "./Navbar";
import User from "./User";
import { Language, LocalizationContext } from "./LocalizationContext";
import { rawTranslations } from "./translations";

export const CustomApp: React.FC = () => {
  const [language, setLanguage] = useState<Language>("ru");
  const translations = rawTranslations[language];

  return (
    <LocalizationContext.Provider
      value={{ language, setLanguage, translations }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="users/account/profile/:userId" element={<User />} />
      </Routes>
    </LocalizationContext.Provider>
  );
};

// so it is your 'ex' LocalizationProvider component after decomposition
    // I separated your custom hook and context from component 