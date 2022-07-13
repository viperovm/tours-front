import React from 'react';
import styles from './Destinations.module.css';
import {connect} from 'react-redux';

const Destination = ({destination}) => {
  return (
    <>
      {destination?.name}
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Destination)