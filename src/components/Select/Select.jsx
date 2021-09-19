import React from "react";
// import classname from "classnames";


import styles from "./Select.module.css";

const Select = ({ onChange, options, className }) => {

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <option value={option.value} key={option.value}>
          {option.displayValue}
        </option>
      );
    });
  };

  return (

      <select 
        className={styles.select} 
        onChange={onChange}>

          {renderOptions()}

      </select>
  );
};

export default Select;

