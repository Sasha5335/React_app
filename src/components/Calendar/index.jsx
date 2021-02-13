import React, { Component } from 'react'
import './style.css'

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
  }

  render() {
    return (
      <>
        <section className="section">
          <div className="wrapper">
            <div className="left-section">
              <h3 className="day">FRIDAY</h3>
              <span>31</span>
            </div>
            <div className="right-section">
              <h3 className="month-year">JULY 2020</h3>
              <div className="calendar">
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
