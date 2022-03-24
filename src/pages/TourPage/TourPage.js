import React, {useEffect, useState} from 'react'

import {connect} from "react-redux";
import {getTourReview} from "../../redux/actions/toursActions";

import isNotEmptyObject from "../../helpers/isNotEmptyObject";

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import {useStickyBox} from "react-sticky-box";

import styles from './TourPage.module.css';
import Wallpaper from "../../components/TourPageComponents/Wallpaper/Wallpaper";
import TourHeader from "../../components/TourPageComponents/TourHeader/TourHeader";
import TourLocation from "../../components/TourPageComponents/TourLocation/TourLocation";
import TourInfoBlocks from "../../components/TourPageComponents/TourInfoBlocks/TourInfoBlocks";
import TourImpressions from "../../components/TourPageComponents/TourImpressions/TourImpressions";
import TourReview from "../../components/TourPageComponents/TourReview/TourReview";
import TourGallery from "../../components/TourPageComponents/TourGallery/TourGallery";
import TourRoute from "../../components/TourPageComponents/TourRoute/TourRoute";
import TourDays from "../../components/TourPageComponents/TourDays/TourDays";
import TourAccommodation from "../../components/TourPageComponents/TourAccomodation/TourAccommodation";
import TourIncluded from "../../components/TourPageComponents/TourIncluded/TourIncluded";
import TourLeader from "../../components/TourPageComponents/TourLeader/TourLeader";
import ToursEditLayout from "../../layouts/account/ToursEditLayout";
import TourTypes from "../../components/TourPageComponents/TourTypes/TourTypes";
import TourPreviewLayout from "../../layouts/account/TourPreviewLayout";
import {Link} from "react-router-dom";
import ok from '../../assets/img/ok2.svg'
import heart from '../../assets/img/heart.svg'
import stopwatch from '../../assets/img/stopwatch.svg'
import group from '../../assets/img/users_group.svg'
import calendar from '../../assets/img/calendar2.svg'
import chevron_down from '../../assets/img/chevron_down.svg'
import star from '../../components/TourPageComponents/TourLeader/star.svg'

