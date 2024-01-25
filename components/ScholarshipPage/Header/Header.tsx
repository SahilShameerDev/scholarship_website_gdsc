import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Scholarships</h1>
      </div>
    </div>
  );
};

export default Header;
