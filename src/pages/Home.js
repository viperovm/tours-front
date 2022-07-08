import React, { Fragment, useEffect, useRef, useState } from 'react'
import MetaTags from 'react-meta-tags'
import MainLayout from '../layouts/MainLayout'


import BlockAboutUs from '../components/BlockAboutUs/BlockAboutUs'
import BlockPresentation from '../components/BlockPresentation/BlockPresentation'
import BlockViewed from '../components/BlockViewed/BlockViewed'
import BlockPopularCountry from '../components/BlockPopularCountry/BlockPopularCountry'
import BlockRecomendation from '../components/BlockRecomendation/BlockRecomendation'
import BlockAdvantage from '../components/BlockAdvantage/BlockAdvantage'
import BlockNewTour from '../components/BlockNewTour/BlockNewTour'
import BlockChangeCountry from '../components/BlockChangeCountry/BlockChangeCountry'
import BlockTypeTours from '../components/BlockTypeTours/BlockTypeTours'
import BlockRaitingTours from '../components/BlockRaitingTours/BlockRaitingTours'
import BlockTravelExperts from '../components/BlockTravelExperts/BlockTravelExperts'
import BlockSaleTours from '../components/BlockSaleTours/BlockSaleTours'
import BlockFeedback from '../components/BlockFeedback/BlockFeedback'
import BlockMoodTours from '../components/BlockMoodTours/BlockMoodTours'
import BlockFindTour from '../components/BlockFindTour/BlockFindTour'
import SliderBlock from "../components/SliderBlock/SliderBlock";
import BlockRecent from "../components/BlockRecent";
import {getHomePage} from "../redux/actions/toursActions";
import {connect} from "react-redux";


 const Home = ({getHomePage, home_page}) => {

   useEffect(() => {
     getHomePage()
   }, [])

   let recent = JSON.parse(localStorage.getItem('recent'))
  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </MetaTags>
      <MainLayout>
        <BlockPresentation block_style='presentation_block' />
        {home_page?.recent && <BlockRecent recent={home_page?.recent}/>}
        {/*<BlockViewed />*/}
        {home_page?.popular && <BlockPopularCountry popular={home_page?.popular}/>}
        {home_page?.recommendations && <BlockRecomendation recommendations={home_page?.recommendations}/>}
        <BlockAdvantage />
        {home_page?.new && <SliderBlock new_tours={home_page?.new}/>}
        <BlockChangeCountry />
        <BlockTypeTours />
        <BlockRaitingTours />
        <BlockTravelExperts />
        <BlockSaleTours />
        {/*<BlockFeedback />*/}
        {/*<BlockNewTour />*/}
        {/*<BlockMoodTours />*/}
        {/*<BlockFindTour />*/}
        {/*<BlockAboutUs />*/}
      </MainLayout>
    </>
    // <MainLayout>

    //   <Head>
    //     <title>Traveler Market - Маркетплейс авторских туров</title>
    //     <meta name='description' content='Generated by create next app' />
    //     <link rel='icon' href='/favicon.ico' />
    //   </Head>

    //   {/* <BlockViewed /> */}
    //   {/* <BlockPopularCountry /> */}
    //   {/* <BlockRecomendation /> */}
    //   {/* <BlockAdvantage /> */}
    //   {/* <BlockNewTour /> */}
    //   {/* <BlockChangeCountry /> */}
    //   {/* <BlockTypeTours /> */}
    //   {/* <BlockRaitingTours /> */}
    //   {/* <BlockTravelExperts /> */}
    //   {/* <BlockSaleTours /> */}
    //   {/* <BlockFeedback /> */}
    //   {/* <BlockMoodTours /> */}
    //   {/* <BlockFindTour /> */}
    //   <BlockAboutUs />
    // </MainLayout>
  )
}

const mapStateToProps = state => ({
  home_page: state.tours.home_page,
})

const mapDispatchToProps = {
  getHomePage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
