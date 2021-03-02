import React from 'react';
import styles from './SignInAccount.module.scss'
import SignInForm from '../../components/Forms/SignInForm';

const SignInAccount = props => {
  const onSubmit = values => {
  };
  return (
    <>
      <section className={styles.signinContainer}>
        <div className={styles.container}>

          <div className={styles.signinInfo}>
            <h2>LOGIN TO YOUR ACCOUNT</h2>
          </div>

          <div className={styles.signinForm}>
            <div className={styles.formWrapper}>
              <SignInForm onSubmit={onSubmit} />
            </div>
          </div>

        </div>
      </section >
    </>
  );
};

export default SignInAccount;
