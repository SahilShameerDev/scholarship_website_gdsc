"use client"
import React, { useState } from "react";
import styles from "./card.module.css";
import Modal from "react-modal";
import PopUpModal from "../PopUpModal/PopUpModal";

const card = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = ()=>{
    setModalIsOpen(true)
  }
  const closeModal = ()=>{
    setModalIsOpen(false)
  }
  return (
    <div>
      
      <div className={styles.panel}>
        <h1 className={styles.title}>JN Tata Endowment Loan Scholarship 2024-25</h1>
        <p className={styles.date}>January 29th</p>
        <h2 className={styles.eligiblityTitle}>Eligibility</h2>
        <p className={styles.eligiblity}>
          For students across India for higher studies abroad
        </p>
        <h2 className={styles.awardTitle}>Award</h2>
        <p className={styles.award}>Loan scholarship of up to INR 10 lakh</p>
        <button onClick={openModal} className={styles.button}> View Scholarship Details</button>
      </div>

      {/* Pop Up Menu */}
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Scholarship Details"
      style={{ content: { overflowY: 'auto', maxHeight: '95vh' } }}
      className={styles.popUp}
      >
        <PopUpModal/>
      </Modal>
    </div>
  );
};

export default card
