import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import {update_local_user, getBikData, updateCardData, resetBikData} from "../../../redux/actions/authActions";
import {isNotEmptyObject} from "../../../functions";

const DebetCard = ({user, getBikData, resetBikData, update_local_user}) => {

  const [debetCard, setDebetCard] = useState(null)
  const [spinner, setSpinner] = useState(false)
  const [clear, setClear] = useState(false)

  useEffect(() => {
    if(isNotEmptyObject(user) && isNotEmptyObject(user.debet_card)) {
      setDebetCard(user.debet_card)
      setSpinner(false)
    }
  }, [user, debetCard])

  const handleDataGet = (name, value) => {
    setSpinner(true)
    if(value.length === 9) {
      setClear(false)
      getBikData({[name]: value}, 'card')
    } else if(value.length !== 9) {
      setClear(true)
      resetBikData('card')
    }
  }

  const handleChange = (name, value) => {
    let debet_card = user.debet_card
    update_local_user({
      ...user,
      debet_card: {
        ...debet_card,
        [name]: value,
      }
    })
  }

  return (
    <>
      <DoubleWrapper full={true} margin={0}>
        <Input
          label={'БИК Банка'}
          action={handleDataGet}
          name='bank_bik'
          value={user && user.debet_card && user.debet_card.bank_bik}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'Банк-получатель'}
          action={handleChange}
          name='bank_name'
          value={user && user.debet_card && user.debet_card.bank_name}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'Корр. Счет'}
          action={handleChange}
          name='bank_account'
          value={user && user.debet_card && user.debet_card.bank_account}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'ИНН Банка'}
          action={handleChange}
          name='bank_inn'
          value={user && user.debet_card && user.debet_card.bank_inn}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'КПП Банка'}
          action={handleChange}
          name='bank_kpp'
          value={user && user.debet_card && user.debet_card.bank_kpp}
        />
        <Input
          label={'Получатель (ФИО)'}
          action={handleChange}
          name='recipient_full_name'
          value={user && user.debet_card && user.debet_card.recipient_full_name}
        />
      </DoubleWrapper>
      <SingleWrapper full={true} margin={0} label={'Основание платежа'}>
        <Input
          label={'Основание платежа'}
          action={handleChange}
          name='bank_payment_reason'
          value={user && user.debet_card && user.debet_card.bank_payment_reason}
        />
      </SingleWrapper>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  languages: state.tours.languages,
  bik_data: state.profile.bik_data,
  recipient_inn_data: state.profile.recipient_inn_data,
})

export default connect(mapStateToProps, {updateCardData, getBikData, resetBikData, update_local_user})(DebetCard)