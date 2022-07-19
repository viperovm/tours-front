import React from 'react'
import styles from './BlockChangeCountry.module.css'
import cn from 'classnames'
import InfoBlock from '../InfoBlock/InfoBlock'
import Htag from '../Htag/Htag'
import Russia from '../../assets/img/russia.svg'
import EuropeIcon from '../../assets/img/europe.svg'
import AsiaIcon from '../../assets/img/asia.svg'
import AfricaIcon from '../../assets/img/africa.svg'
import SouthAmericaIcon from '../../assets/img/south-america.svg'
import AustraliaIcon from '../../assets/img/australia.svg'
import NorthAmericaIcon from '../../assets/img/north-america.svg'
import Section from "../Section";
import Title from "../../pages/Tours/Title";
import {Link} from "react-router-dom";
import {getHomePage} from "../../redux/actions/toursActions";
import {connect} from "react-redux";

const BlockChangeCountry = ({language, regions}) => {
  return (
    <>
      <Section padding={'30px 0'}>
        <Title title={'Мир большой, сделайте первый шаг к его покорению'} sub_title={`Континенты и страны у твоих ног`} border_color={'blue'}/>
        <div className={styles.change_country_block}>
          {regions?.map((item, index) => (
            <Link to={`/${language}/${item.public_url}`} key={index} className={styles.change_country_block_item}>
              <div className={styles.change_country_block_item_first_block}>
                <img src={item.map_icon} alt=""/>
              </div>
              <Htag tag='h4'>{item.name}</Htag>
            </Link>
          ))}
          {/*<div className={styles.change_country_block_item}>*/}
          {/*  <div className={styles.change_country_block_item_first_block}>*/}
          {/*    <img src={Russia} alt=""/>*/}
          {/*  </div>*/}
          {/*  <Htag tag='h4'>Россия</Htag>*/}
          {/*</div>*/}
          {/*<div className={styles.change_country_block_item}>*/}
          {/*  <div className={styles.change_country_block_item_first_block}>*/}
          {/*    <img src={EuropeIcon} alt=""/>*/}
          {/*  </div>*/}
          {/*  <Htag tag='h4'>Европа</Htag>*/}
          {/*</div>*/}
          {/*<div className={styles.change_country_block_item}>*/}
          {/*  <div className={styles.change_country_block_item_first_block}>*/}
          {/*    <img src={AsiaIcon} alt=""/>*/}
          {/*  </div>*/}
          {/*  <Htag tag='h4'>Азия</Htag>*/}
          {/*</div>*/}
          {/*<div className={styles.change_country_block_item}>*/}
          {/*  <div className={styles.change_country_block_item_first_block}>*/}
          {/*    <img src={AfricaIcon} alt=""/>*/}
          {/*  </div>*/}
          {/*  <Htag tag='h4'>Африка</Htag>*/}
          {/*</div>*/}
          {/*<div className={styles.change_country_block_item}>*/}
          {/*  <div className={styles.change_country_block_item_first_block}>*/}
          {/*    <img src={NorthAmericaIcon} alt=""/>*/}
          {/*  </div>*/}
          {/*  <Htag tag='h4'>Северная Америка</Htag>*/}
          {/*</div>*/}
          {/*<div className={styles.change_country_block_item}>*/}
          {/*  <div className={styles.change_country_block_item_first_block}>*/}
          {/*    <img src={SouthAmericaIcon} alt=""/>*/}
          {/*  </div>*/}
          {/*  <Htag tag='h4'>Южная Америка</Htag>*/}
          {/*</div>*/}
          {/*<div className={styles.change_country_block_item}>*/}
          {/*  <div className={styles.change_country_block_item_first_block}>*/}
          {/*    <img src={AustraliaIcon} alt=""/>*/}
          {/*  </div>*/}
          {/*  <Htag tag='h4'>Австралия и Океания</Htag>*/}
          {/*</div>*/}
        </div>
      </Section>
    </>
  )
}

const mapStateToProps = state => ({
  language: state.languages.language,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BlockChangeCountry)
