import React, { Component } from 'react'
import styles from './LeftSection.module.scss'

export default class LeftSectionCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <div className={styles.leftSection}>
          <h3 className={styles.day}>{new Date().toLocaleString('en', { month: 'long' })}</h3>
          <p>{new Date().getDate()}</p>
        </div>
      </>
    )
  }
}
