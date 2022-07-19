import React from 'react';
import styles from './Tours.module.css';
import Tour from "./Tour";
import Title from "./Title";
import Section from "../../components/Section";
import SearchBar from "../../components/SearchBar";

const SearchSection = () => {
  return (
    <>
      <Section background={'#2AA2D6'} padding={'40px 0'}>
        <Title title={'Подобрать тур'} sub_title={'Мы подберем только лучшее'} color={'white'} border_color={'white'}/>
        <SearchBar border={true}/>
      </Section>
    </>
  );
};

export default SearchSection;