import React, { useState } from 'react';
import styles from './Todo.module.scss'
import { Formik, Form, Field } from 'formik';

const Todo = props => {
  const [tasks, setTask] = useState([
    {
      id: Date.now(),
      isDone: false,
      body: 'Напоминание',
    }
  ])

  const addTask = (values) => {
    const newTask = {
      body: values.body,
      id: Date.now(),
      isDone: false,
    }
    setTask([...tasks, newTask]);

  }

  return (
    <>
      <div className={styles.container}>
        <h1>To-do list</h1>

        <Formik initialValues={{ body: '' }} onSubmit={addTask}>
          <Form>
            <div className={styles.addElements}>

              <label>
                <Field name='body'>
                  {({ field }) => {
                    return (
                      <input type="text" className={styles.input} {...field} placeholder="Add an element" />
                    );
                  }}
                </Field>
              </label>

              <Field name="submit" className={styles.btn} type='submit' value='&#10133;' />

            </div>
          </Form>
        </Formik>

        <div className={styles.elementList}>
          <ul >{tasks.map(t => {
            console.log(JSON.stringify(t.body));
            <li key={t.id}> {JSON.stringify(t.body)} <span className={styles.delete} >&#10060;</span></li>
          })}

          </ul>

        </div>

      </div >
    </>
  );
};

export default Todo;
