import React from 'react'
import styles from './search.module.css'
import SearchIcon from '../SearchIcon/SearchIcon'

const SearchBar = () => {
  return (
    <div>
        <input className={styles.searchBar} type="text" placeholder="Search Scholarship..."/>
        <SearchIcon/>
        
          
    </div>
  )
}

export default SearchBar