import React from 'react'
import styles from './Card.module.css'

const Cards = () => {
  return (
    <div className={styles.panel}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.date}>last updated on 1998</p>
        <h2 className={styles.eligiblityTitle}>Eligiblity</h2>
        <p className={styles.eligiblity}>For students across India for higher studies abroad</p>
        <h2 className={styles.awardTitle}>Award</h2>
        <p className={styles.award}>Loan scholarship of up to INR 10 lakh</p>
        <div className={styles.button}> View Scholarship</div>
    </div>
  )
}

export default Cards