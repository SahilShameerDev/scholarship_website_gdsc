"use client"
import React, { useState } from "react";
import styles from "./Card.module.css";
import Modal from "react-modal";
import PopUpModal from "../PopUpModal/PopUpModal";

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
 
 interface CardsProps {
  scholarship: Scholarship;
 }


 const Cards: React.FC<CardsProps> = ({ scholarship }) => {
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
        <h1 className={styles.title}>{scholarship.title}</h1>
        <p className={styles.date}>{scholarship.deadline}</p>
        <h2 className={styles.eligiblityTitle}>Eligiblity</h2>
        <p className={styles.eligiblity}>
          For students across India for higher studies abroad
        </p>
        <h2 className={styles.awardTitle}>Award</h2>
        <p className={styles.award}>{scholarship.benefits}</p>
        <button onClick={openModal} className={styles.button}> View Scholarship</button>
      </div>

      {/* Pop Up Menu */}
      <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Scholarship Details"
      style={{ content: { overflowY: 'auto', maxHeight: '95vh' } }}
      className={styles.popUp}
      >
        <PopUpModal scholarship={scholarship} />
      </Modal>
    </div>
  );
};

export default Cards;
