import React from 'react'
import styles from './ErrorPage.module.scss'
import image from '../../assets/images/error.png'

export default function ErrorPage() {
 
  return (
    <div className={styles.error} >
      <img src={image} alt="" />

    </div>
  )
}

