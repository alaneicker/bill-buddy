import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitLogin } from './login.actions';
import Header from '../header';

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
    <Fragment>
      <Header />
      <div className="pre-login-layout">
        <div className="pre-login-layout__content">
          <h1 className="margin-bottom-24">Account Login</h1>
          <form autoComplete="off" className={`margin-bottom-24 ${submitted ? 'is-submitted' : ''}`} noValidate>
            {invalidLogin
              ? <div className="margin-bottom-16">
                  <div className="flash-message flash-message--error">Username or Password is Invalid</div>
                </div>
              : null}
            <div className="margin-bottom-16">
              <label className="label label--uppercase">Username</label>
              <div className="margin-bottom-4"></div>
              <input className="text-input" name="username" required />
              <div className="hint hint--error">Please enter your username</div>
            </div>
            <div className="margin-bottom-24">
              <label className="label label--uppercase">Password</label>
              <div className="margin-bottom-4"></div>
              <input className="text-input" name="username" required />
              <div className="hint hint--error">Please enter your password</div>
            </div>
            <button type="button" className="btn btn--block btn--secondary" onClick={handleSubmit}>Login</button>
          </form>
          <p><Link className="link-light" to="/reset-password">Forgot your password?</Link></p>
          <p>Dont have an account? <Link className="link-light" to="/create-account">Create a new account</Link></p>
        </div>
      </div>
    </Fragment>
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