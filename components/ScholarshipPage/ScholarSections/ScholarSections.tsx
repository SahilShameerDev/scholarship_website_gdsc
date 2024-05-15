"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
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
}

interface ScholarSectionsProps {
  title: string;
  scholarships: Scholarship[];
}

const ScholarSections: React.FC<ScholarSectionsProps> = ({ scholarships, title }) => {
  const [isTranslated, setIsTranslated] = useState(false);
  const handleTranslate = () => {
    setIsTranslated(!isTranslated);
  };

  const cardWidth = 261;
  const totalWidth = (scholarships.length ) * cardWidth; // Adjusted to include the duplicated set of cards

  // Duplicate the entire set of cards
  const scholarshipsWithDuplicate = [...scholarships];

  // Calculate the scroll position based on the current translation
  const getScrollPosition = () => {
    // Check if document and window are defined before using them
    if (typeof document!== "undefined" && typeof window!== "undefined") {
      const container = document.querySelector(`.${styles.cards}`);
      if (container) {
        const transform = window.getComputedStyle(container, null).getPropertyValue("transform");
        const matrix = new WebKitCSSMatrix(transform);
        const x = matrix.m41;
        return x;
      }
    }
    return 0;
  };
  
  // Adjust the drag constraints based on the scroll position
  const adjustedConstraints = {
    right: 0,
    left: -totalWidth + Math.abs(getScrollPosition()),
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <motion.div className={styles.scrollableContainer}>
        <motion.div
          className={styles.cards}
          drag="x"
          dragElastic={0.3}
          dragConstraints={adjustedConstraints}
          onDragEnd={(event, info) => {
            // Adjust scroll position to simulate an infinite loop
            if (info.point.x <= -totalWidth + cardWidth) {
              setIsTranslated(false);
              // Simulate infinite loop by adjusting the scroll position
              // This logic might need adjustment based on your exact requirements
              // For example, you might need to manually adjust the scroll position or use a different approach
            }
          }}
          transition={{ duration: 0.3 }}
        >
          {scholarshipsWithDuplicate.map((scholarship, index) => (
            <Cards key={index} scholarship={scholarship} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScholarSections;
