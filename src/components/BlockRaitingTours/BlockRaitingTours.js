import React, {useEffect, useState} from 'react'
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../../pages/Tours/Title";
import ToursSet from "../BlockRecent/ToursSet";

const BlockRaitingTours = ({rated}) => {
  // let recent = JSON.parse(localStorage.getItem('recent'))

  return (
    <>
      {rated && (
        <>
          <Section background={'transparent'} padding={'30px 0'}>
            <Title title={'Путешествия на основании оценок и отзывов'} sub_title={`Самое популярное среди наших клиентов`} border_color={'blue'}/>
            <ToursSet tours={rated}/>
          </Section>
        </>
      )}
    </>
  )
};

export default BlockRaitingTours