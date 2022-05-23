import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import styles from './Chat.module.css';
import Message from "./Message";
import avatar4 from "./images/avatar4.png";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import send from "./images/send.svg";
import MessageForm from "./MessageForm";
import {set_current_messages, clear_current_messages,} from "../../../redux/actions/chatActions";
import MessagesList from "./MessagesList";

const Messages = ({current_room, set_current_messages, clear_current_messages,}) => {

  const client = current_room ?
    new W3CWebSocket(`wss://traveler.market/ws/chat/${current_room}/?token=${localStorage.getItem('access')}`)
  :
      null
  ;

  console.log(current_room)
  console.log(client)

  useEffect(() => {
    return () => {
      clear_current_messages()
      client?.close()
    }
  })

  useEffect(() => {
    if(client) {
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };

      client.onclose = () => {
        console.log('WebSocket Client Disconnected');
      };

      client.onerror = (e) => {
        console.error(e);
        console.log('Connection Error');
      };

      client.onmessage = (e) => {
        const dataFromServer = JSON.parse(e.data);
        console.log('got reply! ', dataFromServer.type);
        if (dataFromServer){
          set_current_messages(dataFromServer)
        }
      };
    }
  }, [client])

  console.log(current_room)



  const handleSend = (message) => {
    client.send(JSON.stringify({
      message: message
    }));
    // set_current_messages({
    //   author:
    //     {
    //       id: user.id,
    //       avatar: user.avatar
    //     },
    //   message: message,
    //   time_date: Date.now(),
    // })
  }

  return (
    <>
      <div className={styles.chat_messages}>
        <MessagesList/>
        <div className={styles.send_button}>
          <MessageForm action={handleSend}/>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  chat_rooms: state.chat.chat_rooms,
  current_room: state.chat.current_room,
})

const mapDispatchToProps = {set_current_messages, clear_current_messages}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)