import React from 'react';
import styles from './Destinations.module.css';
import {connect} from 'react-redux';
import image from "./images/mocup.png";

const Destination = ({destination}) => {
  return (
    <>
      <div className={styles.destination_card} style={{backgroundImage: `url(${destination?.tmb_image ? destination?.tmb_image : image})`}}>
        <div className={styles.destination_card_name}>
          {destination?.name}
        </div>
        <div className={styles.destination_card_count}>
          туров: {destination?.tours_count}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Destination)