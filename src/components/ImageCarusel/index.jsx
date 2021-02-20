import React, { Component } from 'react'
import styles from './ImageCarusel.module.scss'
import Slider from './Slider'
import Description from './Description'

class ImageCarusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesImg: [
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200',
          title: "HH24 'light saber'",
          description: "The newborn star in Herbig-Haro 24 (HH 24) is hidden from direct view, but jets blasting out along its rotation axis create a series of glowing shock fronts, revealing the new star’s presence.",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200',
          title: "Eagle Nebula",
          description: "Eagle Nebula",
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
      ]
    }
  }

  render() {
    const { slidesImg } = this.state;
    return (
      <>
        <div className={styles.container}>
          <div classNameName={styles.controlsСontainer}>
            <Slider slides={slidesImg.map((slides) => slides)} />
            <Description />
          </div>
        </div>
      </>
    )
  }
}

export default ImageCarusel;