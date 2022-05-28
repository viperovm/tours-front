import React, {useEffect} from 'react'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import TourBody from "./TourBody";
import {connect} from "react-redux";
import {getTourReview} from "../../redux/actions/toursActions";

const Tour = ({
                location,
                match,
                getTourReview,
}) => {

  useEffect(() => {
    getTourReview(match.params.id)
    return () => getTourReview(match.params.id, 'reset')
  }, [])


  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname


  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>
      <MainLayout page={page}>
        <TourBody/>
      </MainLayout>
    </>
  )
}

const mapDispatchToProps = {getTourReview,}

export default connect(null, mapDispatchToProps)(Tour)