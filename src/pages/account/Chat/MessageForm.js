import React, {useEffect, useRef, useState} from 'react';
import styles from './Chat.module.css';
import send from "./images/send.svg";

const MessageForm = ({action}) => {

  const textareaRef = useRef()

  const textareaElement = textareaRef.current;

  const handleSend = (e) => {
    e.preventDefault();
    action(message)
    setMessage('')
  }

  // useEffect(() => {
  //   const listener = (event) => {
  //     if ((event.code === "Enter" || event.code === "NumpadEnter") && event.metaKey) {
  //       console.log(message)
  //       handleSend(event)
  //     }
  //   };
  //   if (textareaElement) {
  //     document.addEventListener("keydown", listener);
  //   }
  //   return () => {
  //     if (textareaElement) {
  //       document.removeEventListener("keydown", listener);
  //     }
  //   };
  // }, [textareaElement]);

  const [message, setMessage] = useState('')

  const handleMessageEdit = (e) => {
    setMessage(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSend}>
        {/*<div ref={ref} className={styles.editable_area} contentEditable="true" onChange={(e) => console.log(e.target)}/>*/}
        <textarea ref={textareaRef} placeholder='Текст сообщения' onChange={handleMessageEdit} value={message}/>
        <button type='submit'><img src={send} alt=""/></button>
      </form>
    </>
  );
};

export default MessageForm;