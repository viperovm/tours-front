import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import {connect} from 'react-redux';
import {Calendar as Cal} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SearchBar.css'

const Calendar = ({data, action}) => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    if(data.length > 0) {
      setValue(data)
    } else {
      setValue(new Date())
    }
  }, [data])

  return (
    <>
      <Cal
        onChange={action}
        value={value}
        className={styles.traveler_calendar}
        selectRange={true}
      />
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)