import React from 'react'
import styles from './BlockPopularCountry.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../../pages/Tours/Title";

const BlockPopularCountry = ({ block_style, children, className, ...props }) => {    
    return (

      <>
        <Section padding={'30px 0 0 0'}>
          <Title title={'Популярные направления'} sub_title={`Мы тщательно следим за открытием границ и подбираем проверенные варианты`} border_color={'blue'}/>
          <CardCollection name_block='popular' />
        </Section>
      </>

    );
};

export default BlockPopularCountry
