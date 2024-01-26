"use client"
import React, { useState } from "react";
import styles from "./Card.module.css";
import Modal from "react-modal";

const Cards = () => {
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
        <h1 className={styles.title}>Title</h1>
        <p className={styles.date}>last updated on 1998</p>
        <h2 className={styles.eligiblityTitle}>Eligiblity</h2>
        <p className={styles.eligiblity}>
          For students across India for higher studies abroad
        </p>
        <h2 className={styles.awardTitle}>Award</h2>
        <p className={styles.award}>Loan scholarship of up to INR 10 lakh</p>
        <button onClick={openModal} className={styles.button}> View Scholarship</button>
      </div>

      {/* Pop Up Menu */}
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Scholarship Details"
      >
        <h1>Hello</h1>
      </Modal>
    </div>
  );
};

export default Cards;
