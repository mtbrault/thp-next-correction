import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Navbar from './components/Navbar'
import messagesFr from "./translations/fr";
import messagesEn from "./translations/en";
import './index.css'
const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLanguage(localStorage.getItem("lang"));
    }
  }, []);

  const changeLanguage = lang => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <div>
          <Navbar language={language} changeLanguage={changeLanguage} />

          <Switch>
            <Route path="/:lang/about" component={About} />
            <Route path="/:lang/works" component={Works} />
            <Route path="/:lang" component={Home} />
            <Route path="/" render={() => <Redirect to={`/${language}`} />} />
          </Switch>
        </div>
      </Router>
    </IntlProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
