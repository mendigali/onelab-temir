import { useState, useContext, createContext } from "react";
import { translations } from "./translations";

export type Language = "ru" | "kk" | "en";

interface LocalizationInterface {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
}

const LocalizationContext = createContext<LocalizationInterface>({
  language: "ru",
  setLanguage: (lang: Language) => {},
  translations: translations,
});

interface LocalizationProps {
  children: JSX.Element;
}

const LocalizationProvider = ({ children }: LocalizationProps) => {
  const [language, setLanguage] = useState<Language>("ru");

  return (
    <LocalizationContext.Provider
      value={{
        language: language,
        setLanguage: (lang: Language) => setLanguage(lang),
        translations: translations,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationInterface => {
  const localization = useContext(LocalizationContext);
  return { ...localization };
};

export default LocalizationProvider;
