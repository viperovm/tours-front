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
  updateIndividualVerificationData, clear_verification_status, update_user,
} from "../../../redux/actions/authActions";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import {getCountries} from "../../../redux/actions/toursActions";
import PopUp from "../../../components/PopUp/PopUp";

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
                    error,
                    inn_data,
                    getUserInn,
                    resetUserInn,
                    update_local_user,
                    getCountries,
                    getRecipientInnData,
                    countries,
                    resetRecipientInnData,
                    updateIndividualVerificationData,
                    updateLegalVerificationData,
                    update_verification_status,
                    clear_verification_status,
                    update_user,
                  }) => {

  const [toursAmountActive, setToursAmountActive] = useState(false)
  const [active, setActive] = useState(1)
  const [localUser, setLocalUser] = useState({})
  const [spinner, setSpinner] = useState(false)
  const [clear, setClear] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)

  const {legal_verification, individual_verification} = user

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
              action={() => setActive(id)}/>
    </div>)

  console.log(user)

  if (status === 'customers') {
    return <Redirect to='/404'/>
  }

  useEffect(() => {
    if (user) {
      setLocalUser(user)
    }
  }, [user])

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    if (spinner) {
      let timer = setTimeout(() => setSpinner(false), 500)
      if (inn_data) {
        update_local_user({
          ...user, legal_verification: {
            ...inn_data
          },
        })
        setSpinner(false)
        clearTimeout(timer)
      } else {
        update_local_user({
          ...user, legal_verification: {
            recipient_inn: '',
            recipient_name: '',
            recipient_ogrn: '',
            recipient_status: '',
            recipient_registration_date: '',
          },
        })
      }
    }

  }, [inn_data, spinner])

  const handleChange = (name, value) => {
    if (active === 1) {
      update_local_user({
        ...user, individual_verification: {
          [name]: value,
        }
      })
    } else if (active === 2) {
      update_local_user({
        ...user, legal_verification: {
          [name]: value,
        }
      })
    }
    // setLocalUser({
    //   ...localUser,
    //   [name]: value,
    // })
  }
  useEffect(() => {
  if(update_verification_status >= 200 && update_verification_status < 300) {
    setActivePopUp(true)
  }
}, [update_verification_status])

  const handleNameChange = (name, value) => {
    update_local_user({
      ...user,
      [name]: value,
    })
  }

  const handleInnChange = (name, value) => {
    setSpinner(true)
    if (value.length === 10 || value.length === 12) {
      setClear(false)
      getRecipientInnData({[name]: value})
    } else if (value.length !== 10 || value.length !== 12) {
      setClear(true)
      resetRecipientInnData()
    }
  }

  const handleSubmit = () => {
    if (active === 1) {
      update_user({
        last_name: user.last_name,
        first_name: user.first_name,
        patronymic: user.patronymic,
      })
      updateIndividualVerificationData(user.id, user.individual_verification)
    } else if (active === 2) {
      updateLegalVerificationData(user.id, user.legal_verification)
    }
  }

  // const handleRadioChange = (e) => {
  //   const {name, value} = e.target
  //   if (value === 'yes') {
  //     setToursAmountActive(true)
  //   } else if (value === 'no') {
  //     setToursAmountActive(false)
  //   }
  //   setLocalUser({
  //     ...localUser,
  //     [name]: value,
  //   })
  // }

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
            {/*<div className='tours-list-add-button-wrapper'>*/}
            {/*  <div className='tours-list-add-button-text'>*/}
            {/*    <p>Тревел-экспертом мы называем человека, для которого путешествия перестали быть развлечением, а стали любимой организационной деятельностью/бизнесом /делом жизни!</p>*/}

            {/*    <p>Как маркетплейс, мы несем ответственность за партнеров, чьи туры размещаем на сайте, поэтому без статуса вы не сможете подтверждать бронирования и принимать оплату от клиентов.<br/>*/}
            {/*      Если вы не получили статус проверенного тревел-эксперта в течение 4 дней, мы имеем право снять ваши туры с публикации.</p>*/}

            {/*    <p>*/}
            {/*      Статус "проверенного" может получить не каждый организатор. У вас должны быть:*/}
            {/*      <ol>*/}
            {/*        <li>*/}
            {/*          Успешный опыт разработки и реализации авторских программ*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          Успешный опыт создания и проведения многодневных туров*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*          Подтверждение отзывами ваших клиентов, которые были в турах на коммерческой основе.*/}
            {/*        </li>*/}
            {/*      </ol>*/}
            {/*    </p>*/}

            {/*    <p>*/}
            {/*      Примерное время заполнение формы: 40 минут.<br/>*/}
            {/*      В форме 3 блока:*/}
            {/*      <ul>*/}
            {/*        <li>организационный (для его прохождения обязательно заполните ваш профиль на сайте)</li>*/}
            {/*        <li>опыт организации коммерческих многодневных групповых туров</li>*/}
            {/*        <li>опыт проведения коммерческих многодневных групповых туров</li>*/}
            {/*      </ul>*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*      Процесс проверки занимает до 4 рабочих дней, но может пройти быстрее. Отвечайте на вопросы развернуто и предоставьте максимум информации о себе, чтобы ускорить процесс и повысить свои шансы на успешное прохождение верификации.*/}
            {/*    </p>*/}

            {/*  </div>*/}
            {/*</div>*/}

            <div className="team-subtitle">
              Вы оказываете услуги как:
            </div>

            <div className="cards-wrapper">
              {data.map(item => <Card id={item.id} list={item.list} subtitle={item.subtitle} title={item.title}
                                      available={item.available}/>)}
            </div>

            {active === 1 && (<>
                <SingleWrapper label='Фамилия' width={'100%'} margin={'0'}>
                  <Input
                    label={'Фамилия'}
                    action={handleNameChange}
                    name='last_name'
                    value={user && user.last_name}
                  />
                </SingleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Имя'}
                    action={handleNameChange}
                    name='first_name'
                    value={user && user.first_name}
                  />
                  <Input
                    label={'Отчество'}
                    action={handleNameChange}
                    name='patronymic'
                    value={user && user.patronymic}
                  />
                </DoubleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Серия паспорта'}
                    action={handleChange}
                    name='passport_series'
                    value={individual_verification && individual_verification.passport_series}
                  />
                  <Input
                    label={'Номер паспорта'}
                    action={handleChange}
                    name='passport_number'
                    value={individual_verification && individual_verification.passport_number}
                  />
                </DoubleWrapper>
                <SingleWrapper label='Кем выдан' width={'100%'} margin={'0'}>
                  <Input
                    label={'Кем выдан'}
                    action={handleChange}
                    name='passport_issued_by'
                    value={individual_verification && individual_verification.passport_issued_by}
                  />
                </SingleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Номер подразделения'}
                    action={handleChange}
                    name='passport_code_issued_by'
                    value={individual_verification && individual_verification.passport_code_issued_by}
                  />
                  <Input
                    label={'Дата выдачи'}
                    action={handleChange}
                    name='passport_date'
                    value={individual_verification && individual_verification.passport_date}
                    type={'date'}
                  />
                </DoubleWrapper>
              </>)}

            {active === 2 && (<>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'ИНН'}
                    action={handleInnChange}
                    name='recipient_inn'
                    value={legal_verification && legal_verification.recipient_inn}
                  />
                  <Input
                    clear={clear}
                    spinner={spinner}
                    label={'ОГРН (ОГРНИП)'}
                    action={handleChange}
                    name='recipient_ogrn'
                    value={legal_verification && legal_verification.recipient_ogrn}
                    error={error}
                  />
                </DoubleWrapper>
                <SingleWrapper label='Наименование Юр. лица' width={'100%'} margin={'0'}>
                  <Input
                    clear={clear}
                    spinner={spinner}
                    label={'Наименование Юр. лица'}
                    action={handleChange}
                    name='recipient_name'
                    value={legal_verification && legal_verification.recipient_name}
                  />
                </SingleWrapper>
                <SingleWrapper label='Юридический адрес' width={'100%'} margin={'0'}>
                  <Input
                    label={'Юридический адрес'}
                    action={handleChange}
                    name='recipient_legal_address'
                    value={legal_verification && legal_verification.recipient_legal_address}
                  />
                </SingleWrapper>
                <SingleWrapper label='Фактический адрес' width={'100%'} margin={'0'}>
                  <Input
                    label={'Фактический адрес'}
                    action={handleChange}
                    name='recipient_real_address'
                    value={legal_verification && legal_verification.recipient_real_address}
                  />
                </SingleWrapper>
                <SingleWrapper label='Сканы уставных документов (ИНН, ОГРН)' width={'100%'} margin={'0'}>
                  <ObjectFileInput
                    label={'Сканы уставных документов (ИНН, ОГРН)'}
                    action={handleChange}
                    name='user_docs'
                    value={legal_verification && legal_verification.user_docs}
                  />
                </SingleWrapper>
              </>)}


            <SingleWrapper margin={0} label={'Резидентом какой страны вы являетесь?'} width={'100%'}>
              <SelectInput
                label={'Резидентом какой страны вы являетесь?'}
                action={handleChange}
                name='residency'
                value={active === 1 ? individual_verification && individual_verification.residency : legal_verification && legal_verification.residency}
                options={countries}
              />
            </SingleWrapper>
            <div className="team-subtitle">
              Есть ли у вас лицензия туроператора?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue={'yes'}
                  aria-labelledby="demo-customized-radios"
                  name="license"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.license === 'yes' : legal_verification && legal_verification.license === 'yes'}
                    value={'yes'}
                    control={<BpRadio/>}
                    label="Да"
                  />
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.license === 'no' : legal_verification && legal_verification.license === 'no'}
                    value={'no'}
                    control={<BpRadio/>}
                    label="Нет"
                  />

                </RadioGroup>
              </FormControl>
            </div>
            <div className="team-subtitle">
              Вы уже проводили туры на коммерческой основе?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue={'no'}
                  aria-labelledby="demo-customized-radios"
                  name="commercial_tours"
                  // onChange={(e) => console.log(typeof e.target.value)}
                  // onChange={(e) => setToursAmountActive(e.target.value)}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.commercial_tours === 'yes' : legal_verification && legal_verification.commercial_tours === 'yes'}
                    value={'yes'}
                    control={<BpRadio/>}
                    label="Да"
                  />
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.commercial_tours === 'no' : legal_verification && legal_verification.commercial_tours === 'no'}
                    value={'no'}
                    control={<BpRadio/>}
                    label="Нет"
                  />

                </RadioGroup>
              </FormControl>
            </div>
            {((active === 1 && individual_verification && individual_verification.commercial_tours === 'yes') || (active === 2 && legal_verification && legal_verification.commercial_tours === 'yes')) && (<>
                <div className="team-subtitle">
                  Сколько туров вы проводите в год?
                </div>
                <div className="radio-set">
                  <FormControl>
                    <RadioGroup
                      defaultValue={"до 5"}
                      aria-labelledby="demo-customized-radios"
                      name="commercial_tours_yearly"
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    >
                      <FormControlLabel
                        selected={active === 1 ? individual_verification && individual_verification.commercial_tours_yearly === 'до 5' : legal_verification && legal_verification.commercial_tours_yearly === 'до 5'}
                        value="до 5"
                        control={<BpRadio/>}
                        label="до 5"
                      />
                      <FormControlLabel
                        selected={active === 1 ? individual_verification && individual_verification.commercial_tours_yearly === '5-12' : legal_verification && legal_verification.commercial_tours_yearly === '5-12'}
                        value="5-12"
                        control={<BpRadio/>}
                        label="5-12"
                      />
                      <FormControlLabel
                        selected={active === 1 ? individual_verification && individual_verification.commercial_tours_yearly === '13-20' : legal_verification && legal_verification.commercial_tours_yearly === '13-20'}
                        value="13-20"
                        control={<BpRadio/>}
                        label="13-20"
                      />
                      <FormControlLabel
                        selected={active === 1 ? individual_verification && individual_verification.commercial_tours_yearly === '21-30' : legal_verification && legal_verification.commercial_tours_yearly === '21-30'}
                        value="21-30"
                        control={<BpRadio/>}
                        label="21-30"
                      />
                      <FormControlLabel
                        selected={active === 1 ? individual_verification && individual_verification.commercial_tours_yearly === '30+' : legal_verification && legal_verification.commercial_tours_yearly === '30+'}
                        value="30+"
                        control={<BpRadio/>}
                        label="30+"
                      />

                    </RadioGroup>
                  </FormControl>
                </div>
                <SingleWrapper
                  label='Укажите ссылки на отзывы'
                  comment='Вводите через запятую'
                  name='reviews_links'
                >
                  <TextArea
                    action={handleChange}
                    name='reviews_links'
                    label=''
                    value={active === 1 ? individual_verification && individual_verification.reviews_links : legal_verification && legal_verification.reviews_links}
                    rows='7'
                    error={error}
                  />
                </SingleWrapper>

              </>)}


            <SingleWrapper margin={0} label={'В какие страны вы планируете организовывать туры?'} width={'100%'}>
              <SelectInput
                label={'В какие страны вы планируете организовывать туры?'}
                action={handleChange}
                name='tours_countries'
                value={active === 1 ? individual_verification && individual_verification.tours_countries : legal_verification && legal_verification.tours_countries}
                options={countries}
                multiple={true}
              />
            </SingleWrapper>
            <SingleWrapper
              label='Укажите ссылки на ресурсы (Социальные сети, Сайты), где размещены ваши туры'
              comment='Вводите через запятую'
              name='tours_links'
            >
              <TextArea
                action={handleChange}
                name='tours_links'
                label=''
                value={active === 1 ? individual_verification && individual_verification.tours_links : legal_verification && legal_verification.tours_links}
                rows='7'
                error={error}
              />
            </SingleWrapper>
            <div className="team-subtitle">
              Возникали ли у вас конфликтные ситуации с участниками тура?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue={'no'}
                  aria-labelledby="demo-customized-radios"
                  name="conflicts"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.conflicts === 'yes' : legal_verification && legal_verification.conflicts === 'yes'}
                    value={'yes'}
                    control={<BpRadio/>}
                    label="Да"
                  />
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.conflicts === 'no' : legal_verification && legal_verification.conflicts === 'no'}
                    value={'no'}
                    control={<BpRadio/>}
                    label="Нет"
                  />

                </RadioGroup>
              </FormControl>
            </div>
            {((active === 1 && individual_verification && individual_verification.conflicts === 'yes') || (active === 2 && legal_verification && legal_verification.conflicts === 'yes')) &&
              <SingleWrapper
                label='Опишите вкратце ситуацию'
                comment=''
                name='conflicts_review'
              >
                <TextArea
                  action={handleChange}
                  name='conflicts_review'
                  label=''
                  value={active === 1 ? individual_verification && individual_verification.conflicts_review : legal_verification && legal_verification.conflicts_review}
                  rows='7'
                  error={error}
                />
              </SingleWrapper>}
            <div className="team-subtitle">
              Имеются ли у вас юридические ограничения?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue={'no'}
                  aria-labelledby="demo-customized-radios"
                  name="legal_restrictions"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.legal_restrictions === 'yes' : legal_verification && legal_verification.legal_restrictions === 'yes'}
                    value={'yes'}
                    control={<BpRadio/>}
                    label="Да"
                  />
                  <FormControlLabel
                    selected={active === 1 ? individual_verification && individual_verification.legal_restrictions === 'no' : legal_verification && legal_verification.legal_restrictions === 'no'}
                    value={'no'}
                    control={<BpRadio/>}
                    label="Нет"
                  />

                </RadioGroup>
              </FormControl>
            </div>
            {((active === 1 && individual_verification && individual_verification.legal_restrictions === 'yes') || (active === 2 && legal_verification && legal_verification.legal_restrictions === 'yes')) && <SingleWrapper
              label='Опишите вкратце ситуацию'
              comment=''
              name='legal_restrictions_review'
            >
              <TextArea
                action={handleChange}
                name='legal_restrictions_review'
                label=''
                value={active === 1 ? individual_verification && individual_verification.legal_restrictions_review : legal_verification && legal_verification.legal_restrictions_review}
                rows='7'
                error={error}
              />
            </SingleWrapper>}


            {/*<SingleWrapper margin={0} label={'Проверьте пожалуйста, что у вас есть аккаунт на почте, которую вы укажите. Иначе мы не сможем вам сообщить результаты проверки. '} full={true}>*/}
            {/*  <Input label={'email'}/>*/}
            {/*</SingleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Ссылка на опубликованный тур на Traveler.market*/}
            {/*</div>*/}

            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'http://'}/>*/}
            {/*</SingleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Предоставьте не менее 3-х отзывов к опубликованному туру на Traveler.market*/}
            {/*</div>*/}

            {/*<SingleWrapper margin={0} label={'Если у вас есть социальные сети, где клиенты уже оставляли отзывы после путешествий с вами, прикрепите пожалуйста ссылку, чтобы мы могли с ними ознакомиться. Если нет - отправьте эту форму: https://docs.google.com/forms/d/e/1FAIpQLSfgL2Sd7LcxGV-9tttWD0JMUwOhrD8sR-KMvs5U1ItIOgiJ4Q/viewform своим клиентам, кто уже был с вами в опубликованном туре. Мы занесем эти отзывы вам в профиль в течение 3-х дней. Обратите внимание, что без отзывов ваших клиентов мы не сможем поставить вам статус проверенного тревел-эксперта. '} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Проверьте ваш профиль тревел-эксперта на Traveler.market*/}
            {/*</div>*/}
            {/*<div className="request-text">*/}
            {/*  Для прохождения верификации вам нужно оформить ваш личный профиль на сайте*/}
            {/*</div>*/}
            {/*<CheckboxInput green={true} label={'Загружена личная фотография'}/>*/}
            {/*<CheckboxInput green={true} label={'Заполнено описание'}/>*/}
            {/*<CheckboxInput green={true} label={'Добавлена команда (если вы работаете с гидами)'}/>*/}
            {/*<CheckboxInput green={true} label={'Подтверждены e-mail/номер телефона'}/>*/}
            {/*<CheckboxInput green={true} label={'Привязаны мессенджеры (социальные сети)'}/>*/}
            {/*<CheckboxInput green={true} label={'Есть минимум один опубликованный тур'}/>*/}
            {/*<CheckboxInput green={true} label={'Заполнены реквизиты и почтовый адрес'}/>*/}
            {/*<div className="team-subtitle">*/}
            {/*  Что больше подходит вам по описанию?*/}
            {/*</div>*/}
            {/*<div className="radio-set">*/}
            {/*  <FormControl>*/}
            {/*    <RadioGroup*/}
            {/*      defaultValue="female"*/}
            {/*      aria-labelledby="demo-customized-radios"*/}
            {/*      name="customized-radios"*/}
            {/*    >*/}
            {/*      <FormControlLabel value="female" control={<BpRadio />} label="Физическое лицо, работаю как гид, организую все сам" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="Физическое лицо, есть команда гидов и партнеры, сам занимаюсь организационными вопросами в турах" />*/}
            {/*      <FormControlLabel value="other" control={<BpRadio />} label="Юридическое лицо, работаю как гид, организую все сам" />*/}
            {/*      <FormControlLabel value="other" control={<BpRadio />} label="Юридическое лицо, есть команда гидов и партнеры, сам занимаюсь организационными вопросами в турах" />*/}

            {/*    </RadioGroup>*/}
            {/*  </FormControl>*/}
            {/*</div>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Ваше ФИО*/}
            {/*</div>*/}
            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  ИНН компании*/}
            {/*</div>*/}
            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}


            {/*<div className="team-subtitle">*/}
            {/*  Вы уже проводили групповые многодневные туры на коммерческой основе?*/}
            {/*</div>*/}
            {/*<div className="request-text">*/}
            {/*  Мы публикуем на площадке туры длительностью только от двух дней. Если вы проводили однодневные программы или экскурсии, и у вас нет опыта организации многодневных туров, то мы откажем в сотрудничестве до вашего первого проведенного многодневного тура с положительными отзывами от клиентов.*/}
            {/*</div>*/}
            {/*<div className="radio-set">*/}
            {/*  <FormControl>*/}
            {/*    <RadioGroup*/}
            {/*      defaultValue="female"*/}
            {/*      aria-labelledby="demo-customized-radios"*/}
            {/*      name="customized-radios"*/}
            {/*    >*/}
            {/*      <FormControlLabel value="female" control={<BpRadio />} label="Да" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="Нет" />*/}

            {/*    </RadioGroup>*/}
            {/*  </FormControl>*/}
            {/*</div>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Вы уже проводили групповые многодневные туры на коммерческой основе?*/}
            {/*</div>*/}
            {/*<div className="radio-set">*/}
            {/*  <FormControl>*/}
            {/*    <RadioGroup*/}
            {/*      defaultValue="female"*/}
            {/*      aria-labelledby="demo-customized-radios"*/}
            {/*      name="customized-radios"*/}
            {/*    >*/}
            {/*      <FormControlLabel value="female" control={<BpRadio />} label="Да" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="Нет" />*/}

            {/*    </RadioGroup>*/}
            {/*  </FormControl>*/}
            {/*</div>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Ваши личные страницы в соц. сети*/}
            {/*</div>*/}
            {/*<div className="request-text">*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam*/}
            {/*</div>*/}
            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Отзывы людей, кто уже ездил с вами*/}
            {/*</div>*/}
            {/*<div className="request-text">*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam*/}
            {/*</div>*/}
            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}


            {/*<div className="team-subtitle">*/}
            {/*  Вы резидент РФ?*/}
            {/*</div>*/}
            {/*<div className="radio-set">*/}
            {/*  <FormControl>*/}
            {/*    <RadioGroup*/}
            {/*      defaultValue="female"*/}
            {/*      aria-labelledby="demo-customized-radios"*/}
            {/*      name="customized-radios"*/}
            {/*    >*/}
            {/*      <FormControlLabel value="female" control={<BpRadio />} label="Да" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="Нет" />*/}

            {/*    </RadioGroup>*/}
            {/*  </FormControl>*/}
            {/*</div>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Ссылки на ресурсы, где есть ваши туры*/}
            {/*</div>*/}
            {/*<div className="request-text">*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam*/}
            {/*</div>*/}
            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Сколько туров вы уже провели?*/}
            {/*</div>*/}
            {/*<div className="radio-set">*/}
            {/*  <FormControl>*/}
            {/*    <RadioGroup*/}
            {/*      defaultValue="female"*/}
            {/*      aria-labelledby="demo-customized-radios"*/}
            {/*      name="customized-radios"*/}
            {/*    >*/}
            {/*      <FormControlLabel value="female" control={<BpRadio />} label="до 5" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="5-12" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="13-20" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="21-30" />*/}
            {/*      <FormControlLabel value="male" control={<BpRadio />} label="30+" />*/}

            {/*    </RadioGroup>*/}
            {/*  </FormControl>*/}
            {/*</div>*/}

            {/*<div className="team-subtitle">*/}
            {/*  Средняя стоимость тура*/}
            {/*</div>*/}
            {/*<div className="request-text">*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam*/}
            {/*</div>*/}
            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}

            {/*<div className="team-subtitle">*/}
            {/*  В какие страны вы делаете туры?*/}
            {/*</div>*/}
            {/*<div className="request-text">*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam*/}
            {/*</div>*/}
            {/*<SingleWrapper margin={0} full={true}>*/}
            {/*  <Input label={'Ваш ответ'}/>*/}
            {/*</SingleWrapper>*/}


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
  updateIndividualVerificationData, clear_verification_status, update_user,
})(Requests)
