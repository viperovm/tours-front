import React from 'react';
import styles from './Tours.module.css';
import Tour from "./Tour";

const ToursSet = ({tours = []}) => {
  return (
    <>
      <section>
        <div className='wrapper'>
          <div className={styles.tours_set_section}>
            {tours && tours.map(tour => <Tour tour={tour}/>)}
          </div>
        </div>
      </section>
    </>
  );
};

export default ToursSet;