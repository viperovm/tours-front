import React from 'react'
import styles from './BlockFeedback.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import CardCollection from '../CardCollection/CardCollection'
import Title from "../../pages/Tours/Title";
import ToursSet from "../BlockRecent/ToursSet";
import Section from "../Section";
import mounts from '../../assets/img/mounts.svg'
import {decodeEntities, truncateText} from "../../functions";

const BlockFeedback = ({reviews}) => {

    const ReviewCard = ({data}) => (
      <>
        <div className={styles.card_wrapper}>
            <div className={styles.avatar_section} style={{backgroundImage: `url(${mounts})`}}>
                <div className={styles.avatar_section_image} style={{backgroundImage: `url(${data?.author?.avatar})`}}/>
            </div>
            <div className={styles.name_section}>{`${data?.author?.first_name} ${data?.author?.last_name}`}</div>
            <div className={styles.text_section}>{truncateText(decodeEntities(data?.body), 200)}</div>
            <div className={styles.button_section}>Читать полностью</div>
        </div>
      </>
    )

  return (
    <>
      {reviews?.length > 0 && (
        <Section background={'var(--background-grey)'} padding={'30px 0'}>
          <Title title={'Отзывы наших путешественников'} sub_title={`Все самое интересное`} border_color={'orange'}/>
          {reviews?.map((item, index) => <ReviewCard data={item}/>)}
        </Section>
      )}

    </>
  );
};

export default BlockFeedback
