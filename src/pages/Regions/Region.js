import React from 'react';
import styles from './Regions.module.css';
import {connect} from 'react-redux';

const Region = ({region}) => {
  return (
    <>
      {region?.name}
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Region)