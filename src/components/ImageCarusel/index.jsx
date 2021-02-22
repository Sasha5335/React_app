import React, { Component } from 'react'
import styles from './ImageCarusel.module.scss'
import Slider from './Slider'

class ImageCarusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn1200',
          title: "HH24 'light saber'",
          description: "The newborn star in Herbig-Haro 24 (HH 24) is hidden from direct view, but jets blasting out along its rotation axis create a series of glowing shock fronts, revealing the new star’s presence.",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200',
          title: "Eagle Nebula",
          description: "Hubble captured exquisite views of Saturn’s ring system and atmospheric details that once could only be provided by spacecraft visiting the distant world.",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200',
          title: "Saturn",
          description: "Hubble captured exquisite views of Saturn’s ring system and atmospheric details that once could only be provided by spacecraft visiting the distant world.",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn1200',
          title: "Milky Way Bulge",
          description: "The Milky Way’s bulge is a crowded and dynamic region of variously aged stars zipping around at different speeds at the heart of our galaxy.",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn1200',
          title: "Bubble Nebula",
          description: "Hubble captured an enormous bubble being blown into space by a super-hot, massive star.",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn1200',
          title: "Whirlpool Galaxy",
          description: "This image of the Whirlpool Galaxy illustrates a spiral galaxy’s grand design, from its curving spiral arms to its yellowish central core.",
        },
      ],
      currentSlide: 0,
      currentStateSlide: "Slideshow",
      playSlide: false,
      timer: 0,
      interval: 1000,
    }
  }

  nextSlide = () => {
    const { slides, currentSlide } = this.state;
    this.setState({
      currentSlide: (currentSlide + 1) % slides.length,
    });
  };

  prevSlide = () => {
    const { slides, currentSlide } = this.state;
    this.setState({
      currentSlide: ((currentSlide - 1) + slides.length) % slides.length,
    });
  };

  slideshow = () => {
    const { playSlide, timer, interval } = this.state;
    if (playSlide) {
      clearInterval(timer);
      this.setState({
        playSlide: false,
        interval: 1000,
        currentStateSlide: "Slideshow"
      });
    }
    else {
      const newTimer = setInterval(() => {
        this.nextSlide();
      }, interval);
      this.setState({
        currentStateSlide: "Stop",
        playSlide: true,
        timer: newTimer,
      });
    }
  }

  addInterval = () => {
    const { playSlide, timer, interval } = this.state;

    if (playSlide === true) {
      clearInterval(timer);
      const newTimer = setInterval(() => {
        this.nextSlide();
      }, interval);
      this.setState({
        interval: interval + 500,
        timer: newTimer,
      })
    }
  }

  removeInterval = () => {
    const { playSlide, timer, interval } = this.state;

    if (playSlide === true) {
      clearInterval(timer);
      const newTimer = setInterval(() => {
        this.nextSlide();
      }, interval);
      this.setState({
        interval: interval - 500,
        timer: newTimer,
      })
    }
  }

  render() {
    const { slides, currentSlide, currentStateSlide } = this.state;
    return (
      <>
        <div className={styles.slidesCarusel}>
          <div className={styles.container}>
            <div className={styles.slides}>
              <button className={styles.slickPrev} onClick={this.prevSlide} >&#8249;</button>
              <button className={styles.slickNext} onClick={this.nextSlide}>&#8250;</button>
              <button className={styles.sickSlideshow} onClick={this.slideshow}>{currentStateSlide}</button>
              <button className={styles.slickAddInterval} onClick={this.addInterval}>+0.5s</button>
              <button className={styles.slickRemoveInterval} onClick={this.removeInterval}>-0.5s</button>

              <Slider slides={slides[currentSlide]} />

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ImageCarusel;