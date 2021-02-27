import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
          <Form>
            <Input name='email' placeholder='Email' />
            <Input name='password' type='password' placeholder='Password' />
            <Field type='submit' value='Submit' />
          </Form>
        );
      }}
    </Formik>
  );

};

export default SignInForm;
