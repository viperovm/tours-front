import React, {useState} from 'react';
import styles from './MainNav.module.css'
import {connect} from 'react-redux';
import arrow from './img/arrow_down.svg'
import {Link} from "react-router-dom";

const NavItem = ({language, data, index, active, action }) => {

  return (
    <>
      <div className={styles.main_nav_item_wrapper}>
        <div className={`${styles.main_nav_item} ${active ? styles.active : ''}`} onClick={() => action(index)}>
          {data?.title}
          <img src={arrow} alt=""/>
        </div>
        {active && (
          <div className={`${styles.secondary_nav}`}>
            {data?.submenu?.map((item, index) => (
              <Link key={index} to={`/${language}${item.url}`}>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  language: state.languages.language
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavItem)