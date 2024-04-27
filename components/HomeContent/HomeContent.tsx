"use client"

import React from 'react'
import styles from './HomeContent.module.css'
import { motion } from 'framer-motion';

const HomeContent = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.6, // Duration of the animation in seconds
      },
    },
 };
  return (
    <motion.div
    className={styles.homeContent}
    initial="hidden"
    animate="show"
    variants={fadeInVariants}
  >
    <h1 className={styles.mainhead}>Dream Big, Pay Nothing</h1>
    <p className={styles.subhead}>Discover Your Scholarship Journey Here!</p>
    <p className={styles.subhead2}>Your Key to Educational Opportunities Begins Now!</p>
  </motion.div>
  )
}

export default HomeContent