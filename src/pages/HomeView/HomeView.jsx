import React from "react";

import Subheader from "../../components/Subheader/Subheader";
import InfoCardApp from "../../components/InfoCardApp/InfoCardApp";

import styles from "./HomeView.module.css";

const HomeView = () => {

  return (
    <div>
      <Subheader>
        <div className={styles.infoCardContainer}>
           <InfoCardApp />
        </div>

      </Subheader>
    </div>

  );
};

export default HomeView;