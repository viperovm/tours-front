import React from 'react';
import styles from './Leader.module.css';
import {connect} from 'react-redux';
import Section from "../../components/Section";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs";
import avatar from './img/avatar.jpg'
import time from './img/time.svg'
import chat from './img/chat.svg'
import docs from './img/docs.svg'
import phone from './img/phone.svg'
import mail from './img/mail.svg'
import Button from "../../components/AccountTours/Components/Button";

const LeaderSection = () => {
  return (
    <>
      <Section background={'#ffffff'}>
        <Breadcrumbs>
          <Breadcrumb
            link="/"
          >
            Главная
          </Breadcrumb>
          <Breadcrumb
            link="/"
          >
            Эксперты
          </Breadcrumb>
          <Breadcrumb>
            Давид Маркисян
          </Breadcrumb>

        </Breadcrumbs>

        <div className="wrapper">
          <div className={styles.leader_wrapper}>
            <div className={styles.leader_left_section}>
              <img src={avatar} alt="avatar"/>
              Зарегистрирован 16 марта 2015г.
            </div>
            <div className={styles.leader_main}>
              <div className={styles.leader_last_visit}>
                Был(а) на сайте вчера в 22:06
              </div>
              <div dangerouslySetInnerHTML={{__html: 'Привет!'}}/>
            </div>
            <div className={styles.leader_right_section}>
              <Button
                color={'button-orange'}
                small={true}
                width={'100%'}
                margin={'0 0 30px 0'}
                text={'Написать в чат'}
              />
              <div className={styles.leader_data}>
                <div className={styles.leader_data_image_text}>
                  <img src={time} alt=""/>
                  Среднее время ответа:
                </div>
                <div>
                  <span>2ч.</span>
                </div>
              </div>
              <div className={styles.leader_data}>
                <div className={styles.leader_data_image_text}>
                  <img src={chat} alt=""/>
                  Отзывов туристов:
                </div>
                <div>
                  <span>210</span>
                </div>
              </div>

              <div className={styles.leader_approved}>
                Давид подтвердил:
                <div className={styles.leader_approved_image_text}>
                  <img src={docs} alt=""/>
                  Документы
                </div>
                <div className={styles.leader_approved_image_text}>
                  <img src={phone} alt=""/>
                  Номер телефона
                </div>
                <div className={styles.leader_approved_image_text}>
                  <img src={mail} alt=""/>
                  Личный e-mail
                </div>
              </div>

            </div>
          </div>
        </div>

      </Section>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderSection)