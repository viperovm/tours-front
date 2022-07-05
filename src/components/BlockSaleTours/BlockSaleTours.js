import React from 'react'
import styles from './BlockSaleTours.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../../pages/Tours/Title";
import ToursSet from "../BlockRecent/ToursSet";

const BlockSaleTours = ({ block_style, children, className, ...props }) => {

  let recent = JSON.parse(localStorage.getItem('recent'))

  return (
    <>
      {recent && (
        <>
          <Section background={'transparent'} padding={'30px 0'}>
            <Title title={'Туры со скидками '} sub_title={`Только сегодня уникальные предложения по доступным ценам`} border_color={'blue'}/>
            <ToursSet tours={recent}/>
          </Section>
        </>
      )}
    </>
  )
};

export default BlockSaleTours