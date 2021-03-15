import React, { useState } from 'react';
import styles from './ToDoLIst.module.scss'
import TaskList from '../../components/TaskList'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';



const ToDoPage = props => {
  const [todoArray, setTodoArray] = useState([]);

  const addTask = values => {
    const newTodo = {
      body: values.body,
      id: Date.now(),
    };
    if (newTodo.body !== '') {
      setTodoArray([...todoArray, newTodo]);

    }
    return
  };

  const deleteTask = (id) => {
    const filteredTodos = todoArray.filter(
      currentTask => currentTask.id !== id
    );
    setTodoArray(filteredTodos);
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>ToDo list</h1>

        <Formik initialValues={{ body: '' }} onSubmit={(values, formikBag) => {
          addTask(values);
          formikBag.resetForm();
        }}>
          <Form>
            <Field name='body' />
            <ErrorMessage name='body' component='div' />
            <button type='submit' className={styles.addButton}>
              <Icon className={styles.addBtn} onSubmit={addTask} path={mdiPlus} />
            </button>
          </Form>
        </Formik>

        <TaskList todoArray={todoArray} deleteTask={deleteTask} />

      </div>
    </div >
  );
};

export default ToDoPage;