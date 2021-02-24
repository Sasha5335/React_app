import React, { Component } from 'react';
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.currentWidth)
  }

  currentWidth = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  render() {
    const { width, height } = this.state;

    return (
      <>
        <div>Current width of viewport is: {width}</div>
        <div>Current height of viewport is: {height}</div>
      </>
    );
  }
}

export default WindowSize;