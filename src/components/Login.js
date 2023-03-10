import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
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
      <h2 className="login__title">Вход</h2>
      <form name="login-form" className="login__form" onSubmit={handleSubmit}>
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
        <button type="submit" className="login__save-button">
          Войти
        </button>
        <Link to="" className="login__auth-link"></Link>
      </form>
    </div>
  );
}

export default Login;
