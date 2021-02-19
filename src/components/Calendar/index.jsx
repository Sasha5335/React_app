import React, { Component } from 'react'
import styles from './Calendar.module.scss'
import LeftSectionCalendar from './LeftSection'
import RightSectionCalendar from './RightSection'

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <section className={styles.section}>
          <div className={styles.wrapper}>
            <LeftSectionCalendar />
            <RightSectionCalendar />
          </div>
        </section>
      </>
    )
  }
}

