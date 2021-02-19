import React, { Component } from 'react'
import styles from './Description.module.scss'

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <>
        <div>
          <strong className={styles.captionedSlider}>Mars with Moon</strong>
          <br />
          <p>Hubble captured the tiny moon Phobos during its orbital trek around Mars in this time-lapse photo. The telescope has observed the solar system for 30 years, providing long-term information on the planets’ weather and satellites.</p>
          <p><a href="/contents/media/images/2017/29/4061-Image">Learn More &gt;</a></p>
        </div>
      </>
    )
  }
}
