import React, { Component } from 'react';
import styles from './SignInForm.module.scss';
import { Formik, Form, Field } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validationInput';
import Input from '../Input';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = props => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        return (
          <Form className={styles.signInForm}>

            <div className={styles.signInInput}>
              <Input name='email' placeholder='Email' />
              <Input name='password' type='password' placeholder='Password' />
            </div>

            <div className={styles.checkBoxGroup}>

              <div className={styles.checkBoxForm}>
                <label>
                  <Field name="checkbox" type="checkbox" />
                Remember Me
                </label>
              </div>

              <div className={styles.link}>
                <a href="https://www.squadhelp.com/forgot_password.php  " target="_blank">Forgot Password</a>
              </div>

            </div>

            <div className={styles.btn}>
              <Field name="submit" type='submit' value='Login' />
            </div>

          </Form>
        );
      }}
    </Formik>
  );

};

export default SignInForm;
