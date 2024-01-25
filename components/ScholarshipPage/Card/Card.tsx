import React from 'react'
import styles from './Card.module.css'

const Cards = () => {
  return (
    <div className={styles.panel}>
        <h1>Title</h1>
        <p>last updated on 1998</p>
        <h2>Eligiblity</h2>
        <p>For students across India for higher studies abroad</p>
        <h2>Award</h2>
        <p>Loan scholarship of up to INR 10 lakh</p>
        <div className={styles.button}> View Scholarship</div>
    </div>
  )
}

export default Cards