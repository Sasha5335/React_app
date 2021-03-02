import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationInput';
import Input from '../Input';


const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  checkbox: false,
};

const SignInForm = props => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    // onSubmit={(value) => { console.log(value) }}
    >
      {formikProps => {
        return (

          <Form className={styles.signUpForm}>

            <div className={styles.signUpInput}>
              <Input name='firstName' placeholder='First name' />
              <Input name='lastName' placeholder='Last name' />
              <Input name='displayName' placeholder='Display Name' />
              <Input name='email' placeholder="Email Address" />
              <Input name='password' type='password' placeholder='Password' />
              <Input name='passwordConfirm' type='password' placeholder="Password Confirmation" />
            </div>

            <div id="checkboxGroup">

              <div className={styles.radioBoxForm}>
                <label>
                  <Field name="radio" type="radio" />
                  Join As a Buyer <br />
                  <span> I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                </label>
              </div>

              <div className={styles.radioBoxForm}>
                <label>
                  <Field name="radio" type="radio" />
                  Join As a Creative or Marketplace Seller <br />
                  <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                </label>
              </div>

              <div className={styles.checkBoxForm}>
                <label>
                  <Field name="checkbox" type="checkbox" />
                  Allow Squadhelp to send marketing/promotional offers from time to time
                </label>
              </div>
            </div>

            <div className={styles.btn}>
              <Field name="submit" type='submit' value='Create account' />
            </div>

            <div className={styles.link}>
              <p>By clicking this button, you agree to our <a href="https://www.squadhelp.com/Terms&amp;Conditions" target="_blank">Terms of Service</a></p>
            </div>

          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
