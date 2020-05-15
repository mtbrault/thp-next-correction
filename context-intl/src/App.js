import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import LanguageContext from './LanguageContext';
import Home from './Home';
import fr from './translation/fr';
import en from './translation/en';
import de from './translation/de';

const messages = {
  fr,
  en,
  de,
}

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <LanguageContext.Provider value={{ language: setLanguage }}>
        <Home modify={setLanguage} />
      </LanguageContext.Provider>
    </IntlProvider>
  );
}

export default App;
