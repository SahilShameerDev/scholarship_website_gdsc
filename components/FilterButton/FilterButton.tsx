import React from 'react'
import styles from './FilterButton.module.css'
import FilterIcon from '../FilterIcon/FilterIcon'

const FilterButton = () => {
  return (
    <div className={styles.filter}>
     <FilterIcon/>
    </div>
  )
}

export default FilterButton