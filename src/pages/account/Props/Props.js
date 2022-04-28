import React, {useEffect, useState} from 'react';
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import Button from "../../../components/AccountTours/Components/Button";
import Account from "../../../layouts/account/account";
import { connect } from 'react-redux'
import {setPage, update_user, updateCardData, updateTransactionData} from "../../../redux/actions/authActions";
import {getLanguages} from "../../../redux/actions/toursActions";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import DebetCard from "./DebetCard";
import Transaction from "./Transaction";

const data = [
  {
    id: 1,
    available: true,
    title: 'Дебетовая карта',
    subtitle: '(Валюта: RUR)',
    list: [
      'Доступна ТОЛЬКО для резидентов РФ с паспортом гражданина РФ.',
      'Необходимо пройти проверку СМЭВ для исполнения перевода через систему “Безопасная сделка”.',
      'Получайте выплату через 48 часов после оплаты клиентом.',
      'В выходные и праздничные дни обработка платежа может быть увеличена.',
      'Без дополнительных сборов.',
    ],
  },
  {
    id: 2,
    available: true,
    title: 'Банковский перевод',
    subtitle: '(Валюта: RUR)',
    list: [
      'Выплата осуществляется на расчетный счет юридического лица, зарегистрированного в Российской Федерации.',
      'Получайте выплату в течение 8 банковских дней после оплаты клиентом.',
      'В выходные и праздничные дни обработка платежа может быть увеличена.',
      'Без дополнительных сборов.',
    ],
  },
  {
    id: 3,
    available: false,
    title: 'Международная платежная система Payoneer',
    subtitle: '(Валюта: USD/EUR) ',
    // list: [
    //   'Для получения выплат вам необходим аккаунт в Payoneer.',
    //   'Срок выплаты до 7 рабочих дней.',
    //   'В выходные и праздничные дни обработка платежа может быть увеличена.',
    //   'Может содержать дополнительные комиссии до 2%',
    // ],
    list: [
      'Временно недоступна',
    ],
  },
]

const Props = ({user, status, updateCardData, updateTransactionData}) => {

  const [active, setActive] = useState(1)

  useEffect(() => {
    setPage('profile')
    getLanguages()
  }, [])

  const handleSubmit = () => {
    if(active === 1) {
    updateCardData(user.id, user.debet_card)
    } else if(active === 2) {
    updateTransactionData(user.id, user.bank_transaction)
    }
  }

  const Card = ({title, subtitle, list, id, available}) => (
    <div className={`card-body ${active === id ? 'active' : ''}`}>
      <div className="card-data">
        <div className="card-title">
          {title}
        </div>
        <div className="card-subtitle">
          {subtitle}
        </div>
        <div className="card-list">
          <ul>
            {list.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
      <Button text={`${active === id ? 'Выбрано' : 'Выбрать'}`} width={'100%'} color={`${active === id ? 'button-success' : 'button-primary'}`} active={available} action={() => setActive(id)}/>
    </div>
  )

  return (
    <Account title='Реквизиты' menu_item='props'>
      <>
        {status === 'experts' && (
          <main>
            <div className='global-h2-heading'>
              <h2>Реквизиты</h2>
            </div>
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                Комиссия работы с сервисом, для вас составляет всего:
              </div>
            </div>
            <div className="team-subtitle">
              Метод выплаты
            </div>
            <SingleWrapper margin={0} label={'Страна платежного адреса'}>
              <SelectInput/>
            </SingleWrapper>

            <div className="cards-wrapper">
              {data.map((item, index) => <Card key={index} id={item.id} list={item.list} subtitle={item.subtitle} title={item.title} available={item.available}/>)}
            </div>

            {active === 1 && (
              <DebetCard/>
            )}

            {active === 2 && (
              <Transaction/>
            )}

            <Button text={'Сохранить'} width={'50%'} action={handleSubmit}/>
          </main>
        )}
      </>
    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  languages: state.tours.languages,
  bankCardData: state.profile.bank_card_data,
  bankTransactionData: state.profile.bank_transaction_data,
  recipient_inn_data: state.profile.recipient_inn_data,
})

export default connect(mapStateToProps, { setPage, update_user, getLanguages, updateCardData, updateTransactionData,})(Props)