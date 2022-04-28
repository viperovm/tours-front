import React, {useEffect, useState} from 'react';
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import {connect} from "react-redux";
import {
  update_local_user,
  getBikData,
  updateCardData,
  resetBikData,
  getInnData,
  resetInnData,
  clear_errors,
} from "../../../redux/actions/authActions";
import {getCountries} from "../../../redux/actions/toursActions";
import {isNotEmptyObject} from "../../../functions";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";

const Transaction = ({
                       user,
                       getBikData,
                       resetBikData,
                       update_local_user,
                       getInnData,
                       resetInnData,
                       error,
                       clear_errors,
                       getCountries,
                       countries,
                     }) => {

  const [transaction, setTransaction] = useState(null)
  const [spinner, setSpinner] = useState(false)
  const [innSpinner, setInnSpinner] = useState(false)
  const [clear, setClear] = useState(false)
  const [innClear, setInnClear] = useState(false)

  useEffect(() => {
    return () => clear_errors()
  }, [])

  useEffect(() => {
    if (isNotEmptyObject(user) && isNotEmptyObject(user.bank_transaction)) {
      setTransaction(user.bank_transaction)
      setSpinner(false)
      setInnSpinner(false)
    }
  }, [user, spinner, innSpinner])

  const handleBikDataGet = (name, value) => {
    setSpinner(true)
    if (value.length === 9) {
      setClear(false)
      getBikData({[name]: value}, 'transaction')
    } else if (value.length !== 9) {
      setClear(true)
      resetBikData('transaction')
    }
  }

  const handleInnDataGet = (name, value) => {
    setInnSpinner(true)
    if (value.length === 10 || value.length === 12) {
      setInnClear(false)
      getInnData({[name]: value})
    } else if (value.length !== 10 || value.length !== 12) {
      setInnClear(true)
      resetInnData()
    }
  }

  const handleChange = (name, value) => {
    let bank_transaction = user.bank_transaction
    update_local_user({
      ...user,
      bank_transaction: {
        ...bank_transaction,
        [name]: value,
      }
    })
  }

  return (
    <>
      <SingleWrapper label='Страна платежного адреса' comment='' name={'billing_country'} full={true} margin={0}>
        <SelectInput
          action={handleChange}
          name='billing_country'
          label='Страна платежного адреса'
          val={user && user.bank_transaction && user.bank_transaction.billing_country}
          options={countries}
          error={error}
        />
      </SingleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          label={'БИК Банка'}
          action={handleBikDataGet}
          name='bank_bik'
          value={user && user.bank_transaction && user.bank_transaction.bank_bik}
          error={error}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'Банк-получатель'}
          action={handleChange}
          name='bank_name'
          value={user && user.bank_transaction && user.bank_transaction.bank_name}
          error={error}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'Корр. Счет'}
          action={handleChange}
          name='bank_account'
          value={user && user.bank_transaction && user.bank_transaction.bank_account}
          error={error}
        />
        <Input
          clear={clear}
          spinner={spinner}
          label={'ИНН Банка'}
          action={handleChange}
          name='bank_inn'
          value={user && user.bank_transaction && user.bank_transaction.bank_inn}
          error={error}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={clear}
          spinner={spinner}
          label={'КПП Банка'}
          action={handleChange}
          name='bank_kpp'
          value={user && user.bank_transaction && user.bank_transaction.bank_kpp}
          error={error}
        />
        <Input
          label={'ИНН Получателя'}
          action={handleInnDataGet}
          name='recipient_inn'
          value={user && user.bank_transaction && user.bank_transaction.recipient_inn}
          error={error}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          clear={innClear}
          spinner={innSpinner}
          label={'Наименование получателя'}
          action={handleChange}
          name='recipient_name'
          value={user && user.bank_transaction && user.bank_transaction.recipient_name}
          error={error}
        />
        <Input
          label={'Р/С Получателя'}
          action={handleChange}
          name='recipient_account'
          value={user && user.bank_transaction && user.bank_transaction.recipient_account}
          error={error}
        />
      </DoubleWrapper>
      <SingleWrapper full={true} margin={0} label={'Основание платежа'}>
        <Input
          label={'Основание платежа'}
          action={handleChange}
          name='bank_payment_reason'
          value={user && user.bank_transaction && user.bank_transaction.bank_payment_reason}
          error={error}
        />
      </SingleWrapper>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  countries: state.tours.countries,
  status: state.auth.status,
  languages: state.tours.languages,
  bik_data: state.profile.bik_data,
  recipient_inn_data: state.profile.recipient_inn_data,
  // error: state.auth.error,
})

export default connect(mapStateToProps, {
  updateCardData,
  getBikData,
  resetBikData,
  update_local_user,
  getInnData,
  resetInnData,
  clear_errors,
  getCountries,
})(Transaction)