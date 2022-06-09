import React from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';

const ExpertOrder = ({order}) => {

  const {
    order_id,
    transaction_id,
    transaction_date,
    tour,
    traveler_name,
    travelers_amount,
    order_price,
    order_status
  } = order

  return (
    <>
      <tr>
        <td>{order_id}</td>
        <td>
          <div className={styles.table_actions}>
            <div>
              Подтвердить
            </div>
            <div>
              Отменить
            </div>
          </div>
        </td>
        <td>
          <div className={styles.table_transaction}>
            <div>
              {transaction_date}
            </div>
            <div>
              {transaction_id}
            </div>
          </div>
        </td>
        <td>
          <div className={styles.table_tour}>
            <div>
              {tour.name}
            </div>
            <div>
              {`${tour.start_date} - ${tour.finish_date}`}
            </div>
          </div>
        </td>
        <td>{`${traveler_name}(${travelers_amount})`}</td>
        <td>{order_price}</td>
        <td>{order_status}</td>
      </tr>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpertOrder)