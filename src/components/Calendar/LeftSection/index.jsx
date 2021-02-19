import React, { Component } from 'react'
import styles from './LeftSection.module.scss'

export default class LeftSectionCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { day, monthStr } = this.props;
    return (
      <>
        <div className={styles.leftSection}>
          <h3 className={styles.day}>{monthStr}</h3>
          <p>{day}</p>
        </div>
      </>
    )
  }
}
