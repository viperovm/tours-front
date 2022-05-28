import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TourModeration from "../layouts/TourModeration";
import TourBody from "./Tour/TourBody";
import {getTourReview} from "../redux/actions/toursActions";

const TourModerationPage = ({location, match, getTourReview, }) => {

  useEffect(() => {
    if(match) {
      getTourReview(match.params.id)
      return () => getTourReview(match.params.id, 'reset')
    }
  }, [match])

  console.log(match?.params.id)

  console.log(location.search.split('=')[1])

  const token = location.search.split('=')[1]

  localStorage.setItem('access', token)


  return (
    <>
      <TourModeration tour_id={match?.params.id}>
        <TourBody/>
      </TourModeration>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {getTourReview}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TourModerationPage)