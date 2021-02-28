import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: true,

    };
  }

  switchPage = () => {
    const { selectedPage } = this.state;
    selectedPage
      ? this.setState({ selectedPage: !selectedPage })
      : this.setState({ selectedPage: !selectedPage })
  };

  render() {
    const { selectedPage } = this.state;

    return (
      <>
        <header>
          <div className={styles.container}>

            <div className={styles.signupHeader}>

              <div className={styles.logo}>
                <Link to='/'><img src="https://www.squadhelp.com/img/logo.png" /></Link>
              </div>

              <div className={styles.loginButton} onClick={() => this.switchPage()}>
                {selectedPage ? <Link to='/sign-in'>Signin</Link> : <Link to='/sign-up'>Signup</Link>}
              </div>

            </div>

          </div>
        </header >
      </>
    );
  }
}


export default Header;
