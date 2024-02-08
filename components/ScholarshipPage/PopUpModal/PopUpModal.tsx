import React from "react";
import styles from "./PopUpModal.module.css";
import Image from "next/image";


const PopUpModal = () => {
  return (
    <div>
      <h1 className={styles.heading} >JN Tata Endowment Loan Scholarship 2024-25</h1>
      <div className={styles.deadline}><p><Image src='/calender.png' alt="" height={20} width={20}/>Deadline15-Mar-2024</p></div>
      <h2>Eligiblity</h2>
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
      <h2>Benefits</h2>
      <p>Loan scholarship of up to INR 10 lakh</p>
      <h2>Documents</h2>
      <p>
        The entire scholarship program comprises four phases and candidates will
        be informed about the status of their application at the end of each
        phase.
      </p>
      <h2>Contact</h2>
      <p>
      <Image src='/phone.png' alt="" height={20} width={20}/>
      00000 11111
      </p>
      <p>
      <Image src='/email.png' alt="" height={20} width={20}/>
        name@mail
        </p>
      <button>Apply Now</button>
    </div>
  );
};

export default PopUpModal;
