import React, { useState } from 'react';
import styles from './ToDoLIst.module.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { mdiBeakerRemoveOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';



const ToDoPage = props => {
  const [todoArray, setTodoArray] = useState([]);

  const addTask = values => {
    const newTodo = {
      body: values.body,
      id: Date.now(),
      isDone: false,
    };
    setTodoArray([...todoArray, newTodo]);
  };

  const deleteTask = id => {

    const filteredTodos = todoArray.filter(
      currentTask => currentTask.id !== id
    );
    console.log(todoArray)
    setTodoArray(filteredTodos);
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>ToDo list</h1>

        <Formik initialValues={{ body: '' }} onSubmit={addTask}>
          <Form>
            <Field name='body' />
            <ErrorMessage name='body' component='div' />
            <button><Icon className={styles.addBtn} onClick={addTask} path={mdiPlus} /></button>
          </Form>
        </Formik>

        <section className={styles.todoArrMasage}>
          {todoArray.map(task => {
            const { id, body } = task;
            return <article className={styles.todoMasage} key={id}>
              {body}
              <Icon className={styles.removeBtn} onClick={deleteTask} path={mdiBeakerRemoveOutline} />
            </article>
          })}

        </section>
      </div>
    </div>
  );
};

export default ToDoPage;