import React from 'react';
import styles from './RemoveTask.module.scss';
import Icon from '@mdi/react';
import { mdiBeakerRemoveOutline } from '@mdi/js';


const RemoveTask = (props) => {
  const { id, deleteTask } = props;
  console.log(id)

  const onDelete = () => {
    deleteTask(id);
  };

  return (
    <>
      <button type='submit' className={styles.removeButton}>
        <Icon className={styles.removeBtn} onClick={onDelete} path={mdiBeakerRemoveOutline} />
      </button>
    </>
  );
}

export default RemoveTask;


