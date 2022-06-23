import React from 'react';
import styles from './Tours.module.css';
import {Link} from "react-router-dom";
import SearchButtonsSection from "../../components/SearchBar/SearchButtonsSection";

const ButtonsSet = ({data}) => {

  return (
    <>
      <div className='wrapper'>
        <div className={styles.buttons_set}>
          <SearchButtonsSection filters={data}/>
        </div>
      </div>
    </>
  );
};

export default ButtonsSet;