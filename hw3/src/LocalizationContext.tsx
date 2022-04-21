import { createContext, useContext } from "react";
import { rawTranslations } from "./translations";

export type Language = "ru" | "kk" | "en";

type ContextProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: typeof rawTranslations[Language];
};

export const LocalizationContext = createContext<ContextProps>({
  language: "ru",
  setLanguage: () => {},
  translations: rawTranslations['ru'],
});

export const useLocalization = () => useContext(LocalizationContext);

// Do not mess your code with creating several contexts for only one mission :)
// I also renamed your translations object to rawTranslations, because it leads variable declaration error