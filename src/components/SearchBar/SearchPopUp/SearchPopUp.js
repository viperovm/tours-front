import React, {useState} from 'react'
import styles from './SearchPopUp.module.css'
import {connect} from 'react-redux'
import close from './img/close.svg'
import {GET_TOURS_SUCCESS} from "../../../redux/types";
import {resetFilter} from "../../../redux/actions/toursActions";

const SearchPopUp = ({children, title,  type, active_button, resetFilter}) => {

  const [active, setActive] = useState(false)

  const handleReset = () => {
    resetFilter(type)
  }

  return (
    <>
      {active &&
        <div className={styles.popup_wrapper}>
          <div className={styles.popup_card}>
            <div className={styles.popup_header}>
              <div className={styles.popup_header_title}>
                {title}
              </div>
              <img src={close} alt="close button" onClick={() => setActive(false)}/>
            </div>
            <div className={styles.popup_body}>
              {children}
            </div>
            <div className={styles.popup_footer} onClick={handleReset}>
              <div className={styles.popup_footer_text}>Сбросить фильтр</div>
            </div>
          </div>
        </div>
      }
      <button onClick={() => setActive(true)} className={`${styles.popup_card_button} ${active_button ? styles.active : ''}`}>
        {title}
      </button>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  resetFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPopUp)