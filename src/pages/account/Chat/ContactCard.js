import React from 'react';
import styles from './Chat.module.css';
import wallpaper from "../../Blog/images/wallpaper.png";

const ContactCard = ({room, action, active = false, first = false, }) => {

  const {
    id,
    user_avatar,
    user_name,
    last_message,
    last_message_date,
  } = room

  const handleClick = () => {
    action(id)
  }

  return (
    <>
      <div className={`${styles.chat_contact_card} ${active ? styles.active : ''} ${first ? styles.first : ''}`} onClick={handleClick}>
        <div className={styles.chat_contact_wrapper}>
          <div className={styles.chat_contact_avatar} style={{backgroundImage: `url(${user_avatar})`}}/>
          <div className={styles.chat_contact_data}>
            <div className={styles.chat_contact_name}>{user_name}</div>
            <div className={styles.chat_contact_last_message}>{last_message}</div>
          </div>
        </div>
        <div className={styles.chat_contact_last_message_date}>{last_message_date}</div>
      </div>
    </>
  );
};

export default ContactCard;