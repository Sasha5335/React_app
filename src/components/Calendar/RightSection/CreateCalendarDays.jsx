import React, { Component } from 'react';
import { startOfMonth, endOfMonth } from 'date-fns';

export default class CreateCalendarDays extends Component {

  get year() {
    return this.props.currentData.getFullYear();
  }

  get month() {
    return this.props.currentData.getMonth();
  }

  get day() {
    return this.props.currentData.getDate();
  }

  getMarkupCalendarDays = () => {
    const DAYS_IN_WEEK = 7
    const result = [];
    const startDayOfMonth = startOfMonth(new Date(this.year, this.month, this.day));
    const daysInMonth = endOfMonth(new Date(this.year, this.month, this.day));
    let day = 1;

    for (let i = 0; i < (daysInMonth.getDate() + startDayOfMonth.getDate()) / DAYS_IN_WEEK; i++) {
      result[i] = []
      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        if ((i === 0 && j < startDayOfMonth.getDate()) || day > daysInMonth.getDate()) {
          result[i][j] = undefined;
        }
        else {
          result[i][j] = new Date(this.year, this.month, day++).getDate();
        }
      }
    }
    return result;
  }

  render() {
    const monthDay = this.getMarkupCalendarDays();

    return (
      <>
        {monthDay.map((week, index) =>
          <tr className="days" key={index}>
            {week.map((day, index) => day === this.day ? <th className="this-day" key={index}>{day}</th> : <th className="days" key={index}>{day}</th>)}
          </tr>
        )}
      </>
    );
  }
}

