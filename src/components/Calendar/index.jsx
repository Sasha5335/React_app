import React, { Component } from 'react'
import './style.css'
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
        <section className="section">
          <div className="wrapper">
            <LeftSectionCalendar />
            <RightSectionCalendar />
          </div>
        </section>
      </>
    )
  }
}

