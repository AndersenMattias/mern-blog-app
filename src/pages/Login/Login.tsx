import Button from 'components/Button/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

const Login = (): JSX.Element => {
  return (
    <>
      <div>
        <h4>Sign in</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          required
          id='email'
          placeholder='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <input
          required
          name='password'
          placeholder='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />

        <input type='checkbox' placeholder='remember me' />

        <Button type='submit' text='Sign In' colour='btn--primary' />

        <div>
          <div>
            <Link to='#'>Forgot password?</Link>
          </div>
          <div>
            <Link to='#'>{"Don't have an account? Sign Up"}</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
