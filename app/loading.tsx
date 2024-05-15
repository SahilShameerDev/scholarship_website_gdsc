import React from 'react';
import styles from './loading.module.css';

const BookAnimation: React.FC = () => {
 return (
    <div className={styles.load}>
      <div className={styles.loader}></div>
    </div>
 );
};

export default BookAnimation;
