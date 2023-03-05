import React from "react";
import { Link, useLocation  } from "react-router-dom";
import logo from "../images/header-logo.svg";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logo} alt="Логотип Место Россия" className="logo" />
      {location.pathname === '/sign-in' && (
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      )}
      {location.pathname === '/sign-up' && (
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      )}
    </header>
  );
}

export default Header;
