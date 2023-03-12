import React from "react";
import { Link } from "react-router-dom";
import forms from "../utils/forms";

function Login({ onLogin }) {
  const { values, errors, handleChange, handleSubmit } = forms(onLogin);

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form name="login-form form" className="login__form form" onSubmit={handleSubmit}>
        <input
          id="email-input"
          name="email"
          type="email"
          className="login__input"
          minLength="2"
          maxLength="40"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error  imageName-input-error">
          {errors.email}
        </span>
        <input
          id="password-input"
          name="password"
          type="text"
          className="login__input"
          minLength="8"
          maxLength="200"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error  imageName-input-error">
          {errors.password}
        </span>
        <button type="submit" className="login__save-button">
          Войти
        </button>
        <Link to="" className="login__auth-link"></Link>
      </form>
    </div>
  );
}

export default Login;
