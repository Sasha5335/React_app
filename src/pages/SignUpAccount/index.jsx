import React from 'react';
import styles from './SignUpAccount.module.scss'
import SignUpForm from '../../components/Forms/SignUpForm';

const SignUpAccount = props => {
  const onSubmit = values => {
  };
  return (
    <>
      <section className={styles.signupContainer}>
        <div className={styles.container}>

          <div className={styles.signupInfo}>
            <h2>CREATE AN ACCOUNT</h2>
            <h4>We always keep your name and email address private.</h4>
          </div>

          <div className={styles.signupForm}>
            <div className={styles.formWrapper}>
              <SignUpForm onSubmit={onSubmit} />
            </div>
          </div>

        </div>
      </section >
    </>
  );
};

export default SignUpAccount;
