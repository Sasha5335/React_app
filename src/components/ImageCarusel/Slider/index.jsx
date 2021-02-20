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
        <div className={styles.slidesWrapper} >
          <picture>
            <img className={styles.cardImg} src={slides.src} alt={slides.title} />
            <h3 className={styles.cardTitle}>{slides.title}</h3>
            <p className={styles.cardDescription}>{slides.description}</p>
            <p><a href="#">Learn More &gt;</a></p>
          </picture>
        </div>
      </>
    )
  }
}
