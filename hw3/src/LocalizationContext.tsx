import { useState, useContext, createContext } from "react";
import { translations } from "./translations";

export type Language = "ru" | "kk" | "en";

interface LocalizationProviderProps {
  children: JSX.Element;
}

interface LocalizationHook {
  language: Language;
  setLanguage: any;
  translations: any;
}

const LocalizationContext = createContext<Language>("ru");
const ChangeLocalizationContext = createContext((lang: Language) => {});

const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const [language, setLanguage] = useState<Language>("ru");

  return (
    <LocalizationContext.Provider value={language}>
      <ChangeLocalizationContext.Provider
        value={(lang: Language) => setLanguage(lang)}
      >
        {children}
      </ChangeLocalizationContext.Provider>
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationHook => {
  const language = useContext(LocalizationContext);
  return {
    language: language,
    setLanguage: useContext(ChangeLocalizationContext),
    translations: translations[language],
  };
};

export default LocalizationProvider;
