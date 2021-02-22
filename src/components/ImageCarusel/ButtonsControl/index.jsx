import React, { Component } from 'react'
import styles from './ButtonsControl.module.scss'
import PropTypes from "prop-types"


export default class ButtonsControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nextSlide, prevSlide, slideshow, addInterval, removeInterval, currentStateSlide } = this.props;
    return (
      <>
        <button className={styles.slickPrev} onClick={prevSlide} >&#8249;</button>
        <button className={styles.slickNext} onClick={nextSlide}>&#8250;</button>
        <button className={styles.sickSlideshow} onClick={slideshow}>{currentStateSlide}</button>
        <button className={styles.slickAddInterval} onClick={addInterval}>+0.5s</button>
        <button className={styles.slickRemoveInterval} onClick={removeInterval}>-0.5s</button>
      </>
    )
  }
}

ButtonsControl.defaultProps = {
  playSlide: false,
  currentStateSlide: "Slideshow",
};

ButtonsControl.propTypes = {
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
  slideshow: PropTypes.func,
  addInterval: PropTypes.func,
  removeInterval: PropTypes.func,
};
