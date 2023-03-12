import React from "react";
import { Link } from "react-router-dom";
import forms from "../utils/forms";

function Register({ onLogin }) {
  const {values, errors,
    handleChange,
    handleSubmit} = forms(onLogin);

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form name="login-form" className="login__form form" onSubmit={handleSubmit}>
        <input
          id="email-input"
          name="email"
          type="text"
          className="login__input"
          minLength="2"
          maxLength="40"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error  imageName-input-error">{errors.email}</span>
        <input
          id="password-input"
          name="password"
          type="text"
          className="login__input"
          minLength="2"
          maxLength="200"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error  imageName-input-error">{errors.password}</span>
        <button type="submit" className="login__save-button">
          Зарегистрироваться
        </button>
        <Link to="/sign-in" className="login__auth-link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
