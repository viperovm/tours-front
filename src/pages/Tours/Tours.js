import React, {useEffect} from 'react'
import styles from './Tours.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import {Link} from "react-router-dom";
import ButtonsSet from "./ButtonsSet";
import Title from "./Title";
import ToursSet from "./ToursSet";
import SearchSection from "./SearchSection";
import TextSection from "./TextSection";
import {getAllTours} from "../../redux/actions/toursActions";
import Section from "../../components/Section";
import Tour from "./Tour";

const Tours = ({location, all_tours, getAllTours}) => {


  useEffect(() => {
    getAllTours()
  }, [])

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  const left_part = (<div className={styles.sort_button}>Сначала популярные</div>)

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>
      <MainLayout page={page}>

        <Section>
          <div className='breadcrumbs breadcrumbs_margin'>
            <span><Link to='/'>Главная</Link></span> - <span>Путешествия</span>
          </div>
          <ButtonsSet data={all_tours?.filter_set}/>
        </Section>

        {/*<section>*/}
        {/*  <div className='wrapper'>*/}
        {/*    <div className='breadcrumbs breadcrumbs_margin'>*/}
        {/*      <span><Link to='/'>Главная</Link></span> - <span>Путешествия</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <ButtonsSet data={buttons}/>*/}
        {/*</section>*/}

        <Section padding={'0 0 10px 0'}>
          <Title title={'Путешествия'} border_color={'blue'} left={left_part} travels_count={all_tours && all_tours.length}/>
          <div className={styles.tours_wrapper}>
            {all_tours?.results?.map((tour, index) => <Tour key={index} tour={tour}/>)}
          </div>
        </Section>

        <SearchSection/>

        <Section padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>

      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  all_tours: state.tours.all_tours
})

const mapDispatchToProps = {getAllTours}

export default connect(mapStateToProps, mapDispatchToProps)(Tours)