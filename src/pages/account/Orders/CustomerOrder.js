import React from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import {properNumber} from "../../../functions";

const CustomerOrder = ({order}) => {

  const {
    id,
    name,
    start_date,
    finish_date,
    travelers,
    travelers_number,
    cost,
    currency,
    status,
    actions,
  } = order

  return (
    <>
      <tr>
        <td>
          <div className={styles.table_id}>
            {id}
          </div>
        </td>
        <td>
          <div className={styles.table_actions}>
            {actions.map(item => <div style={{color: item.color}}>
              {item.title}
            </div>)}
          </div>
        </td>
        <td>
          <div className={styles.table_tour}>
            <div>
              {name}
            </div>
            <div>
              {`${start_date} - ${finish_date}`}
            </div>
          </div>
        </td>
        <td>
          <div className={styles.table_travelers}>
            {`${travelers[0]?.last_name} (${travelers_number} чел.)`}
          </div>
        </td>
        <td>
          <div className={styles.table_price}>
            {`${properNumber(cost)}${currency}`}
          </div>
        </td>
        <td>
          <div className={styles.table_status}>
            {status}
          </div>
        </td>
      </tr>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerOrder)