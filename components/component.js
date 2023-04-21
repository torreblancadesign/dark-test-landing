

import React from 'react';
import styles from '../styles/style.module.css'; 
const NavigationBar = () => {
  return (
    <div style={{backgroundColor: '#5a23c8', color: 'white'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>Test Landing</div>
        <div>
          <a href="/about" style={{color: 'white'}}>About</a>
          <a href="/tests" style={{color: 'white'}}>Tests</a>
          <a href="/start" style={{color: 'white'}}>Start</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
   