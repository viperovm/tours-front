import React, {useEffect, useState} from 'react'
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../../pages/Tours/Title";
import ToursSet from "../BlockRecent/ToursSet";

const BlockRaitingTours = () => {
  let recent = JSON.parse(localStorage.getItem('recent'))

  return (
    <>
      {recent && (
        <>
          <Section background={'transparent'} padding={'30px 0'}>
            <Title title={'Путешествия на основании оценок и отзывов'} sub_title={`Самое популярное среди наших клиентов`} border_color={'blue'}/>
            <ToursSet tours={recent}/>
          </Section>
        </>
      )}
    </>
  )
};

export default BlockRaitingTours