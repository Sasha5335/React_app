import React, { Component } from 'react';
import styles from './RightSection.module.scss';
import CreateCalendarDays from './CreateCalendarDays';


export default class CreateCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    };
  }
  render() {
    const { daysWeek } = this.state;

    return (
      <>
        <table>
          <thead>
            <tr className={styles.daysWeek}>
              {daysWeek.map((name, index) =>
                <th className={styles.daysWeek} key={index}>{name[0]}</th>
              )}
            </tr>
            <CreateCalendarDays currentData={this.props.currentData} />
          </thead>
        </table>
      </>
    );
  }
}

