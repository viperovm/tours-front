import React from 'react'
import Logo from '../../components/logo/Logo'
import Fb from '../../assets/img/14.svg'
import Tweet from '../../assets/img/15.svg'
import Vk from '../../assets/img/16.svg'
import Insta from '../../assets/img/17.svg'
import Youtube from '../../assets/img/18.svg'
import Lock from '../../assets/img/lock-orange.svg'
import Smile from '../../assets/img/smile-orange.svg'
import User from '../../assets/img/user-orange.svg'
import Defender from '../../assets/img/defender-orange.svg'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='wrapper_footer'>
          <div className='col_1'>
            <Logo text_color='white' />
            <p className='paragraph_content'>
              Traveler.market — это маркетплейс авторских туров от
              тревел-экспертов и частных независимых гидов. Авторские туры — это
              спонтанные и яркие возможности, предлагающие взять максимум от
              каждой точки маршрута. Мы за непринужденный подход к групповым
              путешествиям, который больше похож на встречу со старыми друзьями.
            </p>
            <p className='paragraph_content_underline'>
              © 2020 . Traveler.market
            </p>
            <Link to={'/privacy'} className='paragraph_content_underline'>
              Политика конфиденциальности
            </Link>
            <p className='paragraph_content_underline'>Публичная оферта</p>
            <p className='paragraph_content_underline'>
              Согласие на обработку персональных данных
            </p>
          </div>

          <div className='col_2'>
            <p className='name_paragraph'>Информация</p>
            <p className='paragraph_content_underline'>
              Как устроен сервис Traveler.market
            </p>
            <p className='paragraph_content_underline'>
              Подход сообщества Traveler.market
            </p>
            <p className='paragraph_content_underline'>Журнал о путешествиях</p>
            <p className='paragraph_content_underline'>Об авторских турах</p>
            <p className='paragraph_content_underline'>
              Отзывы путешественников
            </p>
            <p className='paragraph_content_underline'>Центр помощи</p>
            <p className='paragraph_content_underline'>Связаться с нами</p>
            <p className='paragraph_content_underline'>
              Организуйте авторский тур
            </p>
          </div>

          <div className='col_3'>
            <p className='name_paragraph'>Мы заботимся о вас</p>
            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <img src={Lock} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Безопасная оплата</p>
                <p>Бронируйте туры через нашу надежную платежную систему</p>
              </div>
            </div>

            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <img src={Smile} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Продуманная спонтанность</p>
                <p>Маршруты могут адаптироваться под пожелания группы</p>
              </div>
            </div>

            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <img src={User} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Проверенные тревел-эксперты</p>
                <p>В нашей базе 3 452 гида, которые прошли тщательный отбор</p>
              </div>
            </div>

            <div className='p_footer_block'>
              <div className='p_footer_block_first'>
                <img src={Defender} alt='' />
              </div>
              <div className='p_footer_block_second'>
                <p>Проверенные тревел-эксперты</p>
                <p>В нашей базе 3 452 гида, которые прошли тщательный отбор</p>
              </div>
            </div>
          </div>

          <div className='col_4'>
            <p className='name_paragraph'>Мы в социальных сетях</p>
            <div className='social_wide'>
              <img src={Fb} alt='Fb' />
              <img src={Tweet} alt='Tweet' />
              <img src={Vk} alt='Vk' />
              <img src={Insta} alt='Insta' />
              <img src={Youtube} alt='Youtube' />
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
