import React from 'react'
import styles from './Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={styles.homeBtn}>
    <Link href='/'>
        <Image src='/home.png' alt='' width={50} height={50} className={styles.homeIcon} />
    </Link>
    </div>
  )
}

export default Home