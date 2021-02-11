import './style.css'
import { Component } from 'react'

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    }
  }

  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    })
  }

  render() {
    const { name, photo } = this.props;
    const { isGreeting } = this.state;


    return (
      <>
        <img src={photo} alt={name} />
        <br></br>
        <button onClick={this.switchState}>Switch</button>
        <h1 className="heding">{isGreeting ? 'Hello' : 'Goodbye'}, {name}</h1>
        <br></br>
      </>
    )
  }
}

export default Aloha;