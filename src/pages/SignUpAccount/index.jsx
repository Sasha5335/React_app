import React from 'react';
// import styles from './SignUpAccount.module.scss'
import SignUpForm from '../../components/Forms/SignUpForm';

const SignUpAccaunt = props => {
  const onSubmit = values => {
  };
  return (
    <>
      <div class="signup_container">

        <div class="signup_info">
          <h2>CREATE AN ACCOUNT</h2>
          <h4>We always keep your name and email address private.</h4>
        </div>

        <div class="signup_form">
          <div class="form_wrapper">
            <SignUpForm onSubmit={onSubmit} />
          </div>
        </div>

      </div>
    </>
  );
};

export default SignUpAccaunt;
