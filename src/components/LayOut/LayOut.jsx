import React from 'react'
import styles from './LayOut.module.scss'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

export default function LayOut() {
  return (
    <div className={styles.main}>
      <SideBar />
      <div className={styles.content}>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}