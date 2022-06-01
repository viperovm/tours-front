import React from 'react';
import styles from './Leader.module.css';
import {connect} from 'react-redux';
import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import avatar from "./img/avatar.jpg";
import Button from "../../components/AccountTours/Components/Button";
import time from "./img/time.svg";
import chat from "./img/chat.svg";
import docs from "./img/docs.svg";
import phone from "./img/phone.svg";
import mail from "./img/mail.svg";
import Section from "../../components/Section";
import Title from "../Tours/Title";

const TeamSection = ({team}) => {
  return (
    <>
      <Section background={'#F6F7F9'} padding={'30px 0'}>
        <Title title={'Команда'} sub_title={'Познакомьтесь с дружной командой. Эти ребята сделают ваше путешествие незабываемым! '} border_color={'blue'}/>
      </Section>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSection)