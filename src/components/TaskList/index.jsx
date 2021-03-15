import React from 'react';
import styles from './TaskList.module.scss';
import RemoveTask from '../RemoveTask';


const TaskList = (props) => {
  const { todoArray, deleteTask } = props;

  return (
    <>
      <section className={styles.todoArrMasage}>

        {todoArray.map(task => {
          const { id, body } = task;
          return <article className={styles.todoMasage} key={id}>
            {body}

            <RemoveTask deleteTask={deleteTask} {...task} />

          </article>
        })}

      </section>
    </>
  );
}

export default TaskList;


