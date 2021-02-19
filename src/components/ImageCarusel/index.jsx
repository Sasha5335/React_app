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
          description: "Star forming region NGC 2020 and NGC 2014",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200',
          description: "Lagoon Nebula",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200',
          description: "HH24",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn1200',
          description: "Eagle Nebula",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn1200',
          description: "Saturn",
        },
        {
          src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn1200',
          description: "Milky Way Bulge",
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