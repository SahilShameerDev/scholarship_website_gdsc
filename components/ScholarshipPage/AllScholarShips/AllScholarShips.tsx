
import React from 'react'
import styles from './AllScholarShips.module.css'
import Card from '../Cloud/Cloud'
import Cloud from '../Cloud/Cloud'

const AllScholarShips = () => {
  return (
    <div>
        <h1 className={styles.title}>All Scholarships</h1>
        <div className={styles.cards}>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
            <Cloud/>
        </div>
    </div>
  )
}

export default AllScholarShips