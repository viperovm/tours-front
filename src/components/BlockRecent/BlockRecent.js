import React, {useState, useEffect} from 'react'
import styles from './BlockRecent.module.css'
import {connect} from 'react-redux'
import Title from "../../pages/Tours/Title";
import ToursSet from "./ToursSet";
import Carousel from "nuka-carousel";

const BlockRecent = () => {
  let recent = JSON.parse(localStorage.getItem('recent'))

  const [buttons, setButtons] = useState(false)

  useEffect(() => {
    if(recent.length > 3) {
      setButtons(true)
    } else {
      setButtons(false)
    }
  }, [recent])

  return (
    <>
      {recent && (
        <>
          <div className={styles.recent_section}>
            <div className="wrapper">
              <Title title={'Недавно просмотренные туры'} sub_title={`Мы сохранили для вас недавно просмотренные вами туры, возможно вы захотите к ним вернуться и выбрать один из них`} border_color={'orange'}/>
              <ToursSet tours={recent}/>
            </div>
          </div>
        </>
      )}
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BlockRecent)