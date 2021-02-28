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

          <div class="row">
            <div class="field-container join-as">
              Join As a Buyer <span> I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
              <input id="join-as-client" class="example join-as" name="user_is" value="Buyer" type="radio" />
            </div>
          </div>

          <div class="row">
            <div class="field-container join-as">
              Join As a Creative or Marketplace Seller <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
              <input id="join-as-creative" class="example join-as" name="user_is" value="Creative" type="radio" />
            </div>
          </div>

          <div class="row">
            <div class="field-container">
              <input name="account" type="checkbox" class="checkbox" id="terms-conditions" />
            </div>
          </div>

          <div class="row">
            <div class="field-container">
              <button class="create-account-button g-recaptcha" data-sitekey="6LfsMrsUAAAAALB2kNwIJ6dePxIstFWKlMzZp6en" data-callback="signUpSubmitCaptcha">Create account</button>
            </div>
          </div>

          <div class="fineprint">
            <p>By clicking this button, you agree to our <a class="terms" href="https://www.squadhelp.com/Terms&amp;Conditions" target="_blank">Terms of Service</a></p>
          </div>

        </div>
      </section >
    </>
  );
};

export default SignUpAccount;
