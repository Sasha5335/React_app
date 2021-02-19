import React, { Component } from 'react';
import styles from './RightSection.module.scss';
import CreateCalendarDays from './CreateCalendarDays';


export default class CreateCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { daysWeek, day, month, year } = this.props;

    return (
      <>
        <table>
          <thead>
            <tr className={styles.daysWeek}>
              {daysWeek.map((name, index) =>
                <th className={styles.daysWeek} key={index}>{name[0]}</th>
              )}
            </tr>
            <CreateCalendarDays day={day} month={month} year={year} />
          </thead>
        </table>
      </>
    );
  }
}

