import React from 'react'
import Image from "next/image";
import styles from './Browse.module.css'
import BrowseButton from '../BrowseButton/BrowseButton'
import WaveBg from '../WaveBg/WaveBg'


const Browse = () => {
  return (
    <div>
        <h1 className={styles.callOut}>
            Can’t find the scholarships for <br/> you? Try Browsing
            
        </h1>
        <BrowseButton/>
        <div className={styles.bg}>
            <img src="wave.png" alt="" />
        </div>
    </div>
  )
}

export default Browse