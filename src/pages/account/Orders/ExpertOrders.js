import React from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';

const ExpertOrders = () => {
  return (
    <>
      <table>
        <tr>
          <th>ID заказа</th>
          <th>Действия</th>
          <th>Дата и ID транзакции</th>
          <th>Название тура и даты</th>
          <th>Ф.И.О (кол-во)</th>
          <th>Сумма</th>
          <th>Статус</th>
        </tr>

      </table>
    </>
  );
};

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpertOrders)