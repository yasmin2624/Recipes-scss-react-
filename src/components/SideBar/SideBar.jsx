import React, { useState, useEffect } from 'react';
import styles from './SideBar.module.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";  

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  // دالة لإغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.sidebar}`) && !event.target.closest(`.${styles.menuBtn}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Link to={"home"} className={styles.button}>Meals</Link>
        <Link className={styles.button}>Ingredients</Link>
        <Link className={styles.button}>Area</Link>
      </div>
    </>
  );
}
