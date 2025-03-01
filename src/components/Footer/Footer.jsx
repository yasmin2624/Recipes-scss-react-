import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoSection}>
          <img src={logo} alt="Recipe Logo" className={styles.logo} />
          <span className={styles.title}>Recipe</span>
        </div>
        <a href="#" className={styles.link}>Route</a>
      </div>
      <p className={styles.copyRight}>
        &copy; 2025 <span className={styles.author}>Nagy Osama</span>
        <sup>™</sup>. All Rights Reserved.
      </p>
    </footer>
  );
}
