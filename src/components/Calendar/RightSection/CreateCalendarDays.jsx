import React, { Component } from 'react';
import styles from './RightSection.module.scss';

import { startOfMonth, endOfMonth } from 'date-fns';

export default class CreateCalendarDays extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getMarkupCalendarDays = () => {
    const DAYS_IN_WEEK = 7
    const { day, month, year } = this.props;
    const result = [];
    const startDayOfMonth = startOfMonth(new Date(year, month, day));
    const daysInMonth = endOfMonth(new Date(year, month, day));
    let startDay = 1;

    for (let i = 0; i < (daysInMonth.getDate() + startDayOfMonth.getDate()) / DAYS_IN_WEEK; i++) {
      result[i] = []
      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        if ((i === 0 && j < startDayOfMonth.getDate()) || startDay > daysInMonth.getDate()) {
          result[i][j] = undefined;
        }
        else {
          result[i][j] = new Date(year, month, startDay++).getDate();
        }
      }
    }
    return result;
  }

  render() {
    const monthDay = this.getMarkupCalendarDays();
    const { day: currentDay } = this.props;

    return (
      <>
        {monthDay.map((week, index) => {
          return <tr className={styles.days} key={index}>
            {week.map((day, index) => {
              if (day === currentDay) {
                return <th className={styles.days, styles.thisDay} key={index}>{day}</th>
              }
              else {
                return <th className={styles.days} key={index}>{day}</th>
              }
            })}
          </tr>
        }
        )}
      </>
    );
  }
}

