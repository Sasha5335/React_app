import React, { Component } from 'react'
import styles from './Slider.module.scss'
import PropTypes from "prop-types"


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  fullScreen = () => {
    const card = document.getElementById("cardImg");
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    card.requestFullscreen();
  }

  render() {
    const { slides } = this.props;
    return (
      <>
        <div className={styles.slidesWrapper} >
          <picture>
            <img id="cardImg" className={styles.cardImg} src={slides.src} alt={slides.title} onClick={this.fullScreen} />
            <h3 className={styles.cardTitle}>{slides.title}</h3>
            <p className={styles.cardDescription}>{slides.description}</p>
            <p><a href="#">Learn More &gt;</a></p>
          </picture>
        </div>
      </>
    )
  }
}

Slider.propTypes = {
  fullScreen: PropTypes.func,
};
