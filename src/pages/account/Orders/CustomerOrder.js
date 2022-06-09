import React from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';

const CustomerOrder = ({order}) => {

  const {
    order_id,
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
              Оплатить
            </div>
            <div>
              Отменить
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
)(CustomerOrder)