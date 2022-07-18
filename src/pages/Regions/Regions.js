import React, {useEffect, useState} from 'react'
import styles from './Regions.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import {Link} from "react-router-dom";
import ButtonsSet from "../Tours/ButtonsSet";
import Title from "../Tours/Title";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Tour from "../Tours/Tour";
import SearchSection from "../Tours/SearchSection";
import TextSection from "../Tours/TextSection";
import {getAllRegions} from "../../redux/actions/toursActions";
import Region from "./Region";

const Regions = ({language, location, active_regions, getAllRegions }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(loading && active_regions?.length > 0) {
      setLoading(false)
    }
  }, [active_regions, loading])

  useEffect(() => {
    getAllRegions()
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
              Регионы
            </Breadcrumb>
          </Breadcrumbs>
        </Section>

        <Section padding={'0 0 30px 0'}>
          <Title title={'Регионы'} border_color={'blue'} sub_title={`Регионов: ${active_regions?.length}`}/>
          {loading && (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <div className={styles.regions_wrapper}>
              {active_regions?.map((region, index) => <Region key={index} region={region}/>)}
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
  active_regions: state.tours.active_regions,
})

const mapDispatchToProps = {
  getAllRegions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Regions)