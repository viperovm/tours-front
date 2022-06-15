import React, {useEffect} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import CustomerOrder from "./CustomerOrder";
import {get_all_orders} from "../../../redux/actions/orderActions";

const CustomerOrders = ({
                          get_all_orders,
                          orders
}) => {

  useEffect(() => {
    get_all_orders()
  }, [])

  return (
    <>
      <table className={styles.orders_table}>
        <thead>
        <tr>
          <th>ID заказа</th>
          <th>Действия</th>
          <th>Название тура и даты</th>
          <th>Ф.И.О (кол-во)</th>
          <th>Сумма</th>
          <th>Статус</th>
        </tr>
        </thead>
        <tbody>
        {orders?.map((item, index) => <CustomerOrder key={index} order={item}/>)}
        </tbody>

      </table>
    </>
  );
};

const mapStateToProps = state => ({
  orders: state.orders.orders
})
const mapDispatchToProps = {
  get_all_orders,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerOrders)