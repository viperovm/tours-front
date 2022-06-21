import React, {useEffect, useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import CustomerOrder from "./CustomerOrder";
import {filter_orders, get_all_filters, get_all_orders} from "../../../redux/actions/orderActions";
import OrderFilters from "./OrderFilters";

const CustomerOrders = ({
                          get_all_orders,
                          get_all_filters,
                          filter_orders,
                          orders,
                          filters,
}) => {


  useEffect(() => {
    get_all_orders()
    get_all_filters()
  }, [])

  return (
    <>
      <OrderFilters filters={filters} />
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
  orders: state.orders.orders,
  filters: state.orders.filters,
})
const mapDispatchToProps = {
  get_all_orders,
  get_all_filters,
  filter_orders,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerOrders)