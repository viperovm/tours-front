import React from 'react'
import styles from './Leader.module.css'
import {connect} from 'react-redux'
import MainLayout from "../../layouts/MainLayout";
import LeaderSection from "./LeaderSection";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TeamSection from "./TeamSection";
import SearchSection from "../Tours/SearchSection";
import Section from "../../components/Section";
import Title from "../Tours/Title";
import TextSection from "../Tours/TextSection";
import ToursSection from "./ToursSection";
import ReviewsSection from "./ReviewsSection";

const Leader = () => {
  return (
    <>
      <MainLayout>
        <LeaderSection/>
        <TeamSection/>
        <ToursSection/>
        <ReviewsSection/>


        <SearchSection/>

        <Section padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Leader)