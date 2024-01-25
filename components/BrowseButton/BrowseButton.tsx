import React from 'react'
import styles from './BrowseButton.module.css'
import Image from "next/image";
import Link from 'next/link';

const BrowseButton = () => {
  return (
    <Link href="/scholarships" className={styles.browseBtn}>
        <p className={styles.browse}>Browse Scholarships</p>
        
        <Image src='/Browsesearch.png' alt='' height={20} width={20} className={styles.icon}/>
    </Link>
  )
}

export default BrowseButton