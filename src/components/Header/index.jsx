import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {

  const switchPage = (location) => {
    if (location.pathname === '/sign-up') {
      return (
        <Link to='/sign-in'>Signin</Link>
      );
    }
    return (
      <Link to='/sign-up'>Signup</Link>
    );
  }

  return (
    <>
      <header>
        <div className={styles.container}>

          <div className={styles.signupHeader}>

            <div className={styles.logo}>
              <Link to='/'><img src="https://www.squadhelp.com/img/logo.png" /></Link>
            </div>

            <div className={styles.loginButton}>
              {switchPage(useLocation())}
            </div>

          </div>
        </div>
      </header >
    </>
  );
}

export default Header;


