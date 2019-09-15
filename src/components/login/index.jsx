import React from 'react';
import { connect } from 'react-redux';
import { submitLogin } from './login.actions';
import './login.scss';

export const Login = (props) => {
  handleKeyPress = e => {
    const input = e.target.name;
    const value = e.target.value;
  }
  return (
    <div className="login-page">
     
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