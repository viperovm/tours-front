import React, {useEffect} from 'react'
import styles from './Blog.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import {Link} from "react-router-dom";
import ButtonsSet from "../Tours/ButtonsSet";
import Title from "../Tours/Title";
import ReviewCard from "../Reviews/ReviewCard";
import ReviewsButton from "../Reviews/ReviewsButton";
import SearchSection from "../Tours/SearchSection";
import TextSection from "../Tours/TextSection";
import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";
import avatar4 from "./images/avatar4.png";
import avatar5 from "./images/avatar5.png";
import avatar6 from "./images/avatar6.png";
import avatar7 from "./images/avatar7.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import BlogCard from "./BlogCard";
import {get_all_articles, get_single_article} from "../../redux/actions/blogActions";

const buttons = [
  {
    name: 'По России',
  },
  {
    name: 'По миру',
  },
  {
    name: 'Лайфхаки',
  },
  {
    name: 'Маршруты',
  },
  {
    name: 'Интервью',
  },
]

const Blog = ({
                location,
                articles,
                get_all_articles,
              }) => {

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  useEffect(() => {
    get_all_articles()
  }, [])

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content=''/>
      </MetaTags>

      <MainLayout page={page}>

        <Section>
          <div className='breadcrumbs breadcrumbs_margin'>
            <span><Link to='/'>Главная</Link></span> - <span>Статьи</span>
          </div>
          <ButtonsSet data={buttons}/>
        </Section>

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Блог о путешествиях '} sub_title={'Все самое интересное о путешествиях'}
                 border_color={'blue'}/>
          <div className={styles.blog_cards_wrapper}>
            {articles?.map((item, i) => <BlogCard key={i} data={item} big={i === 0 || i === 6} index={i}/>)}
          </div>
        </Section>

        <SearchSection/>

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>

      </MainLayout>

    </>
  )
}

const mapStateToProps = state => ({
  articles: state.blog.articles
})

const mapDispatchToProps = {get_all_articles,}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)