const TourPage = ({tour, getTourReview, tour_preview}) => {

  const stickyRef = useStickyBox({offsetTop: 30, offsetBottom: 30})

  const [places, setPlaces] = useState(1)

  const handleAdd = () => {
    if(places < tour.vacants_number) {
      setPlaces(places + 1)
    }
  }

  const handleSubtract = () => {
    if(places > 1) {
      setPlaces(places - 1)
    }
  }

  useEffect(() => {
    if (isNotEmptyObject(tour)) {
      getTourReview(tour.id)
    }
  }, [tour])

  return (
    <>
      <TourPreviewLayout secondary_item='' secondary_name='Общее' preview={true}>
        {isNotEmptyObject(tour_preview) && (
          <>
            {<Wallpaper image={tour_preview.wallpaper}/>}
            <div className="wrapper">
              <div className={styles.preview_wrapper}>
                <div className={styles.tour_body}>
                  <TourHeader title={tour_preview.name} rating={tour_preview.rating} reviews={tour_preview.reviews_count}/>
                  <TourLocation country={tour_preview.start_country}
                                region={tour_preview.start_russian_region ? tour_preview.start_russian_region : tour_preview.start_city}/>
                  <TourTypes main_type={tour_preview.basic_type} extra_types={tour_preview.additional_types}/>
                  <TourInfoBlocks comfort={tour_preview.comfort_level} difficulty={tour_preview.difficulty_level}
                                  language={tour_preview.languages}
                                  age={tour_preview.age_starts + '-' + tour_preview.age_ends}/>
                  <div className={styles.divider}/>
                  {tour_preview.main_impressions && <TourImpressions impressions={tour_preview.main_impressions}/>}
                  {tour_preview.plan && <TourReview text={tour_preview.description} activities={tour_preview.plan}/>}
                  <TourGallery gallery={tour_preview.tour_images}/>
                  <TourRoute start_date={tour_preview && tour_preview && tour_preview.start_date} start_city={tour_preview && tour_preview.start_city}
                             start_time={tour_preview && tour_preview.start_time} finish_date={tour_preview && tour_preview.finish_date}
                             finish_city={tour_preview && tour_preview.finish_city} finish_time={tour_preview && tour_preview.finish_time}/>
                  {tour_preview && tour_preview.tour_days && <TourDays days={tour_preview && tour_preview.tour_days}/>}
                  <TourAccommodation property_types={tour_preview.tour_property_types}
                                     images={tour_preview.tour_property_images}/>
                  {tour_preview.tour_included_services && tour_preview.tour_excluded_services &&
                    <TourIncluded inclusions={tour_preview.tour_included_services}
                                  exclusions={tour_preview.tour_excluded_services}/>}
                  <TourLeader
                    leader={tour_preview.expert}/>
                </div>

                <div
                  className={styles.tour_sidebar_body}
                     // ref={stickyRef}
                  style={{position: 'sticky', top: '30px'}}
                >
                  <div className={styles.tour_sidebar_header}>
                    <Link to='/register'>
                      Зарегистрируйтесь!
                    </Link>
                    <span>
                      И начните путешествовать по новому!
                    </span>
                  </div>

                  <div className={styles.tour_sidebar_main}>
                    <div className={styles.guarantied_row}>
                      <div className={styles.guarantied_row_guarantied}>
                        <div className={styles.guarantied_row_guarantied_icon}>
                          <img src={ok} alt="Ok"/>
                        </div>
                        <div className={styles.guarantied_row_guarantied_text}>
                          Тур проверен
                          {' '}
                          {tour_preview.is_guaranteed ? 'и гарантирован' : ''}
                        </div>
                      </div>
                      <div className={styles.guarantied_row_guarantied_favourite}>
                        <img src={heart} alt="heart"/>
                      </div>
                    </div>
                    <div className={styles.price_row}>
                      <div className={styles.price_row_total_price}>
                        {tour_preview && tour_preview.price && tour_preview.price.toLocaleString('ru')}
                        {' '}
                        <span className='rub-sign'>₽</span>
                      </div>
                      <div className={styles.price_row_daily_price}>
                        {'в день'}
                        {' '}
                        {(tour_preview.price / tour_preview.duration).toLocaleString('ru')}
                        {' '}
                        <span className='rub-sign'>₽</span>
                      </div>
                    </div>
                    <div className={styles.more_row}>
                      {tour_preview.price_comment}  <Link>подробнее</Link>
                    </div>

                    <div className={styles.duration_row}>
                      <div className={styles.duration_row_col}>
                        <div className={styles.duration_row_icon}>
                          <img src={stopwatch} alt="stopwatch"/>
                        </div>
                        <div className={styles.duration_row_text}>
                          <div className={styles.duration_row_text_title}>
                            Длительность:
                          </div>
                          <div className={styles.duration_row_text_data}>
                            {tour_preview.duration}
                            {' '}
                            дней
                          </div>
                        </div>

                      </div>
                      <div className={styles.duration_row_col}>
                        <div className={styles.duration_row_icon}>
                          <img src={group} alt="group"/>
                        </div>
                        <div className={styles.duration_row_text}>
                          <div className={styles.duration_row_text_title}>
                            Свободно мест:
                          </div>
                          <div className={styles.duration_row_text_data}>
                            {tour_preview.vacants_number}
                            {' '}
                            из
                            {' '}
                            {tour_preview.members_number}
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className={styles.inputs_row}>
                      {/*<div className={styles.inputs_row_date_input + ' ' + styles.calendar}>*/}
                      {/*  <img src={calendar} alt="calendar"/>*/}
                      {/*  <div className={styles.inputs_row_date_input_text}>Выберите дату</div>*/}
                      {/*  <img src={chevron_down} alt="chevron_down"/>*/}
                      {/*</div>*/}
                      <div className={styles.inputs_row_date_input}>
                        <div className={styles.inputs_row_date_input_button_minus} onClick={handleSubtract}>
                          —
                        </div>
                        <div className={styles.inputs_row_date_input_text}>
                          Мест:
                          {' '}
                          {places}
                        </div>
                        <div className={styles.inputs_row_date_input_button} onClick={handleAdd}>
                          +
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputs_row_button}>
                      {tour_preview.is_guaranteed ? 'Забронировать' : 'Хочу поехать'}
                    </div>

                    <div className={styles.inputs_row_text}>
                      <div className={styles.inputs_row_text_heading}>
                        Для бронирования тура достаточно 8 750 <span className='rub-sign'>₽</span>
                      </div>
                      <div className={styles.inputs_row_text_text}>
                        При отмене бронирования любого путешествия в течение 24 часов после оплаты вы получаете полный возврат.
                      </div>
                    </div>


                  </div>

                  <div className={styles.tour_sidebar_footer}>

                    <div className={styles.footer_row_leader}>
                      <div className={styles.footer_row_leader_image} style={{backgroundImage: 'url(' + tour_preview.expert.tmb_avatar}}/>
                      <div className={styles.footer_row_leader_leader}>
                        <div className={styles.footer_row_leader_name}>
                          <span>{tour_preview.expert.first_name}</span>, Автор туров
                        </div>
                        <div className={styles.footer_row_leader_rating}>
                          <img src={star} alt="star"/>
                          {tour_preview.expert.rating}
                          <span> (201)</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.footer_row_button}>
                      Написать автору тура
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!isNotEmptyObject(tour_preview) && (
          <Box sx={{display: 'flex'}}>
            <CircularProgress/>
          </Box>
        )}
      </TourPreviewLayout>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  tour_preview: state.tours.tour_preview,
})

export default connect(mapStateToProps, {getTourReview})(TourPage)
