import React from 'react'
import styles from './Home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={styles.homeBtn}>
        <Image src='/home.png' alt='' width={50} height={50} className={styles.homeIcon}/>
    </div>
  )
}

export default Home