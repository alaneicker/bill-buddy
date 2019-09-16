import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitLogin } from './login.actions';

export const Login = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleKeyPress = e => {
    const input = e.target.name;
    const value = e.target.value;
  }

  const handleSubmit = () => {
    setSubmitted(true);
  }

  return (
    <div className="pre-login-layout">
      <div className="pre-login-layout__content">
        <img src="/assets/images/wallet.svg" alt="image of a wallet" />
        <h1>Bill Buddy</h1>
        <h2 className="margin-bottom-24">Account Login</h2>
        <form autoComplete="off" className={`margin-bottom-24 ${submitted ? 'is-submitted' : ''}`} noValidate>
          {invalidLogin
            ? <div className="margin-bottom-16">
                <div className="flash-message flash-message--error">Username or Password is Invalid</div>
              </div>
            : null}
          <div className="margin-bottom-16">
            <label className="label label--uppercase">Username</label>
            <input className="text-input" name="username" required />
            <div className="hint hint--error">Please enter your username</div>
          </div>
          <div className="margin-bottom-24">
            <label className="label label--uppercase">Password</label>
            <input className="text-input" name="username" required />
            <div className="hint hint--error">Please enter your password</div>
          </div>
          <button type="button" className="btn btn--block btn--secondary" onClick={handleSubmit}>Login</button>
        </form>
        <p><Link className="link-light" to="/reset-password">Forgot your password?</Link></p>
        <p>Dont have an account? <Link className="link-light" to="/create-account">Create a new account</Link></p>
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