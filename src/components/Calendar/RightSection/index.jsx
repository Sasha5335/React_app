import React, { Component } from 'react';
import './style.css';
import CreateCalendar from './CreateCalendar';

export default class RightSectionCalendar extends Component {
  state = {
    currentData: new Date(),
  };

  render() {
    const { currentData } = this.state;

    return (
      <>
        <div className="right-section">
          <h3 className="month-year">
            {currentData.toLocaleString('en', { month: 'long' })} {currentData.getFullYear()}
          </h3>
          <div className="calendar">
            <CreateCalendar currentData={currentData} />
          </div>
        </div>
      </>
    )
  }
}
