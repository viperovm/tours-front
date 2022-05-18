import React from 'react'
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

const blogs = [
  {
    blog_title: 'По горам на велосипеде',
    blog_image: img1,
    blog_text: 'Все про отдых в Абхазии. Что посмотреть: Анакопийская крепость, подземные озера и сталактиты в Новоафонской пещере,советская станция «Псырцха», Новоаф...',
    user_avatar: avatar1,
    user_name: 'Давид',
    user_rating: '5.0',
    user_reviews: '201',
    blog_date: '07.04.2021',
    reading_time: '15',
  },
  {
    blog_title: 'Куда поехать на выходные в Конго',
    blog_image: img2,
    blog_text: 'Статья о путешествии на Сейшельские острова. Разбираемся, как добраться, сколько стоят билеты, проживание и еда. Обзор самых интересных. Все про отдых в Абхазии. Что посмотреть... ',
    user_avatar: avatar2,
    user_name: 'Кристина',
    user_rating: '4.7',
    user_reviews: '89',
    blog_date: '07.04.2021',
    reading_time: '10',
  },
  {
    blog_title: ' «Спасибо, я сам». Когда в путешеств...',
    blog_image: img3,
    blog_text: 'Все больше людей отказываются от привычного формата путевок в туристических агентствах, предпочитая самостоятельно искать билеты и прокладывать маршрут путешествия...',
    user_avatar: avatar3,
    user_name: 'Ольга Иванова',
    user_rating: '4.7',
    user_reviews: '89',
    blog_date: '07.04.2021',
    reading_time: '10',
  },
  {
    blog_title: 'Простые правила комфортного пере...',
    blog_image: img4,
    blog_text: 'Главное правило комфортного перелета, даже длительного или с маленькими детьми — грамотная организация. Если заранее озаботиться вопросами, чем заняться в полете и что делать в случае задержки рей...',
    user_avatar: avatar4,
    user_name: 'Мария',
    user_rating: '4.7',
    user_reviews: '89',
    blog_date: '07.04.2021',
    reading_time: '10',
  },
  {
    blog_title: 'Столица Золотого кольца или семь д...',
    blog_image: img5,
    blog_text: 'Я считаю, чтобы понять характер города и ощутить его дух, нужно провести в нем несколько дней. Поэтому и Золотое кольцо решила изучать не комплексом, а по частям, и начала с Ярославля — города с тысячно...',
    user_avatar: avatar5,
    user_name: 'Антон',
    user_rating: '4.7',
    user_reviews: '89',
    blog_date: '07.04.2021',
    reading_time: '10',
  },
  {
    blog_title: 'Красоты Хорватии: увидеть все лучш...',
    blog_image: img6,
    blog_text: 'Эта страна незаслуженно померкла на фоне своей блистательной конкурентки — Италии, но в 2021 у нее есть все шансы взлететь до одного из популярнейших тревел-направлений. Разбираемся, что пос...',
    user_avatar: avatar6,
    user_name: 'Жанна',
    user_rating: '4.7',
    user_reviews: '89',
    blog_date: '07.04.2021',
    reading_time: '10',
  },
  {
    blog_title: 'Отдыхаем культурно: самые интересны...',
    blog_image: img7,
    blog_text: 'Приехать в Москву и не зависнуть в арт-пространстве или оригинальном музее – крайне сложно. Выставочная жизнь этого города кипит, а постоянные экспозиции неизменно радуют серьезным ...',
    user_avatar: avatar7,
    user_name: 'Константин',
    user_rating: '4.7',
    user_reviews: '89',
    blog_date: '07.04.2021',
    reading_time: '10',
  },
]

const Blog = ({
                location,
                // all_tours,
                // getAllTours
              }) => {

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>

      <MainLayout page={page}>

        <Section>
          <div className='breadcrumbs breadcrumbs_margin'>
            <span><Link to='/'>Главная</Link></span> - <span>Блог</span>
          </div>
          <ButtonsSet data={buttons}/>
        </Section>

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Блог о путешествиях '} sub_title={'Все самое интересное о путешествиях'} border_color={'blue'}/>
          <div className={styles.blog_cards_wrapper}>
            {blogs && blogs.map((item, i) => <BlogCard key={i} data={item} big={i === 0 || i === 6} index={i}/>)}
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

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)