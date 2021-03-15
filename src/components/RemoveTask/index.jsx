import React from 'react';
import styles from './RemoveTask.module.scss';
import Icon from '@mdi/react';
import { mdiBeakerRemoveOutline } from '@mdi/js';


const RemoveTask = (props) => {
  const { id, deleteTask } = props;

  return (
    <>
      <Icon className={styles.removeBtn} onClick={() => { deleteTask(id) }} path={mdiBeakerRemoveOutline} />
    </>
  );
}

export default RemoveTask;


