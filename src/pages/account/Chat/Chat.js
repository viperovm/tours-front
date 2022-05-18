import React, {useEffect, useRef, useState} from 'react'
import styles from './Chat.module.css'
import {connect} from 'react-redux'
import PopUp from "../../../components/PopUp/PopUp";
import AvatarInput from "../../../components/AccountTours/FormFields/AvatarInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import TextEditor from "../../../components/AccountTours/FormFields/TextEditor";
import Button from "../../../components/AccountTours/Components/Button";
import Account from "../../../layouts/account/account";
import ContactCard from "./ContactCard";
import avatar1 from './images/avatar1.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import send from './images/send.svg'
import Message from "./Message";

const rooms = [
  {
    id: 1,
    user_avatar: avatar1,
    user_name: 'Мария К.',
    last_message: 'Привет, как насчет отдох...',
    last_message_date: '12:02',
    messages: [
      {
        id: 1,
        is_mine: true,
        is_read: true,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 2,
        is_mine: false,
        is_read: true,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 3,
        is_mine: true,
        is_read: false,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
      },
    ]
  },
  {
    id: 2,
    user_avatar: avatar2,
    user_name: 'Антон И.',
    last_message: 'да конечно, можно взять ...',
    last_message_date: '16.02.21',
    messages: [
      {
        id: 1,
        is_mine: true,
        is_read: true,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 2,
        is_mine: false,
        is_read: true,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 3,
        is_mine: true,
        is_read: false,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
      },
    ]
  },
  {
    id: 3,
    user_avatar: avatar3,
    user_name: 'Каролина О.',
    last_message: 'Мы можем организваоть ...',
    last_message_date: '15.02.21',
    messages: [
      {
        id: 1,
        is_mine: false,
        is_read: true,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 2,
        is_mine: true,
        is_read: true,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 3,
        is_mine: false,
        is_read: false,
        time_date: '15.02.21 в 16:00',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
      },
    ]
  },
]



const Chat = () => {

  const ref = useRef()

  const [activeRoom, setActiveRoom] = useState(null)
  const [messages, setMessages] = useState(null)
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    if(activeRoom) {
      rooms && rooms.map((i, n) => {
        if(i.id === activeRoom) {
          setMessages(i.messages)
          setAuthor({
            name: i.user_name,
            avatar: i.user_avatar,
          })
        }
      })
    }
  }, [activeRoom])

  return (
    <>
      <Account title='Чат' menu_item='chat'>

        <div className={styles.chat_wrapper}>
          <div className={styles.chat_contacts}>
            {rooms && rooms.map((i, n) => <ContactCard key={n} room={i} action={setActiveRoom} active={activeRoom === i.id} first={n === 0}/>)}
          </div>
          <div className={styles.chat_messages}>
            <div className={styles.chat_messages_messages}>
              {messages && messages.map((i, n) => <Message key={n} data={i} author={author} my_avatar={avatar4}/>)}
            </div>
            <div className={styles.send_button}>
              <form>
                {/*<div ref={ref} className={styles.editable_area} contentEditable="true" onChange={(e) => console.log(e.target)}/>*/}
                <textarea placeholder='Текст сообщения'/>
                <button type='submit'><img src={send} alt=""/></button>
              </form>
            </div>
          </div>
        </div>


      </Account>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)