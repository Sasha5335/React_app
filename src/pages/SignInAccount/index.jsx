import React from 'react';
// import styles from './SignInAccaunt.module.scss'
import SignInForm from '../../components/Forms/SignInForm';

const SignInAccaunt = props => {
  const onSubmit = values => {
  };
  return (
    <>
      <div class="container signup">
        <div class="signup_container">
          <div class="signup_info">
            <h2>LOGIN TO YOUR ACCOUNT</h2>
          </div>

          <SignInForm onSubmit={onSubmit} />

        </div>
      </div>
    </>
  );
};

export default SignInAccaunt;
