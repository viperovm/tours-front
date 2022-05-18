import React from 'react'
import styles from './Reviews.module.css'
import {connect} from 'react-redux'
import MetaTags from "react-meta-tags";
import {Link} from "react-router-dom";
import ButtonsSet from "../Tours/ButtonsSet";
import Title from "../Tours/Title";
import ToursSet from "../Tours/ToursSet";
import SearchSection from "../Tours/SearchSection";
import TextSection from "../Tours/TextSection";
import MainLayout from "../../layouts/MainLayout";
import avatar from './user.png'
import image from './img.png'
import ReviewCard from "./ReviewCard";
import Section from "../../components/Section";
import ReviewsButton from "./ReviewsButton";

const buttons = [
  {
    name: 'Тип тура',
  },
  {
    name: 'Язык группы',
  },
  {
    name: 'Цена',
  },
  {
    name: 'Туры с кешбеком',
  },
  {
    name: 'Средний возраст группы',
  },
  {
    name: 'Длительность (дни)',
  },
  {
    name: 'Осталось мест',
  },
  {
    name: 'Проживание',
  },
  {
    name: 'Активность',
  },
  {
    name: 'Рейтинг',
  },
  {
    name: 'Гарантированные даты',
  },
]

const reviews = [
  {
    id: 1,
    user_avatar: avatar,
    user_name: 'Мария Киселева',
    user_date: '03.2021',
    review_image: image,
    review_title: 'Весь Стамбул. Принцевы острова и приключения в Каппадокии.',
    review: 'Маршрут "Аиды Дивы" построен по уму: день в море сразу после старта, и день в море перед финишем. Так как возможных точек старта и финиша было две (Ла-Романа и Монтего-Бэй), то и дней в море, соответственно, было четыре',
    review_date: '22.05.2021',
    review_rating: '4.9'
  },
  {
    id: 2,
    user_avatar: avatar,
    user_name: 'Ксения Скоробогатько',
    user_date: '04.2021',
    review_image: image,
    review_title: 'Весь Дагестан за 5 дней - Все включено!',
    review: 'О туре: "Хотелось бы поблагодарить всю команду за незабываемое путешествие в Стамбул и Каппадокию) Богатая история, вкусная еда, удивительные ландшафты, рассвет на кабриолетах, уникальная природа, конная прогулка, подземные города, скалы и долины - оставили яркие впечатления надолго ) Восхититься пейзажами и встретить рассвет в корзине воздушного шара- определенно одного из самого запоминающегося. Это, определенно, нужно увидеть) Все было на высшем уровне) Особенно хотелось бы отметить нашу сопровождающую Викторию, которая действительно любит то, что делает , и делает это - отлично! Этот тур - коллекция всего самого-самого! Все продумано до мелочей ) После такого красивого приключения нужно отдохнуть.',
    review_date: '05.04.2021',
    review_rating: '5.0'
  },
]

const Reviews = ({
                   location,
                   // all_tours,
                   // getAllTours
}) => {

  const {pathname} = location
  const page = pathname[0] === '/' ? pathname.substring(1) : pathname

  const loadMore = () => {
    console.log('load more')
  }

  return (
    <>
      <MetaTags>
        <title>Traveler Market - Маркетплейс авторских туров</title>
        <meta name='description' content='' />
      </MetaTags>

      <MainLayout page={page}>

        <Section>
          <div className='breadcrumbs breadcrumbs_margin'>
            <span><Link to='/'>Главная</Link></span> - <span>Отзывы</span>
          </div>
          <ButtonsSet data={buttons}/>
        </Section>

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Отзывы'} sub_title={'Отзывы путешественников'} border_color={'blue'} button={'Добавить отзыв'}/>
          {reviews && reviews.map((item, i) => <ReviewCard key={i} data={item}/>)}
          <ReviewsButton action={loadMore}/>
        </Section>

        <SearchSection/>

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>

        <Section background={'#F6F7F9'} padding={'40px 0'}>

        </Section>

      </MainLayout>

    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)