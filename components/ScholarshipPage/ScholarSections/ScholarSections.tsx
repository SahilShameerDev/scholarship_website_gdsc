"use client";

import { motion } from "framer-motion";
import React, { createContext, useRef, useState, useEffect } from "react";
import styles from "./ScholarSection.module.css";
import Cards from "../Card/Card";

interface Scholarship {
  title: string;
    deadline: string;
    eligibility: string;
    benefits: string;
    documents: string;
    contact_no: string;
    email: string;
    link: string;
    status: string;
  // Add other properties as needed, e.g., deadline, eligibility, benefits, etc.
 }
 
interface ScholarSectionsProps {
  title: string;
  scholarships: Scholarship[]; // Add a prop for the scholarships data
}



const ScholarSections: React.FC<ScholarSectionsProps> = ({  scholarships, title }) => {  
  const [isTranslated, setIsTranslated] = useState(false);
  const handleTranslate = () => {
    setIsTranslated(!isTranslated);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale up slightly on hover
          whileTap={{ scale: 0.9 }} // Scale down and change color on tap
          transition={{ duration: 0.2 }}
          className={styles.button}
          onClick={handleTranslate}
        >
          &gt;
        </motion.button>
      </div>

      <motion.div className={styles.scrollableContainer}>
        <motion.div
          className={styles.cards}
          drag="x" // Enable horizontal drag
          dragElastic={0.3} // Add slight springiness to drag
          dragConstraints={{ right: 0, left: -1032 }}
          animate={
            isTranslated ? { translateX: "-1100px" } : { translateX: "0px" }
          }
          transition={{ duration: 0.3 }}
        >
          {scholarships.map((scholarship, index) => (
            <Cards key={index} scholarship={scholarship} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScholarSections;
