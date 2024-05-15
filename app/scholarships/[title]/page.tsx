"use client";

import Header from '@/components/ScholarshipPage/Header/Header'
import Home from '@/components/ScholarshipPage/Home/Home'
import React from 'react'
import styles from './scholar.module.css'
import ScholarSections from '@/components/ScholarshipPage/ScholarSections/ScholarSections'
import AllScholarShips from '@/components/ScholarshipPage/AllScholarShips/AllScholarShips'
import data from '../scholarship.json';
import Cards from '@/components/ScholarshipPage/Card/Card';
import Fuse from 'fuse.js';

type Params = {
  title: string;
};

const page = ({params}: { params: Params }) => {  
  
  console.log("Searched: ",params.title);
  const fuse = new Fuse(data.scholarships, {
    keys: ['title'],
    includeScore: true,
    threshold: 0.3 // Adjust this value to control the sensitivity of the search
   });
  


   const results = fuse.search(params.title);

   // results will be an array of scholarships that match the search term, sorted by relevance
   const scholarship = results.length > 0 ? results[0].item : null;
   
  return (
    <div className={styles.scholar}>
        <Header/>
        <Home/>
        <div>
      {scholarship ? (
        <div className={styles.container}>
        <h2 className={styles.title}>Result</h2>
        
  
        <div className={styles.scrollableContainer}>
          <div
            className={styles.cards}
            
          >
              <Cards scholarship={scholarship} />
          </div>
        </div>
      </div>
      ) : (
        <p className={styles.error}>Scholarship not found.</p>
      )}
    </div>
        
        <AllScholarShips scholarships={data.scholarships}/>
    </div>
  )
}

export default page