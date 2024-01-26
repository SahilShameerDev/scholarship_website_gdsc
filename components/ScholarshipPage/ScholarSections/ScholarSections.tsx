

import React from 'react'
import styles from './ScholarSection.module.css'
import Cards from '../Card/Card'

const ScholarSections = (props:{title:String}) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.button}>
          <button>&gt;</button>
        </div>
        
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