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
      <div className={styles.deadline}><p><Image className={styles.image} src='/calender.png' alt="" height={20} width={20}/>Deadline: {scholarship.deadline}</p></div>
      <h2 className={styles.heading}>Eligiblity</h2>
      <ul className={styles.eligible}>
         {scholarship.eligibility}
      </ul>
      <h2  className={styles.heading}>Benefits</h2>
      <div className={styles.eligible}><p>Loan scholarship of up to INR 10 lakh</p> </div>
      <h2  className={styles.heading}>Documents</h2>
      <div className={styles.eligible}> <p>
        The entire scholarship program comprises four phases and candidates will
        be informed about the status of their application at the end of each
        phase.
      </p></div>
      <h2  className={styles.heading}>Contact</h2>
      <div className={styles.eligible}>
      <p>
      <Image src='/phone.png' alt="" height={20} width={20}/>
      00000 11111
      </p>
      <p>
      <Image src='/email.png' alt="" height={20} width={20}/>
        name@mail
        </p>
      </div>
      
      <div className={styles.applybutton}>
      <button>Apply Now</button>
      </div>
    </div>
  );
};

export default PopUpModal;
