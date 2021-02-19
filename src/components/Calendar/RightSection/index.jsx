import React, { Component } from 'react';
import styles from './RightSection.module.scss';
import CreateCalendar from './CreateCalendar';

export default class RightSectionCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { daysWeek, day, month, monthStr, year } = this.props;

    return (
      <>
        <div className={styles.rightSection}>
          <h3 className={styles.monthYear}>
            {monthStr} {year}
          </h3>
          <div className={styles.calendar}>
            <CreateCalendar daysWeek={daysWeek} day={day} month={month} year={year} />
          </div>
        </div>
      </>
    )
  }
}
