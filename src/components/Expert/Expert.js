import React, {useEffect} from 'react'
import styles from './Expert.module.css'
import {connect} from 'react-redux'
import star from "./img/star.svg";
import {Link} from "react-router-dom";

const Expert = ({id, avatar, name, rating, reviews, extra}) => {

  return (
    <>
      <Link to={`/experts/${id}`} className={styles.tour_leader_section}>
        <div className={styles.leader_avatar} style={{backgroundImage: 'url(' + avatar + ')'}}/>
        <div className={styles.tour_leader_name_section}>
          <div className={styles.leader_name}>{`${name}${extra ? extra : ''}`}</div>
          <div className={styles.leader_rating}><img src={star} alt="star"/><span>{rating}</span>{' '}({reviews})</div>
        </div>
      </Link>
    </>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Expert)