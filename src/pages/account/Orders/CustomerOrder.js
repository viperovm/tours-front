import React, {useState} from 'react';
import styles from './Orders.module.css';
import {connect} from 'react-redux';
import {properNumber} from "../../../functions";
import axios from "axios";
import * as t from "../../../redux/types";
import {update_order_actions} from "../../../redux/actions/orderActions";
import PopUp from "../../../components/PopUp/PopUp";

const CustomerOrder = ({order, update_order_actions}) => {

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

  const [action, setAction] = useState('')
  const [title, setTitle] = useState('')
  const [active, setActive] = useState(false)


  const handleSubmit = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    const body = JSON.stringify({})

    try {
      const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/orders/${id}/${action ? action : ''}`, body, config)

      update_order_actions('success', res)

    } catch (err) {
      update_order_actions('fail', err)
    }
  }

  const handleAction = async (act, confirmation, title) => {
    setTitle(title)
    await setAction(act)
    if(confirmation) {
      setActive(true)
    } else {
      await handleSubmit(action)
    }
  }

  return (
    <>
      {active && <PopUp
        second_color={'button-primary'}
        first_color={'button-danger'}
        button2={'Отменить'}
        button={'Продолжить'}
        action={handleSubmit}
        status={'danger'}
        title={title}
        text={'Данное действие необратимо. Уверены, что хотите продолжить?'}
        second_action={() => setActive(false)}
      />}
      <tr>
        <td>
          <div className={styles.table_id}>
            {id}
          </div>
        </td>
        <td>
          <div className={styles.table_actions}>
            {actions.map(item => <div style={{color: item.color, cursor: 'pointer'}} onClick={() => handleAction(item.action, item.confirmation, item.title)}>
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
const mapDispatchToProps = {
  update_order_actions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerOrder)