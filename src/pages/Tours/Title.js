import React from 'react';
import styles from './Tours.module.css';

const Title = ({title, sub_title, border_color, color = 'black', left}) => {
  return (
    <>
      <section>
        <div className='wrapper'>
          <div className={styles.title_section}>
            <div className={styles.title_set + ' ' + styles[border_color]}>
              <div className={styles.title + ' ' + styles[color]}>{title}</div>
              <div className={styles.sub_title + ' ' + styles[color]}>{sub_title}</div>
            </div>
            <div>
              {left}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Title;