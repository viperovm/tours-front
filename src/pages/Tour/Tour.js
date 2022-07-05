import React, {useEffect, useState} from 'react'
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

  const {pathname, search} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  console.log(search)

  const [id, setId] = useState(null)

  useEffect(() => {
    if(search) {
      setId(search.split('=')[1])
    }
  })

  console.log(id)



  useEffect(() => {
    getTourReview(match.params.slug, id)
    return () => getTourReview(match.params.slug, id, 'reset')
  }, [id])





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