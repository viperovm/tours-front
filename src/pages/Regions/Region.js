import React from 'react';
import styles from './Regions.module.css';
import {connect} from 'react-redux';
import image from './images/mocup.png'

const Region = ({region}) => {
  return (
    <>
      <div className={styles.region_card} style={{backgroundImage: `url(${region?.tmb_image ? region?.tmb_image : image})`}}>
        <div className={styles.region_card_name}>
          {region?.name}
        </div>
        <div className={styles.region_card_count}>
          туров: {region?.tours_count}
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
)(Region)