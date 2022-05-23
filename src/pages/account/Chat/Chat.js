import React, {useEffect, useRef, useState} from 'react'
import styles from './Chat.module.css'
import {connect} from 'react-redux'
import Account from "../../../layouts/account/account";
import {clear_current_room, delete_chat_user, get_chat_rooms} from "../../../redux/actions/chatActions";
import Messages from "./Messages";
import ContactsList from "./ContactsList";
import MessagesArea from "./MessagesArea";

const Chat = ({get_chat_rooms, delete_chat_user, clear_current_room}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    get_chat_rooms()
    return () => {
      delete_chat_user()
      clear_current_room()
    }
  }, [])

  return (
    <>
      <Account title='Чат' menu_item='chat'>

        <div className={styles.chat_wrapper}>
          <ContactsList/>
          <MessagesArea/>
        </div>

      </Account>
    </>
  )
}

const mapDispatchToProps = {get_chat_rooms, delete_chat_user, clear_current_room}

export default connect(null, mapDispatchToProps)(Chat)