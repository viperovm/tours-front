import React from 'react';
import styles from './Tours.module.css';
import {Link} from "react-router-dom";

const ButtonsSet = ({data}) => {

  const action = (d) => {
    console.log(d)
  }

  return (
    <>
      <div className='wrapper'>
        <div className={styles.buttons_set}>
          {data && data.map((item, i) => (
            <button key={i} onClick={() => action(item.name)}>{item.name}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ButtonsSet;