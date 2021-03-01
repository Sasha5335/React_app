import React from 'react';
import cx from 'classnames';
import styles from './Input.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Input = ({ name, ...rest }) => {
  return (
    <>
      <label>
        <Field name={name}>
          {({ field, form, meta }) => {
            const classNames = cx(styles.input,
              {
                [styles.validInput]: meta.touched && !meta.error,
                [styles.errorInput]: meta.touched && meta.error
              });

            return (
              <input type='text' {...field} className={classNames} {...rest} />
            );
          }}
        </Field>
        <ErrorMessage name={name} component='span' className='errorMessage' />
      </label>
    </>
  );
};

export default Input;
