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
            <div className={styles.todoMasageWrapper}>{body}</div>

            <RemoveTask deleteTask={deleteTask} id={id} />

          </article>
        })}

      </section>
    </>
  );
}

export default TaskList;


