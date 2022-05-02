import React, {useEffect, useState} from 'react'
import Account from '../../../layouts/account/account'

import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import Button from "../../../components/AccountTours/Components/Button";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";

import {styled} from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ObjectFileInput from "../../../components/AccountTours/FormFields/ObjectFileInput";
import {getUserInn, resetUserInn} from "../../../redux/actions/profileActions";
import {
  update_local_user, setPage, getRecipientInnData, resetRecipientInnData, updateLegalVerificationData,
  updateIndividualVerificationData, clear_verification_status, update_user, load_user, clear_errors,
} from "../../../redux/actions/authActions";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import {getCountries} from "../../../redux/actions/toursActions";
import PopUp from "../../../components/PopUp/PopUp";
import Individual from "./Individual";
import Legal from "./Legal";

const data = [{
  id: 1, available: true, title: 'Физическое лицо', subtitle: '', list: [],
}, {
  id: 2, available: true, title: 'Юридическое лицо (ИП, ООО)', subtitle: '', list: [],
},]

const BpIcon = styled('span')(({theme}) => ({
  borderRadius: '50%',
  width: 24,
  height: 24,
  boxShadow: theme.palette.mode === 'dark' ? '0 0 0 1px rgb(16 22 26 / 40%)' : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))' : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)', outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none', background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#84BB59',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#84BB59',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (<Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        }, '&.MuiRadio-root': {
          paddingRight: '20px', marginLeft: '8px',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon/>}
      icon={<BpIcon/>}
      {...props}
    />);
}


const Requests = ({
                    user,
                    status,
                    setPage,
                    getCountries,
                    countries,
                    updateIndividualVerificationData,
                    updateLegalVerificationData,
                    update_verification_status,
                    clear_verification_status,
                    load_user,
                    clear_errors,
                    update_user,
                  }) => {

  if(!user) {
    load_user()
  }

  const [active, setActive] = useState(1)
  const [activePopUp, setActivePopUp] = useState(false)

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
      <Button text={`${active === id ? 'Выбрано' : 'Выбрать'}`} width={'100%'}
              color={`${active === id ? 'button-success' : 'button-primary'}`} active={available}
              action={() => {
                clear_errors()
                setActive(id)
              }}/>
    </div>)


  if (status === 'customers') {
    return <Redirect to='/404'/>
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
  if(update_verification_status >= 200 && update_verification_status < 300) {
    setActivePopUp(true)
  }
}, [update_verification_status])

  // console.log(user.legal_verification)

  const handleSubmit = () => {
    if (active === 1) {
      updateIndividualVerificationData(user.id, user.individual_verification)
    } else if (active === 2) {
      update_user(user)
      updateLegalVerificationData(user.id, user.legal_verification)
    }
  }

  useEffect(() => {
    setPage('requests')
  }, [])

  return (<Account menu_item='requests' title='Запросы на проверку'>

      <>
        {activePopUp && <PopUp status={'ok'} title={'Данные успешно обновлены'}
                               text={''}
                               button={'Ок'} action={() => {
          setActivePopUp(false)
          clear_verification_status()
        }}/>}
        {status === 'experts' && (<main>
            <div className='global-h2-heading'>
              <h2>Запросы на проверку</h2>
            </div>


            <div className="team-subtitle">
              Вы оказываете услуги как:
            </div>

            <div className="cards-wrapper">
              {data.map((item, index) => <Card key={index} id={item.id} list={item.list} subtitle={item.subtitle} title={item.title}
                                      available={item.available}/>)}
            </div>

            {active === 1 && (
              <>
                <Individual countries={countries}/>
              </>
            )}

            {active === 2 && (
              <>
                <Legal countries={countries}/>
              </>
            )}

            <Button text={'ОТПРАВИТЬ ЗАПРОС НА ПРОВЕРКУ'} action={handleSubmit}/>
          </main>)}
      </>


    </Account>)
}

const mapStateToProps = state => ({
  user: state.auth.user,
  inn_data: state.auth.inn_data,
  update_verification_status: state.auth.update_verification_status,
  status: state.auth.status,
  error: state.auth.error,
  countries: state.tours.countries,
})

export default connect(mapStateToProps, {
  setPage, getUserInn, resetUserInn, update_local_user, getCountries, getRecipientInnData, resetRecipientInnData, updateLegalVerificationData,
  updateIndividualVerificationData, clear_verification_status, update_user, load_user, clear_errors,
})(Requests)
