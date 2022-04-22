import { useState, useContext, createContext } from "react";
import translations from "./translations.json";

type TranslationsJSON = typeof translations.ru;
export type Language = "ru" | "kk" | "en";

interface LocalizationInterface {
  language: Language;
  setLanguage: (lang: Language) => void;
  text: TranslationsJSON;
}

const LocalizationContext = createContext<LocalizationInterface>({
  language: "ru",
  setLanguage: (lang: Language) => {},
  text: translations.ru,
});

const LocalizationProvider = ({ children }: { children: JSX.Element }) => {
  const [language, setLanguage] = useState<Language>("ru");

  return (
    <LocalizationContext.Provider
      value={{
        language: language,
        setLanguage: (lang: Language) => setLanguage(lang),
        text: translations[language],
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationInterface => {
  return useContext(LocalizationContext);
};

export default LocalizationProvider;
