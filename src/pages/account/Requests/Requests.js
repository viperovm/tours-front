import React, { useEffect } from 'react'
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



const Requests = ({ status, setPage }) => {

  if (status === 'customers') {
    return <Redirect to='/404'/>
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
              <h2>Верификация тревел-эксперта</h2>
            </div>
            <div className='tours-list-add-button-wrapper'>
              <div className='tours-list-add-button-text'>
                <p>Тревел-экспертом мы называем человека, для которого путешествия перестали быть развлечением, а стали любимой организационной деятельностью/бизнесом /делом жизни!</p>

                <p>Как маркетплейс, мы несем ответственность за партнеров, чьи туры размещаем на сайте, поэтому без статуса вы не сможете подтверждать бронирования и принимать оплату от клиентов.<br/>
                  Если вы не получили статус проверенного тревел-эксперта в течение 4 дней, мы имеем право снять ваши туры с публикации.</p>

                <p>
                  Статус "проверенного" может получить не каждый организатор. У вас должны быть:
                  <ol>
                    <li>
                      1. Успешный опыт разработки и реализации авторских программ
                    </li>
                    <li>
                      2. Успешный опыт создания и проведения многодневных туров
                    </li>
                    <li>
                      3. Подтверждение отзывами ваших клиентов, которые были в турах на коммерческой основе.
                    </li>
                  </ol>
                </p>

                <p>
                  Примерное время заполнение формы: 40 минут.<br/>
                  В форме 3 блока:
                  <ul>
                    <li>- организационный (для его прохождения обязательно заполните ваш профиль на сайте)</li>
                    <li>- опыт организации коммерческих многодневных групповых туров</li>
                    <li>- опыт проведения коммерческих многодневных групповых туров</li>
                  </ul>
                </p>
                <p>
                  Процесс проверки занимает до 4 рабочих дней, но может пройти быстрее. Отвечайте на вопросы развернуто и предоставьте максимум информации о себе, чтобы ускорить процесс и повысить свои шансы на успешное прохождение верификации.
                </p>

              </div>
            </div>

            <div className="team-subtitle">
              Почта, на которую зарегистрирован аккаунт на Traveler.market
            </div>

            <SingleWrapper margin={0} label={'Проверьте пожалуйста, что у вас есть аккаунт на почте, которую вы укажите. Иначе мы не сможем вам сообщить результаты проверки. '} full={true}>
              <Input label={'email'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              Ссылка на опубликованный тур на Traveler.market
            </div>

            <SingleWrapper margin={0} full={true}>
              <Input label={'http://'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              Предоставьте не менее 3-х отзывов к опубликованному туру на Traveler.market
            </div>

            <SingleWrapper margin={0} label={'Если у вас есть социальные сети, где клиенты уже оставляли отзывы после путешествий с вами, прикрепите пожалуйста ссылку, чтобы мы могли с ними ознакомиться. Если нет - отправьте эту форму: https://docs.google.com/forms/d/e/1FAIpQLSfgL2Sd7LcxGV-9tttWD0JMUwOhrD8sR-KMvs5U1ItIOgiJ4Q/viewform своим клиентам, кто уже был с вами в опубликованном туре. Мы занесем эти отзывы вам в профиль в течение 3-х дней. Обратите внимание, что без отзывов ваших клиентов мы не сможем поставить вам статус проверенного тревел-эксперта. '} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              Проверьте ваш профиль тревел-эксперта на Traveler.market
            </div>
            <div className="request-text">
              Для прохождения верификации вам нужно оформить ваш личный профиль на сайте
            </div>
            <CheckboxInput green={true} label={'Загружена личная фотография'}/>
            <CheckboxInput green={true} label={'Заполнено описание'}/>
            <CheckboxInput green={true} label={'Добавлена команда (если вы работаете с гидами)'}/>
            <CheckboxInput green={true} label={'Подтверждены e-mail/номер телефона'}/>
            <CheckboxInput green={true} label={'Привязаны мессенджеры (социальные сети)'}/>
            <CheckboxInput green={true} label={'Есть минимум один опубликованный тур'}/>
            <CheckboxInput green={true} label={'Заполнены реквизиты и почтовый адрес'}/>
            <div className="team-subtitle">
              Что больше подходит вам по описанию?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel value="female" control={<BpRadio />} label="Физическое лицо, работаю как гид, организую все сам" />
                  <FormControlLabel value="male" control={<BpRadio />} label="Физическое лицо, есть команда гидов и партнеры, сам занимаюсь организационными вопросами в турах" />
                  <FormControlLabel value="other" control={<BpRadio />} label="Юридическое лицо, работаю как гид, организую все сам" />
                  <FormControlLabel value="other" control={<BpRadio />} label="Юридическое лицо, есть команда гидов и партнеры, сам занимаюсь организационными вопросами в турах" />

                </RadioGroup>
              </FormControl>
            </div>

            <div className="team-subtitle">
              Ваше ФИО
            </div>
            <SingleWrapper margin={0} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              ИНН компании
            </div>
            <SingleWrapper margin={0} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              Есть ли у вас лицензия туроператора?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel value="female" control={<BpRadio />} label="Да" />
                  <FormControlLabel value="male" control={<BpRadio />} label="Нет" />

                </RadioGroup>
              </FormControl>
            </div>

            <div className="team-subtitle">
              Вы уже проводили групповые многодневные туры на коммерческой основе?
            </div>
            <div className="request-text">
              Мы публикуем на площадке туры длительностью только от двух дней. Если вы проводили однодневные программы или экскурсии, и у вас нет опыта организации многодневных туров, то мы откажем в сотрудничестве до вашего первого проведенного многодневного тура с положительными отзывами от клиентов.
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel value="female" control={<BpRadio />} label="Да" />
                  <FormControlLabel value="male" control={<BpRadio />} label="Нет" />

                </RadioGroup>
              </FormControl>
            </div>

            <div className="team-subtitle">
              Вы уже проводили групповые многодневные туры на коммерческой основе?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel value="female" control={<BpRadio />} label="Да" />
                  <FormControlLabel value="male" control={<BpRadio />} label="Нет" />

                </RadioGroup>
              </FormControl>
            </div>

            <div className="team-subtitle">
              Ваши личные страницы в соц. сети
            </div>
            <div className="request-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
            <SingleWrapper margin={0} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              Отзывы людей, кто уже ездил с вами
            </div>
            <div className="request-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
            <SingleWrapper margin={0} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              Сколько туров вы проводите в год?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel value="female" control={<BpRadio />} label="до 5" />
                  <FormControlLabel value="male" control={<BpRadio />} label="5-12" />
                  <FormControlLabel value="male" control={<BpRadio />} label="13-20" />
                  <FormControlLabel value="male" control={<BpRadio />} label="21-30" />
                  <FormControlLabel value="male" control={<BpRadio />} label="30+" />

                </RadioGroup>
              </FormControl>
            </div>

            <div className="team-subtitle">
              Вы резидент РФ?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel value="female" control={<BpRadio />} label="Да" />
                  <FormControlLabel value="male" control={<BpRadio />} label="Нет" />

                </RadioGroup>
              </FormControl>
            </div>

            <div className="team-subtitle">
              Ссылки на ресурсы, где есть ваши туры
            </div>
            <div className="request-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
            <SingleWrapper margin={0} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              Сколько туров вы уже провели?
            </div>
            <div className="radio-set">
              <FormControl>
                <RadioGroup
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <FormControlLabel value="female" control={<BpRadio />} label="до 5" />
                  <FormControlLabel value="male" control={<BpRadio />} label="5-12" />
                  <FormControlLabel value="male" control={<BpRadio />} label="13-20" />
                  <FormControlLabel value="male" control={<BpRadio />} label="21-30" />
                  <FormControlLabel value="male" control={<BpRadio />} label="30+" />

                </RadioGroup>
              </FormControl>
            </div>

            <div className="team-subtitle">
              Средняя стоимость тура
            </div>
            <div className="request-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
            <SingleWrapper margin={0} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>

            <div className="team-subtitle">
              В какие страны вы делаете туры?
            </div>
            <div className="request-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
            <SingleWrapper margin={0} full={true}>
              <Input label={'Ваш ответ'}/>
            </SingleWrapper>




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
})

export default connect(mapStateToProps, { setPage })(Requests)
