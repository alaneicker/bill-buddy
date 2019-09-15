import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitLogin } from './login.actions';

export const Login = (props) => {
  const handleKeyPress = e => {
    const input = e.target.name;
    const value = e.target.value;
  }
  return (
    <div className="pre-login-layout">
      <div className="pre-login-layout__content">
        <img src="/assets/images/wallet.svg" alt="image of a wallet" />
        <h1>Bill Buddy</h1>
        <h2 className="margin-bottom-32">Account Login</h2>
        <form className="margin-bottom-24" noValidate>
          <div className="margin-bottom-16">
            <label className="label label--uppercase">Username</label>
            <input className="text-input" name="username" />
          </div>
          <div className="margin-bottom-24">
            <label className="label label--uppercase">Password</label>
            <input className="text-input" name="username" />
          </div>
          <button className="btn btn--block btn--secondary">Login</button>
        </form>
        <p><Link className="link link--light" to="/reset-password">Forgot your password?</Link></p>
        <p>Dont have an account? <Link className="link link--light" to="/create-account">Create a new account</Link></p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  const { username, password } = loginReducer;

  return {
    username,
    password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogin(payload) {
      dispatch(submitLogin(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);