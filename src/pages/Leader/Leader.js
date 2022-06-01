import React, {useEffect} from 'react'
import styles from './Leader.module.css'
import {connect} from 'react-redux'
import MainLayout from "../../layouts/MainLayout";
import LeaderSection from "./LeaderSection";
import TeamSection from "./TeamSection";
import SearchSection from "../Tours/SearchSection";
import Section from "../../components/Section";
import Title from "../Tours/Title";
import TextSection from "../Tours/TextSection";
import ToursSection from "./ToursSection";
import ReviewsSection from "./ReviewsSection";
import {get_expert} from "../../redux/actions/expertAction";

const Leader = ({get_expert, match, expert}) => {

  useEffect(() => {
    const {id} = match.params
    get_expert(id)
  }, [match])

  console.log(expert)

  return (
    <>
      <MainLayout>
        {expert && <LeaderSection expert={expert}/>}
        {expert?.team_members && <TeamSection team={expert?.team_members}/>}
        {expert?.expert_tours && <ToursSection tours={expert?.expert_tours}/>}
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

const mapStateToProps = state => ({
  expert : state.expert.expert
})

const mapDispatchToProps = {get_expert}

export default connect(mapStateToProps, mapDispatchToProps)(Leader)