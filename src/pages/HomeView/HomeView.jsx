import React from "react";

import Subheader from "../../components/Subheader/Subheader";
import InfoCardApp from "../../components/InfoCardApp/InfoCardApp";

import styles from "./HomeView.module.css";

const HomeView = () => {

  return (
    <div>
      <Subheader>
       
           <InfoCardApp />

      </Subheader>
    </div>

  );
};

export default HomeView;