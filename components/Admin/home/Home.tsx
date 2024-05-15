"use client"

import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Card from "../../ScholarshipPage/Card/Card"; 
import data from "@/app/scholarships/scholarship.json";

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
  scholarships: Scholarship[];
}

const AllScholarShips: React.FC<AllScholarShipsProps> = ({ scholarships }) => {
  const [localScholarships, setLocalScholarships] = useState(scholarships);

  useEffect(() => {
    // This effect runs once to initialize localScholarships with the initial scholarships
    setLocalScholarships(scholarships);
  }, [scholarships]);

  const handleDelete = async (indexToDelete:number) => {
    // Find the scholarship by its index
  const scholarshipToDelete = localScholarships[indexToDelete];
  

  // Send a DELETE request to the API route, passing the scholarship's title
  const response = await fetch(`/api/scholarships/${scholarshipToDelete}`, {
    method: 'DELETE',
  });
  console.log(response);

  if (response.ok) {
    // If the deletion was successful, update the local state
    const updatedScholarships = localScholarships.filter((_, index) => index!== indexToDelete);
    setLocalScholarships(updatedScholarships);
    console.log("Scholarship deleted successfully");
  } else {
    console.error("Failed to delete scholarship");
  }
  };

  return (
    <div>
      <h1 className={styles.title}>All Scholarships</h1>

      <div className={styles.cards}>
        {localScholarships.map((scholarship, index) => (
          <div key={index}>
            <button className={styles.delete} onClick={() => handleDelete(index)}>x</button>
            <Card scholarship={scholarship} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllScholarShips;
