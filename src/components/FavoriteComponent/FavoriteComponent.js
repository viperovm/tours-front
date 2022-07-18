import React from 'react'
import styles from './FavoriteComponent.module.css'
import {connect} from 'react-redux'
import favorite from './img/favorite.svg'
import favorite_transparent from './img/favorite_transparent.svg'

const FavoriteComponent = ({is_favourite, tour_id}) => {
  return (
    <>
      <div className={styles.favorite}>
        <img src={is_favourite ? favorite : favorite_transparent} alt=""/>
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteComponent)