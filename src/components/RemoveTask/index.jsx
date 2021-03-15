import React from 'react';
import styles from './RemoveTask.module.scss';
import Icon from '@mdi/react';
import { mdiBeakerRemoveOutline } from '@mdi/js';


const RemoveTask = (props) => {
  const { id, deleteTask } = props;

  const onDelete = () => {
    deleteTask(id);
  };

  return (
    <>
      <Icon className={styles.removeBtn} onClick={onDelete} path={mdiBeakerRemoveOutline} />
    </>
  );
}

export default RemoveTask;


