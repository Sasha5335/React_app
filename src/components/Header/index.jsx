import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import cx from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "/sign-up",
      currentBtn: "Включено",
      isToggleOn: true

    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
    })
  }


  render() {
    const { currentPage, currentBtn } = this.state;


    return (
      <header>
        <div className={styles.container}>

          <div className={styles.signupHeader}>

            <div className={styles.logo}>
              <a href="#"><img src="https://www.squadhelp.com/img/logo.png" /></a>
            </div>

            <div onClick={this.handleClick} className={styles.loginButton}>
              <Link onClick={() => this.handleClick()} to={currentPage}> {this.state.currentBtn ? 'Включено' : 'Выключено'}</Link>
            </div>

          </div>

        </div>
      </header >
    );
  }
}


export default Header;
