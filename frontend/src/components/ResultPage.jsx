import React from 'react';
import styles from './ResultPage.module.css';

const ResultPage = ({ captureStatus, capturedBy, onReset }) => {

  const handleNextClick = () => {
    onReset();
  };

  return (
    <div className={styles['result-container']}>
      <h2 className={styles['result-heading']}>Result</h2>
      {captureStatus ? (
        <div className={styles['captured-info']}>
          <p>Fugitive captured by {capturedBy.name}</p>
          <button className={styles['reset-button']} onClick={handleNextClick}>Reset</button>
        </div>
      ) : (
        <p>Fugitive not captured.</p>
      )}
    </div>
  );
};

export default ResultPage;
