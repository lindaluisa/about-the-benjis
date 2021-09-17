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
    // <div className={classname(styles.selectContainer, className)}>
    <div>
      <select 
        className={styles.select} 
        onChange={onChange}>

          {renderOptions()}

      </select>

    </div>
  );
};

export default Select;

