import React, {useEffect, useState} from 'react'
import styles from './Destinations.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Title from "../Tours/Title";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import SearchSection from "../Tours/SearchSection";
import TextSection from "../Tours/TextSection";
import {getAllDestinations} from "../../redux/actions/toursActions";
import Destination from "./Destination";

const Destinations = ({language, location, active_destinations, getAllDestinations }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(loading && active_destinations?.length > 0) {
      setLoading(false)
    }
  }, [active_destinations, loading])

  useEffect(() => {
    getAllDestinations()
  }, [])

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1).split('/')[1] : pathname

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>
      <MainLayout page={page}>

        <Section padding={'0px'}>
          <Breadcrumbs>
            <Breadcrumb
              link={`/${language}`}
            >
              Главная
            </Breadcrumb>
            <Breadcrumb>
              Направления
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <Section padding={'0 0 30px 0'}>
          <Title title={'Направления'} border_color={'blue'} sub_title={`Направлений: ${active_destinations?.length}`}/>
          {loading && (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <div className={styles.destinations_wrapper}>
              {active_destinations?.map((destination, index) => <Destination key={index} destination={destination}/>)}
            </div>
          )}
        </Section>

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
  language: state.languages.language,
  active_destinations: state.tours.active_destinations,
})

const mapDispatchToProps = {getAllDestinations,}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations)