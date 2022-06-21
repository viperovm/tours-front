import React, {useRef} from "react";
import styles from './PopUp.module.css'
import ok from './ok.svg'
import cancel from './cancel.svg'
import Button from "../AccountTours/Components/Button";
import TextareaAutosize from "react-textarea-autosize";

const PopUp = ({status, title, text, button, action, second_action, button2, is_saved, first_color = 'button-primary', second_color = 'button-danger', with_field = false, input_action,
                 input_value, width, min_width,}) => {

  const textareaRef = useRef()

  return (
    <>
      <div className={styles.popup_wrapper}>
        <div className={styles.popup_body} style={{minWidth:min_width}}>
          {status && <div className={styles.popup_icon}><img src={status === 'ok' ? ok : cancel} alt=""/></div>}
          <div className={styles.popup_title}>{title}</div>
          <div className={styles.popup_text}>{text}</div>

          {with_field && <TextareaAutosize className={styles.pop_up_input} ref={textareaRef} placeholder='Причины отказа:' onChange={input_action} value={input_value} maxRows={5}/>}
          {/*{with_field && <input className={styles.pop_up_input} type="text" value={input_value} onChange={input_action}/>}*/}

          {button && <Button text={button} action={action} color={first_color} width={'100%'} margin={'0'}/>}
          {(status === 'danger' || is_saved) && <Button text={button2} action={second_action} color={second_color} width={'100%'} margin={'20px 0 0 0'}/>}
        </div>
      </div>
    </>
  )
}

export default PopUp