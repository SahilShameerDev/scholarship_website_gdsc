"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const truncateText = (text: string, maxWords: number) => {
    // Check if text is undefined or an empty string
    if (!text || text.trim().length === 0) {
      return "No information available."; // Return a default message
    }

    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <div className={styles.panel}>
        <h1 className={styles.title}>{scholarship.title}</h1>
        <p className={styles.date}>
          {scholarship.status === "open now"
            ? `Deadline: ${scholarship.deadline}`
            : `Opens At: ${scholarship.deadline}`}
        </p>
        <h2 className={styles.eligiblityTitle}>Eligiblity</h2>
        <p className={styles.eligiblity}>
          {truncateText(scholarship.eligibility, 7)}
        </p>
        <h2 className={styles.awardTitle}>Award</h2>
        <p className={styles.award}>{truncateText(scholarship.benefits, 10)}</p>
        <button onClick={openModal} className={styles.button}>
          {" "}
          View Scholarship
        </button>
      </div>

      {/* Pop Up Menu */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Scholarship Details"
        style={{ content: { overflowY: "auto", maxHeight: "95vh" } }}
        className={styles.popUp}
      >
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={modalContentVariants}
        >
          <PopUpModal scholarship={scholarship} />
        </motion.div>
      </Modal>
    </motion.div>
  );
};

export default Cards;
