// LoginForm.js

import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
