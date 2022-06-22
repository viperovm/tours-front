import React from 'react'
import styles from './SearchPopUp.module.css'
import {connect} from 'react-redux'
import close from './img/close.svg'

const SearchPopUp = ({children}) => {
  return (
    <>
      <div className="popup_card">
        <div className={styles.popup_header}>
          <div className={styles.popup_header_title}>
            
          </div>
          <img src={close} alt=""/>
        </div>
        <div className={styles.popup_body}>

        </div>
        <div className={styles.popup_footer}>

        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPopUp)