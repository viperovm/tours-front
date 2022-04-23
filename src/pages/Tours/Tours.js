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

const Tours = ({location, all_tours, getAllTours}) => {

  useEffect(() => {
    getAllTours()
  }, [])

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  console.log(page)

  const left_part = (<div className={styles.sort_button}>Сначала популярные</div>)

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>
      <MainLayout page={page}>
        <section>
          <div className='wrapper'>
            <div className='breadcrumbs breadcrumbs_margin'>
              <span><Link to='/'>Главная</Link></span> - <span>Путешествия</span>
            </div>
          </div>
        </section>
        <ButtonsSet/>
        <Title title={'Путешествия'} sub_title={`Найдено ${all_tours && all_tours.length} тур`} border_color={'blue'} left={left_part}/>
        <ToursSet tours={all_tours}/>
        <SearchSection/>
        <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
        <TextSection/>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  all_tours: state.tours.all_tours
})

const mapDispatchToProps = {getAllTours}

export default connect(mapStateToProps, mapDispatchToProps)(Tours)