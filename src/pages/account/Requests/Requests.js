import React, {useEffect, useState} from 'react'
import Account from '../../../layouts/account/account'

import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
import { setPage } from '../../../redux/actions/authActions'
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";
import Button from "../../../components/AccountTours/Components/Button";
import CheckboxInput from "../../../components/AccountTours/FormFields/CheckboxInput";

import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ObjectFileInput from "../../../components/AccountTours/FormFields/ObjectFileInput";
import {getUserInn, resetUserInn} from "../../../redux/actions/profileActions";

const data = [
  {
    id: 1,
    available: true,
    title: 'Физическое лицо',
    subtitle: '',
    list: [],
  },
  {
    id: 2,
    available: true,
    title: 'Юридическое лицо (ИП, ООО)',
    subtitle: '',
    list: [],
  },
]

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 24,
  height: 24,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
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
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
        '&.MuiRadio-root': {
          paddingRight: '20px',
          marginLeft: '8px',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}



const Requests = ({ user, status, setPage, error, innData, getUserInn, resetUserInn }) => {

  const [toursAmountActive, setToursAmountActive] = useState(false)
  const [active, setActive] = useState(1)
  const [localUser, setLocalUser] = useState({})
  const [spinner, setSpinner] = useState(false)

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

  if (status === 'customers') {
    return <Redirect to='/404'/>
  }

  console.log(localUser)

  useEffect(() => {
    if(user) {
      setLocalUser(user)
    }
  }, [user])

  useEffect(() => {
    if(spinner) {
      let timer = setTimeout(() => setSpinner(false), 1000)
      if(innData) {
        setLocalUser({...localUser, ...innData})
        setSpinner(false)
        clearTimeout(timer)
      } else {
        setLocalUser({
          ...localUser,
          recipient_name: '',
          recipient_ogrn: '',
          recipient_status: '',
          recipient_registration_date: '',
        })
      }
    }

  }, [innData, spinner])


  const handleChange = (name, value) => {
    setLocalUser({
      ...localUser,
      [name]: value,
    })
  }

  const handleInnChange = (name, value) => {
    setSpinner(true)
    if(value.length === 12) {
      getUserInn({[name]: value})
    } else {
      resetUserInn()
    }
    setLocalUser({
      ...localUser,
      [name]: value,
    })
  }

  const handleRadioChange = (e) => {
    const {name, value} = e.target
    if(value === 'true') {
      setToursAmountActive(true)
    } else if(value === 'false') {
      setToursAmountActive(false)
    }
    setLocalUser({
      ...localUser,
      [name]: value,
    })
  }

  useEffect(() => {
    setPage('requests')
  }, [])

  return (
    <Account menu_item='requests' title='Запросы на проверку'>

      <>
        {status === 'experts' && (
          <main>
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
              {data.map(item => <Card id={item.id} list={item.list} subtitle={item.subtitle} title={item.title} available={item.available}/>)}
            </div>

            {active === 1 && (
              <>
                <SingleWrapper label='Фамилия' width={'100%'} margin={'0'}>
                  <Input
                    label={'Фамилия'}
                    action={handleChange}
                    name='last_name'
                    value={localUser.last_name}
                  />
                </SingleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Имя'}
                    action={handleChange}
                    name='first_name'
                    value={localUser.first_name}
                  />
                  <Input
                    label={'Отчество'}
                    action={handleChange}
                    name='patronymic'
                    value={localUser.patronymic}
                  />
                </DoubleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Серия паспорта'}
                    action={handleChange}
                    name='passport_series'
                    value={localUser.passport_series}
                  />
                  <Input
                    label={'Номер паспорта'}
                    action={handleChange}
                    name='passport_number'
                    value={localUser.passport_number}
                  />
                </DoubleWrapper>
                <SingleWrapper label='Кем выдан' width={'100%'} margin={'0'}>
                  <Input
                    label={'Кем выдан'}
                    action={handleChange}
                    name='passport_issued_by'
                    value={localUser.passport_issued_by}
                  />
                </SingleWrapper>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'Номер подразделения'}
                    action={handleChange}
                    name='passport_branch_number'
                    value={localUser.passport_branch_number}
                  />
                  <Input
                    label={'Дата выдачи'}
                    action={handleChange}
                    name='passport_date_of_issue'
                    value={localUser.passport_date_of_issue}
                    type={'date'}
                  />
                </DoubleWrapper>
              </>
            )}

            {active === 2 && (
              <>
                <DoubleWrapper full={true} margin={0}>
                  <Input
                    label={'ИНН'}
                    action={handleInnChange}
                    name='recipient_inn'
                    value={localUser.recipient_inn}
                  />
                  <Input
                    spinner={spinner}
                    label={'ОГРН (ОГРНИП)'}
                    action={handleChange}
                    name='recipient_ogrn'
                    value={localUser.recipient_ogrn}
                    error={error}
                  />
                </DoubleWrapper>
                <SingleWrapper label='Наименование Юр. лица' width={'100%'} margin={'0'}>
                  <Input
                    spinner={spinner}
                    label={'Наименование Юр. лица'}
                    action={handleChange}
                    name='recipient_name'
                    value={localUser.recipient_name}
                  />
                </SingleWrapper>
                <SingleWrapper label='Юридический адрес' width={'100%'} margin={'0'}>
                  <Input
                    label={'Юридический адрес'}
                    action={handleChange}
                    name='user_legal_address'
                    value={localUser.user_legal_address}
                  />
                </SingleWrapper>
                <SingleWrapper label='Фактический адрес' width={'100%'} margin={'0'}>
                  <Input
                    label={'Фактический адрес'}
                    action={handleChange}
                    name='user_billing_address'
                    value={localUser.user_billing_address}
                  />
                </SingleWrapper>
                <SingleWrapper label='Сканы уставных документов (ИНН, ОГРН)' width={'100%'} margin={'0'}>
                  <ObjectFileInput
                    label={'Сканы уставных документов (ИНН, ОГРН)'}
                    action={handleChange}
                    name='user_docs'
                    value={localUser.user_docs}
                  />
                </SingleWrapper>
              </>
            )}
            <SingleWrapper margin={0} label={'Резидентом какой страны вы являетесь?'} width={'100%'}>
              <SelectInput
                label={'Резидентом какой страны вы являетесь?'}
                action={handleChange}
                name='user_residency'
                value={localUser.user_residency}
              />
            </SingleWrapper>
            <div className="team-subtitle">
              Есть ли у вас лицензия туроператора?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue={true}
                  aria-labelledby="demo-customized-radios"
                  name="user_has_license"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <FormControlLabel value={true} control={<BpRadio />} label="Да" />
                  <FormControlLabel value={false} control={<BpRadio />} label="Нет" />

                </RadioGroup>
              </FormControl>
            </div>
            <div className="team-subtitle">
              Вы уже проводили туры на коммерческой основе?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue={false}
                  aria-labelledby="demo-customized-radios"
                  name="user_has_commercial_tours"
                  // onChange={(e) => console.log(typeof e.target.value)}
                  // onChange={(e) => setToursAmountActive(e.target.value)}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value={true} control={<BpRadio />} label="Да" />
                  <FormControlLabel value={false} control={<BpRadio />} label="Нет" />

                </RadioGroup>
              </FormControl>
            </div>
            {toursAmountActive ? (
              <>
                <div className="team-subtitle">
                  Сколько туров вы проводите в год?
                </div>
                <div className="radio-set">
                  <FormControl>
                    <RadioGroup
                      defaultValue={"under_5"}
                      aria-labelledby="demo-customized-radios"
                      name="user_tours_amount_yearly"
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    >
                      <FormControlLabel value="under_5" control={<BpRadio />} label="до 5" />
                      <FormControlLabel value="from_5_to_12" control={<BpRadio />} label="5-12" />
                      <FormControlLabel value="from_13_to_20" control={<BpRadio />} label="13-20" />
                      <FormControlLabel value="from_21_to_30" control={<BpRadio />} label="21-30" />
                      <FormControlLabel value="above_30" control={<BpRadio />} label="30+" />

                    </RadioGroup>
                  </FormControl>
                </div>
              </>
            )
            :
              ''
            }











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




            <Button text={'ОТПРАВИТЬ ЗАПРОС НА ПРОВЕРКУ'}/>
          </main>
        )}
      </>




    </Account>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  status: state.auth.status,
  error: state.auth.error,
  innData: state.profile.user_inn_data,

})

export default connect(mapStateToProps, { setPage, getUserInn, resetUserInn })(Requests)
