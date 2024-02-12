'use client'

import { motion } from 'framer-motion';
import React, { createContext, useRef,useState, useEffect } from 'react';
import styles from './ScholarSection.module.css';
import Cards from '../Card/Card';

interface ScholarSectionsProps {
  title: string;
}

const ScholarSections: React.FC<ScholarSectionsProps> = ({ title }) => {


  
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.button}>
          <button>&gt;</button>
        </div>

      <motion.div  className={styles.scrollableContainer}>
        <motion.div
          className={styles.cards}
          drag="x" // Enable horizontal drag
          dragElastic={0.3} // Add slight springiness to drag
          dragConstraints={{right: 0, left: -1032}}
        >
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default ScholarSections;
