import React from 'react'
import styles from './Gdsc.module.css'
import Image from "next/image";

const Gdsc = () => {
  return (
    <div>
      <div className={styles.logo}>
      <Image src="/gdsc_logo.png" alt="logo" width={100} height={100} />
      </div>
        <h1 className={styles.gdsc}>Google Developer Student Clubs</h1>
        <p className={styles.toch}>Toc H Institute Of Science And Technology</p>
    </div>
  )
}

export default Gdsc