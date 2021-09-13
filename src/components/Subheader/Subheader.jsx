import React from 'react';

import styles from './Subheader.module.css';


const Subheader = (props) => {
  return (
  <div className={styles.subheaderContainer}>
    <div className={styles.subheader}>{props.children}</div>

  </div>
  );
};

export default Subheader;