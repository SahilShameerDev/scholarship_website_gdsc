
import React from 'react'
import styles from './AllScholarShips.module.css'
import Card from '../Card/Card'

const AllScholarShips = () => {
  return (
    <div>
        <h1 className={styles.title}>All Scholarships</h1>
        <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default AllScholarShips