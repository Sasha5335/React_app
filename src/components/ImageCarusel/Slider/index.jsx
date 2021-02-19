import React, { Component } from 'react'
import styles from './Slider.module.scss'

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }




  render() {
    const { slides } = this.props;
    return (
      <>
        <button type="button" className={styles.slickPrev} >previous</button>
        <button type="button" className={styles.slickNext}>next</button>
        <picture>
          {slides.map((img, index) => {
            return <img className={styles.lazyloaded} key={index} src={img.src} alt={img.escription} />
          })
          }
        </picture>
      </>
    )
  }
}
