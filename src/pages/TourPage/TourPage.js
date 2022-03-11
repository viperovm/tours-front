import React, {useEffect, useState} from 'react'

import {connect} from "react-redux";
import {getTourReview} from "../../redux/actions/toursActions";

import isNotEmptyObject from "../../helpers/isNotEmptyObject";

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

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

const TourPage = ({tour, getTourReview, tour_preview}) => {

  useEffect(() => {
    if (isNotEmptyObject(tour)) {
      getTourReview(tour.id)
    }
  }, [tour])

  return (
    <>
      <ToursEditLayout secondary_item='' secondary_name='Общее' preview={true}>
        {isNotEmptyObject(tour_preview) && (
          <>
            {<Wallpaper image={tour_preview.wallpaper}/>}
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
              <TourRoute start_date={tour_preview.start_date} start_city={tour_preview.start_city}
                         start_time={tour_preview.start_time} finish_date={tour_preview.finish_date}
                         finish_city={tour_preview.finish_city} finish_time={tour_preview.finish_time}/>
              {tour_preview.tour_days && <TourDays days={tour_preview.tour_days}/>}
              <TourAccommodation property_types={tour_preview.tour_property_types}
                                 images={tour_preview.tour_property_images}/>
              {tour_preview.tour_included_services && tour_preview.tour_excluded_services &&
                <TourIncluded inclusions={tour_preview.tour_included_services}
                              exclusions={tour_preview.tour_excluded_services}/>}
              <TourLeader
                leader={tour_preview.expert}/>
            </div>
          </>
        )}
        {!isNotEmptyObject(tour_preview) && (
          <Box sx={{display: 'flex'}}>
            <CircularProgress/>
          </Box>
        )}
      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
  tour_preview: state.tours.tour_preview,
})

export default connect(mapStateToProps, {getTourReview})(TourPage)
