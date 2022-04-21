import React from 'react';
import styles from './Tours.module.css';
import Tour from "./Tour";
import Title from "./Title";

const SearchSection = () => {
  return (
    <>
      <section className={styles.search_section}>
        <div className='wrapper'>
          <Title title={'Подобрать тур'} sub_title={'Мы подберем только лучшее'} color={'white'} border_color={'white'}/>
        </div>
      </section>
    </>
  );
};

export default SearchSection;