
import React from 'react'
import styles from './AllScholarShips.module.css'
import Card from '../Card/Card'

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
 
 interface AllScholarShipsProps {
  scholarships : Scholarship[];
 }
 


 const AllScholarShips: React.FC<AllScholarShipsProps> = ({ scholarships }) => {
  return (  
    <div>
        <h1 className={styles.title}>All Scholarships</h1>
        <div className={styles.cards}>
        {scholarships.map((scholarship, index) => (
          <Card key={index} scholarship={scholarship} />
        ))}
        </div>
    </div>
  )
}

export default AllScholarShips