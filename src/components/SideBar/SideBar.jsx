import React from 'react';
import styles from './SideBar.module.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="logo" className={styles.logo} />
      <Link to={"home"} className={styles.button}>Meals</Link>
      <Link className={styles.button}>Ingredients</Link>
      <Link className={styles.button}>Area</Link>
    </div>
  );
}
