import React from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import CustomerOrder from "./CustomerOrder";

const CustomerOrders = ({orders}) => {
  return (
    <>
      <table>
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

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerOrders)