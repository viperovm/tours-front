import React from 'react'
import styles from './BlockRecomendation.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../../pages/Tours/Title";

const BlockRecomendation = ({recommendations}) => {
    return (
      <>
        <Section background={'var(--background-grey)'} padding={'30px 0'}>
          <Title title={'Персональные рекомендации'} sub_title={`Мы подобрали туры именно для вас`} border_color={'orange'}/>
          <CardCollection name_block='personal' data={recommendations} />
        </Section>
      </>

    );
};

export default BlockRecomendation