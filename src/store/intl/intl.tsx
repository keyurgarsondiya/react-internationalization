import React, { useContext, useState } from 'react';
import { LANGAUGES, LanguageOptions } from '../../constants';
import { Translations } from '../../types';

export interface IntlContextProps {
  currentLanguage: LanguageOptions;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<LanguageOptions>>;
  translations: Translations;
}

const IntlContext = React.createContext<IntlContextProps>({
  currentLanguage: LanguageOptions.EnGb,
  setCurrentLanguage: () => void 0,
  translations: LANGAUGES[LanguageOptions.EnGb],
});

export const IntlProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(LanguageOptions.EnGb);

  return (
    <IntlContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        translations: LANGAUGES[currentLanguage],
      }}
    >
      {children}
    </IntlContext.Provider>
  );
};

export const useIntl = () => useContext<IntlContextProps>(IntlContext);
