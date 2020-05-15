import React from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import './index.css'

const Navbar = ({ language, changeLanguage }) => {

  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to={`/${language}`}>Home</Link>
        </li>
        <li>
          <Link to={`/${language}/about`}>About</Link>
        </li>
        <li>
          <Link to={`/${language}/works`}>Works</Link>
        </li>
        <div>
          {language === "fr" && (
            <Link to={location.pathname.replace(language, 'en')}>
              <img
                onClick={() => changeLanguage('en')}
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                alt="switch to english"
                style={{ height: "25px", cursor: "pointer" }}
              />
            </Link>
          )}
          {language === "en" && (
            <Link to={location.pathname.replace(language, 'fr')}>
              <img
                onClick={() => changeLanguage('fr')}
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                alt="mettre en français"
                style={{ height: "25px", cursor: "pointer" }}
              />
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar
