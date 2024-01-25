import React from 'react'
import styles from './ScholarSection.module.css'
import Cards from '../Card/Card'

const ScholarSections = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Open Now</h2>
        <div className={styles.cards}>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
    </div>
  )
}

export default ScholarSections