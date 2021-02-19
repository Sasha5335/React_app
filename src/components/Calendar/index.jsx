import React, { Component } from 'react'
import styles from './Calendar.module.scss'
import LeftSectionCalendar from './LeftSection'
import RightSectionCalendar from './RightSection'

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      currentData: new Date(),
      day: new Date().getDate(),
      month: new Date().getMonth(),
      monthStr: new Date().toLocaleString('en', { month: 'long' }),
      year: new Date().getFullYear(),
    };
  }

  render() {
    const { daysWeek, currentData, day, month, monthStr, year } = this.state;
    return (
      <>
        <section className={styles.section}>
          <div className={styles.wrapper}>
            <LeftSectionCalendar day={day} monthStr={monthStr} />
            <RightSectionCalendar daysWeek={daysWeek} currentData={currentData} day={day} month={month} monthStr={monthStr} year={year} />
          </div>
        </section>
      </>
    )
  }
}

