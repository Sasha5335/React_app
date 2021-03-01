import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectedPage: true,

    };
  }

  switchPage = () => {
    const { isSelectedPage } = this.state;
    isSelectedPage
      ? this.setState({ isSelectedPage: !isSelectedPage })
      : this.setState({ isSelectedPage: !isSelectedPage })
  };

  render() {
    const { isSelectedPage } = this.state;
    console.log(this.props.location)

    return (
      <>
        <header>
          <div className={styles.container}>

            <div className={styles.signupHeader}>

              <div className={styles.logo}>
                <Link to='/'><img src="https://www.squadhelp.com/img/logo.png" /></Link>
              </div>

              <div className={styles.loginButton} onClick={() => this.switchPage()}>
                {isSelectedPage ? <Link to='/sign-in'>Signin</Link> : <Link to='/sign-up'>Signup</Link>}



              </div>

            </div>

          </div>
        </header >
      </>
    );
  }
}


export default Header;


