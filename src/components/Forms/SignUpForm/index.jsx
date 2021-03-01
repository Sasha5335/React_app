import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';
import './SignUpForm.scss';
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
      initialValues={initialValues} validationSchema={SIGN_IN_SCHEMA} onSubmit={props.onSubmit} >
      {formikProps => {
        return (

          <Form classnames='signUpForm'>

            <div className='signUpInputGroup'>

              <div className='firstName errorInputMasage'>
                <Input name='firstName' placeholder='First name' />
              </div>
              <div className='lastName errorInputMasage'>
                <Input name='lastName' placeholder='Last name' />
              </div>
              <div className='displayName errorInputMasage'>
                <Input name='displayName' placeholder='Display Name' />
              </div>
              <div className='email errorInputMasage'>
                <Input name='email' placeholder="Email Address" />
              </div>
              <div className='password errorInputMasage'>
                <Input name='password' type='password' placeholder='Password' />
              </div>
              <div className='passwordConfirm errorInputMasage'>
                <Input name='password' type='password' placeholder="Password Confirmation" />
              </div>
            </div>

            <div id="checkboxGroup">

              <div className='radioBoxForm'>
                <label>
                  <Field type="radio" name="checked" value="One" />
                  Join As a Buyer <br />
                  <span> I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                </label>
              </div>

              <div className='radioBoxForm'>
                <label>
                  <Field type="radio" name="checked" value="Two" />
                  Join As a Creative or Marketplace Seller <br />
                  <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                </label>
              </div>

              <div className='checkBoxForm'>
                <label>
                  <Field type="checkbox" name="checked" value="Tree" />
                  Allow Squadhelp to send marketing/promotional offers from time to time
                </label>
              </div>
            </div>

            <div className='btn'>
              <Field type='submit' value='Create account' />
            </div>

            <div className="link">
              <p>By clicking this button, you agree to our <a class="terms" href="https://www.squadhelp.com/Terms&amp;Conditions" target="_blank">Terms of Service</a></p>
            </div>

          </Form>
        );
      }}
    </Formik>
  );

};

export default SignInForm;
