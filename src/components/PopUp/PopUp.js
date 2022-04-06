import React from "react";
import styles from './PopUp.module.css'
import ok from './ok.svg'
import cancel from './cancel.svg'
import Button from "../AccountTours/Components/Button";

const PopUp = ({status, title, text, button, action, second_action, button2}) => {
  return (
    <>
      <div className={styles.popup_wrapper}>
        <div className={styles.popup_body}>
          <div className={styles.popup_icon}><img src={status === 'ok' ? ok : cancel} alt=""/></div>
          <div className={styles.popup_title}>{title}</div>
          <div className={styles.popup_text}>{text}</div>
          <Button text={button} action={action} color={'button-primary'} width={'100%'} margin={'0'}/>
          {status === 'danger' && <Button text={button2} action={second_action} color={'button-danger'} width={'100%'} margin={'20px 0 0 0'}/>}
        </div>
      </div>
    </>
  )
}

export default PopUp