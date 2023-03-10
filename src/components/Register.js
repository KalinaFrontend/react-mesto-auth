import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Register({ onLogin }) {
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues({});
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form name="login-form" className="login__form" onSubmit={handleSubmit}>
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
