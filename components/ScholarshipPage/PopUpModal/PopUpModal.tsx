import React from "react";
import styles from "./PopUpModal.module.css";
import Image from "next/image";


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

 interface PopUpModalProps {
  scholarship: Scholarship;
 }

 const PopUpModal: React.FC<PopUpModalProps> = ({ scholarship }) => {
  return (
    <div>
      <h1 className={styles.headingmain} >{scholarship.title}</h1>
      <div className={styles.deadline}><Image className={styles.image} src='/calender.png' alt="" height={20} width={20}/>Deadline: <p>{scholarship.deadline}</p></div>
      <h2 className={styles.heading}>Eligiblity</h2>
      <ul className={styles.eligible}>
         {scholarship.eligibility}
      </ul>
      <h2  className={styles.heading}>Benefits</h2>
      <div className={styles.eligible}><p>{scholarship.benefits ? scholarship.benefits : "No information available."}</p> </div>
      <h2  className={styles.heading}>Documents</h2>
      <div className={styles.eligible}> <p>
      {scholarship.documents ? scholarship.documents : "No information available."}
      </p></div>
      <h2  className={styles.heading}>Contact</h2>
      <div className={styles.eligible}>
     
      <Image src='/phone.png' alt="" height={20} width={20}/>
      <p>00000 11111</p>
    
      <Image src='/email.png' alt="" height={20} width={20}/>
      <p>name@mail</p>
      </div>
      
      <div className={styles.applybutton}>
      {scholarship.status === 'upcoming' ? 'Upcoming' : <a href={scholarship.link}>Apply Now</a>}
      </div>
    </div>
  );
};

export default PopUpModal;
