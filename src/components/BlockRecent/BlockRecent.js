import React, {useState, useEffect} from 'react'
import styles from './BlockRecent.module.css'
import {connect} from 'react-redux'
import Title from "../../pages/Tours/Title";
import ToursSet from "./ToursSet";
import Section from "../Section";

const BlockRecent = ({recent}) => {
  // let recent = JSON.parse(localStorage.getItem('recent'))

  return (
    <>
      {recent && (
        <>
          <Section background={'var(--background-grey)'} padding={'30px 0'}>
            <Title title={'Недавно просмотренные туры'} sub_title={`Мы сохранили для вас недавно просмотренные вами туры, возможно вы захотите к ним вернуться и выбрать один из них`} border_color={'orange'}/>
            <ToursSet tours={recent}/>
          </Section>
        </>
      )}
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BlockRecent)