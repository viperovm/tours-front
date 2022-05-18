import React from 'react';
import styles from './Blog.module.css';
import MetaTags from "react-meta-tags";
import MainLayout from "../../layouts/MainLayout";
import Section from "../../components/Section";
import {Link} from "react-router-dom";
import ButtonsSet from "../Tours/ButtonsSet";
import Title from "../Tours/Title";
import BlogCard from "./BlogCard";
import SearchSection from "../Tours/SearchSection";
import TextSection from "../Tours/TextSection";
import img1 from "./images/img1.png";
import avatar1 from "./images/avatar1.png";
import img2 from "./images/img2.png";
import avatar2 from "./images/avatar2.png";
import img3 from "./images/img3.png";
import avatar3 from "./images/avatar3.png";
import img4 from "./images/img4.png";
import avatar4 from "./images/avatar4.png";
import img5 from "./images/img5.png";
import avatar5 from "./images/avatar5.png";
import img6 from "./images/img6.png";
import avatar6 from "./images/avatar6.png";
import img7 from "./images/img7.png";
import avatar7 from "./images/avatar7.png";
import wallpaper from "./images/wallpaper.png";
import star from './images/star.svg'
import fb from './images/Socials/fb.svg'
import telegram from './images/Socials/telegram.svg'
import twitter from './images/Socials/twitter.svg'
import vk from './images/Socials/vk.svg'
import whatsapp from './images/Socials/whatsapp.svg'

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
]

const SingleBlog = ({
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

        <div className={styles.blog_wallpaper} style={{backgroundImage: `url(${wallpaper})`}}/>

        <Section>
          <div className='breadcrumbs breadcrumbs_margin'>
            <span><Link to='/'>Главная</Link></span> - <span>Блог</span>
          </div>
        </Section>

        <Section>
          <div className={styles.blog_page_wrapper}>
            <section className={styles.blog_main_section}>
              <div className={styles.main_section_header}>
                <div className={styles.main_section_header_author}>
                  <div className={styles.main_section_header_author_avatar} style={{backgroundImage: `url(${avatar4})`}}/>
                  <div className={styles.main_section_header_author_data}>
                    <div className={styles.main_section_header_author_name}>Кристина</div>
                    <div className={styles.main_section_header_author_rating}><img src={star} alt="star"/> 4.7 <span>(89)</span></div>
                  </div>
                </div>
                <div className={styles.main_section_header_social_networks}>
                  <div>Поделиться:</div>
                  <div className={styles.fb}><img src={fb} alt=""/></div>
                  <div className={styles.vk}><img src={vk} alt=""/></div>
                  <div className={styles.telegram}><img src={telegram} alt=""/></div>
                  <div className={styles.twitter}><img src={twitter} alt=""/></div>
                  <div className={styles.whatsapp}><img src={whatsapp} alt=""/></div>
                </div>
              </div>
              <div className={styles.main_section_title}></div>
              <div className={styles.main_section_date}></div>
              <div className={styles.main_section_content}></div>
            </section>
            <aside  className={styles.blog_aside_section}>
              <Title title={'Популярные статьи'} sub_title={'Вам обязательно будет интересно'} border_color={'blue'}/>
              <div className={styles.blog_aside_section_popular}>
                {blogs && blogs.map((item, i) => <BlogCard key={i} data={item}/>)}
              </div>
            </aside>
          </div>
        </Section>

        <SearchSection/>

        <Section background={'#F6F7F9'} padding={'40px 0'}>
          <Title title={'Traveler.market'} sub_title={'Немного о нас и наших услугах'} border_color={'orange'}/>
          <TextSection/>
        </Section>




      </MainLayout>
    </>
  );
};

export default SingleBlog;