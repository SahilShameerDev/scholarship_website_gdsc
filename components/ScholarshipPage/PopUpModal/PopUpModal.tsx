import React from "react";
import styles from "./PopUpModal.module.css";
import Image from "next/image";


const PopUpModal = () => {
  return (
    <div>
      <h1 className={styles.headingmain} >JN Tata Endowment Loan Scholarship 2024-25</h1>
      <div className={styles.deadline}><Image className={styles.image} src='/calender.png' alt="" height={20} width={20}/><p>Deadline15-Mar-2024</p></div>
      <h2 className={styles.heading}>Eligibility</h2>
      <ul className={styles.eligible}>
        <li>
          Candidates should be Indians, not older than 45 years as of June 30,
          2024, and graduates of a recognised Indian university with at least
          60% marks on average in their undergraduate or postgraduate studies.
          Candidates are not eligible to apply if their undergraduate degree is
          not from a recognised university in India.
        </li>
        <li>
          The course to which candidates are admitted must be recognized as a
          Graduate Program.
        </li>
        <li>
          Candidates who did not get selected in the previous year/earlier for
          the loan scholarship and candidates who could not avail of the loan
          scholarship when they were selected are eligible to apply a fresh
        </li>
        <li>
          Candidates who are already pursuing postgraduate studies abroad may
          apply either at the end of their first year of studies or at the
          commencement of the second year, provided there is a minimum of one
          full academic year remaining to be completed at the time of the loan
          scholarship award, typically in July of any calendar year.
        </li>
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
      <Image src='/phone.png' alt="" height={20} width={20}/>
      <p>00000 11111</p>
      
      <Image src='/email.png' alt="" height={20} width={20}/>
      <p>name@mail</p>
        
      </div>
      
      <div className={styles.applybutton}>
      <button>Apply Now</button>
      </div>
    </div>
  );
};

export default PopUpModal;
