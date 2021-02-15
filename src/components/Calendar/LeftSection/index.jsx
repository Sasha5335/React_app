import React, { Component } from 'react'
import './style.css'

export default class LeftSectionCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <div className="left-section">
          <h3 className="day">{new Date().toLocaleString('en', { month: 'long' })}</h3>
          <p>{new Date().getDate()}</p>
        </div>
      </>
    )
  }
}
