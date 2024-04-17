import React from 'react';
import styles from './LandingPage.module.css'; // Import CSS file for styling

const LandingPage = ({ onButtonClick }) => {
  const handleButtonClick = () => {
    onButtonClick(); // Call the function passed as prop
  };

  return (
    <div className={styles['landing-container']}>
      <h1 className={styles['landing-title']}>Welcome to Criminal Capture Game</h1>
      <button className={styles['start-button']} onClick={handleButtonClick}>Start</button>
    </div>
  );
};

export default LandingPage;
