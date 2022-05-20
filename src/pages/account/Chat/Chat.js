import React, {useEffect, useRef, useState} from 'react'
import styles from './Chat.module.css'
import {connect} from 'react-redux'
import Account from "../../../layouts/account/account";
import {delete_chat_user, get_chat_rooms} from "../../../redux/actions/chatActions";
import Messages from "./Messages";
import ContactsList from "./ContactsList";

const Chat = ({get_chat_rooms, delete_chat_user}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    get_chat_rooms()
    return () => delete_chat_user()
  }, [])

  return (
    <>
      <Account title='Чат' menu_item='chat'>

        <div className={styles.chat_wrapper}>
          <ContactsList/>
          <Messages/>
        </div>

      </Account>
    </>
  )
}

const mapDispatchToProps = {get_chat_rooms, delete_chat_user}

export default connect(null, mapDispatchToProps)(Chat)