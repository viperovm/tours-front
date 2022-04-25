import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ProfileInputWrapper from "../../../components/AccountProfile/Wrappers/ProfileInputWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import Button from "../../../components/AccountTours/Components/Button";
import Account from "../../../layouts/account/account";
import { connect } from 'react-redux'
import {setPage, update_user} from "../../../redux/actions/authActions";
import {getLanguages} from "../../../redux/actions/toursActions";
import TeamList from "../../../components/AccountTours/Components/TeamList";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import FileInput from "../../../components/AccountTours/FormFields/FileInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";

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

const Props = ({user, status}) => {

  useEffect(() => {
    setPage('profile')
    getLanguages()
  }, [])

  const [localUser, setLocalUser] = useState({})
  const [active, setActive] = useState(1)

  useEffect(() => {
    if(user) {
      setLocalUser(user)
    }
  }, [user])


  const handleChange = (name, value) => {
    setLocalUser({
      ...localUser,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    update_user({
      ...localUser,
    })
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
            {/*<div className='tours-list-add-button-wrapper'>*/}
            {/*  <div className='tours-list-add-button-text'>*/}
            {/*    <p>*/}
            {/*    Когда вы получаете платеж за бронирование, мы называем его выплатой. Наша безопасная система платежей может выплачивать средства разными способами в зависимости от настроек ниже.*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*    Для получения оплат нужно обязательно выбрать метод, как вы хотите получать средства на счет. YouTravel.me обычно производит выплаты через 24 часа после оплаты клиентов. Срок зачисления средств зависит от способа выплаты.*/}
            {/*    </p>*/}

            {/*  </div>*/}
            {/*</div>*/}
            <div className="team-subtitle">
              Метод выплаты
            </div>
            <SingleWrapper margin={0} label={'Страна платежного адреса'}>
              <SelectInput/>
            </SingleWrapper>

            <div className="cards-wrapper">
              {data.map(item => <Card id={item.id} list={item.list} subtitle={item.subtitle} title={item.title} available={item.available}/>)}
            </div>

            {active === 1 && (
              <>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Корр. Счет'}
                    action={handleChange}
                    name='bank_account'
                    value={localUser.bank_account}
                  />
                  <Input
                    label={'ИНН Банка'}
                    action={handleChange}
                    name='bank_inn'
                    value={localUser.bank_inn}
                  />
                </DoubleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'КПП Банка'}
                    action={handleChange}
                    name='bank_kpp'
                    value={localUser.bank_kpp}
                  />
                  <Input
                    label={'Получатель (ФИО)'}
                    action={handleChange}
                    name='bank_recipient_full_name'
                    value={localUser.bank_recipient_full_name}
                  />
                </DoubleWrapper>
                <SingleWrapper full={true} margin={0} label={'Основание платежа'}>
                  <Input
                    label={'Основание платежа'}
                    action={handleChange}
                    name='bank_payment_reason'
                    value={localUser.bank_payment_reason}
                  />
                </SingleWrapper>
              </>
            )}

            {active === 2 && (
              <>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'БИК Банка'}
                    action={handleChange}
                    name='bank_bik'
                    value={localUser.bank_bik}
                  />
                  <Input
                    label={'Банк-получатель'}
                    action={handleChange}
                    name='bank_name'
                    value={localUser.bank_name}
                  />
                </DoubleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Корр. Счет'}
                    action={handleChange}
                    name='bank_account'
                    value={localUser.bank_account}
                  />
                  <Input
                    label={'ИНН Банка'}
                    action={handleChange}
                    name='bank_inn'
                    value={localUser.bank_inn}
                  />
                </DoubleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'КПП Банка'}
                    action={handleChange}
                    name='bank_kpp'
                    value={localUser.bank_kpp}
                  />
                  <Input
                    label={'ИНН Получателя'}
                    action={handleChange}
                    name='bank_recipient_inn'
                    value={localUser.bank_recipient_inn}
                  />
                </DoubleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Наименование получателя'}
                    action={handleChange}
                    name='bank_recipient_name'
                    value={localUser.bank_recipient_name}
                  />
                  <Input
                    label={'Р/С Получателя'}
                    action={handleChange}
                    name='bank_recipient_account'
                    value={localUser.bank_recipient_account}
                  />
                </DoubleWrapper>
                <SingleWrapper full={true} margin={0} label={'Основание платежа'}>
                  <Input
                    label={'Основание платежа'}
                    action={handleChange}
                    name='bank_payment_reason'
                    value={localUser.bank_payment_reason}
                  />
                </SingleWrapper>
              </>
            )}


            {/*<div className="team-subtitle">*/}
            {/*  Реквизиты карты*/}
            {/*</div>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Страна платежного адреса'}/>*/}
            {/*  <Input label={'Номер карты'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Срок действия'}/>*/}
            {/*  <Input label={'Владелец карты'}/>*/}
            {/*</DoubleWrapper>*/}

            {/*<div className="props-text">*/}
            {/*  Для того, чтобы мы смогли вам перечислить деньги на счет, Вам необходимо указать: паспортные данные и ИНН получателя (данные необходимы для выполнения требований законодательства в сфере противодействия легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма. Данные используются в указанных целях и НЕ передаются в иные организации)*/}
            {/*</div>*/}

            {/*<div className="props-text-bold">*/}
            {/*  Статус проверки СМЭВ: Проверка не производилась*/}
            {/*</div>*/}

            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Имя'}/>*/}
            {/*  <Input label={'Фамилия'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Отчество'}/>*/}
            {/*  <Input label={'Номер телефона'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Серия паспорта'}/>*/}
            {/*  <Input label={'Номер паспорта'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Паспорт/Кем выдан'}/>*/}
            {/*  <Input label={'Паспорт/Код подразделения'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Паспорт/Дата выдачи'}/>*/}
            {/*  <Input label={'Паспорт/Место рождения'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Дата рождения'}/>*/}
            {/*  <Input label={'ИНН'}/>*/}
            {/*</DoubleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Реквизиты для выставления счета*/}
            {/*</div>*/}

            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Наименование организации'}/>*/}
            {/*  <Input label={'ИНН'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'КПП'}/>*/}
            {/*  <Input label={'БИК '}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<DoubleWrapper full={true} margin={0}>*/}
            {/*  <Input label={'Наименование банка '}/>*/}
            {/*  <Input label={'Расчетный счет'}/>*/}
            {/*</DoubleWrapper>*/}
            {/*<SingleWrapper full={true} margin={0} label={'Кор. Счет'}>*/}
            {/*  <Input label={'Кор. Счет'}/>*/}
            {/*</SingleWrapper>*/}

            <Button text={'Готово'} width={'50%'}/>
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
})

export default connect(mapStateToProps, { setPage, update_user, getLanguages })(Props)