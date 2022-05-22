import React, {useEffect, useRef, useState} from 'react';
import styles from './Chat.module.css';
import read from './images/read.svg'
import read_not from './images/read_not.svg'

const Message = ({
                   data,
                   author,
                   user_id,
                 }) => {

  const [isMine, setIsMine] = useState(false)

  console.log(data)
  console.log(author)
  console.log(user_id)

  useEffect(() => {
    if(author?.id === user_id) {
      setIsMine(true)
    }
  })

  const date = new Date(data.time_date)

  return (
    <>
      <div className={`${styles.message_wrapper} ${isMine ? styles.is_mine : ''}`}>
        <div className={styles.user_avatar} style={{backgroundImage: `url(${author?.avatar})`}}/>
        <div className={styles.message_body}>
          <div className={styles.message_header}>
            <div className={styles.message_author_name}>{isMine ? 'Вы' : author?.first_name + ' ' + author?.last_name}</div>
            <div className={styles.message_date_time}>{data.created_at}</div>
            <div className={styles.message_status}><img src={ data.is_read ? read : read_not} alt=""/></div>
          </div>
          <div className={styles.message_text}>{data.message}</div>
        </div>
      </div>
    </>
  );
};

export default Message;