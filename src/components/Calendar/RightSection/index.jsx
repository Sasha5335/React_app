import React, { Component } from 'react';
import styles from './RightSection.module.scss';
import CreateCalendar from './CreateCalendar';

export default class RightSectionCalendar extends Component {
  state = {
    currentData: new Date(),
  };

  render() {
    const { currentData } = this.state;

    return (
      <>
        <div className={styles.rightSection}>
          <h3 className={styles.monthYear}>
            {currentData.toLocaleString('en', { month: 'long' })} {currentData.getFullYear()}
          </h3>
          <div className={styles.calendar}>
            <CreateCalendar currentData={currentData} />
          </div>
        </div>
      </>
    )
  }
}
