import React, {useState} from 'react'
import CardCollection from '../CardCollection/CardCollection';
import Section from "../Section";
import Title from "../../pages/Tours/Title";
import Tour from "../BlockRecent/Tour";
import AliceCarousel from "react-alice-carousel";
import Tag from "../Tag/Tag";
import styles from "../CardExpert/CardExpert.module.css";
import Htag from "../Htag/Htag";
import StarBigIcon from "../../assets/img/star-big.svg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};


const BlockTravelExperts = () => {

  const [state, setState] = useState([1,2,3,4])

  const Expert = () => {
    return (
      <Tag size='t'>
        <div className={styles.card_expert_image}>

        </div>
        <Htag tag='h3' className={styles.card_expert_name}>Мария Антонова</Htag>
        <div className={styles.card_expert_content}>
          <div className={styles.card_expert_content_place_info}>
            <Htag className={styles.card_expert_rating} tag='h4'>Рейтинг:</Htag>
            <Htag className={styles.card_expert_feedback} tag='h4'>Отзывы:</Htag>
            <Htag className={styles.card_expert_active_tours} tag='h4'>Активных туров:</Htag>
          </div>
          <div className={styles.card_expert_content_guide_info}>
            <Htag tag='h4' className={styles.card_expert_rating_num}><img src={StarBigIcon} alt=""/> 5.0</Htag>
            <Htag tag='h4' className={styles.card_expert_feedback_num}>211 отзывов</Htag>
            <Htag tag='h4' className={styles.card_expert_active_tours_num}>31 тур</Htag>
          </div>
        </div>
      </Tag>
    )
  }

    return (
      <>
        <Section background={'var(--background-grey)'} padding={'30px 0'}>
          <Title title={'Популярные тревел-эксперты'} sub_title={`Лучшие из лучших`} border_color={'orange'}/>
          <AliceCarousel
            mouseTracking
            infinite
            items={state?.map(item => <Expert key={item}/>)}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls
          />
        </Section>
      </>
    );
};

export default BlockTravelExperts