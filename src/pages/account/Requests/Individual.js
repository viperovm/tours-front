import React, {useEffect, useState} from 'react'

import {connect} from 'react-redux'
import SingleWrapper from "../../../components/AccountTours/Wrappers/SingleWrapper";
import SelectInput from "../../../components/AccountTours/FormFields/SelectInput";
import DoubleWrapper from "../../../components/AccountTours/Wrappers/DoubleWrapper";
import Input from "../../../components/AccountTours/FormFields/Input";

import {styled} from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {getUserInn, resetUserInn} from "../../../redux/actions/profileActions";
import {
  update_local_user, setPage, getRecipientInnData, resetRecipientInnData, updateLegalVerificationData,
  updateIndividualVerificationData, clear_verification_status, update_user, load_user, clear_errors,
} from "../../../redux/actions/authActions";
import TextArea from "../../../components/AccountTours/FormFields/TextArea";
import {getCountries} from "../../../redux/actions/toursActions";

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


const Individual = ({
                      user,
                      error,
                      update_local_user,
                      countries,
                      clear_errors,
                    }) => {

  const {individual_verification} = user

  const [individualVerification, setIndividualVerification] = useState({
    last_name: user.last_name,
    first_name: user.first_name,
    license: 'yes',
  })


  useEffect(() => {
    const scrollTo = (el) => {
      let anchor = document.getElementById(el)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    }
    if (error) {
      let field_key = Object.keys(error)[0]
      scrollTo(field_key)
      // return console.error(error)
    }
    return () => clear_errors()
  }, [error])

  useEffect(() => {
    update_local_user({
      ...user,
      individual_verification: {
        ...user.individual_verification,
        ...individualVerification,
      }
    })
  }, [individualVerification])

  const handleChange = (name, value) => {
    setIndividualVerification({
      ...individualVerification,
      [name]: value,
    })
  }


  return (
    <>
      <SingleWrapper label='Фамилия' width={'100%'} margin={'0'}>
        <Input
          label={'Фамилия'}
          action={handleChange}
          name='last_name'
          value={individual_verification && individual_verification.last_name}
        />
      </SingleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          label={'Имя'}
          action={handleChange}
          name='first_name'
          value={individual_verification && individual_verification.first_name}
        />
        <Input
          label={'Отчество'}
          action={handleChange}
          name='patronymic'
          value={individual_verification && individual_verification.patronymic}
        />
      </DoubleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          error={error}
          label={'Серия паспорта'}
          action={handleChange}
          name='passport_series'
          value={individual_verification && individual_verification.passport_series}
        />
        <Input
          error={error}
          label={'Номер паспорта'}
          action={handleChange}
          name='passport_number'
          value={individual_verification && individual_verification.passport_number}
        />
      </DoubleWrapper>
      <SingleWrapper label='Кем выдан' width={'100%'} margin={'0'}>
        <Input
          error={error}
          label={'Кем выдан'}
          action={handleChange}
          name='passport_issued_by'
          value={individual_verification && individual_verification.passport_issued_by}
        />
      </SingleWrapper>
      <DoubleWrapper full={true} margin={0}>
        <Input
          error={error}
          label={'Номер подразделения'}
          action={handleChange}
          name='passport_code_issued_by'
          value={individual_verification && individual_verification.passport_code_issued_by}
        />
        <Input
          error={error}
          label={'Дата выдачи'}
          action={handleChange}
          name='passport_date'
          value={individual_verification && individual_verification.passport_date}
          type={'date'}
        />
      </DoubleWrapper>


      <SingleWrapper margin={0} label={'Резидентом какой страны вы являетесь?'} width={'100%'}>
        <SelectInput
          error={error}
          label={'Резидентом какой страны вы являетесь?'}
          action={handleChange}
          name='residency'
          val={individual_verification && individual_verification.residency}
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
              checked={individual_verification && individual_verification.license === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={individual_verification && individual_verification.license === 'no'}
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
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <FormControlLabel
              checked={individual_verification && individual_verification.commercial_tours === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={individual_verification && individual_verification.commercial_tours === 'no'}
              value={'no'}
              control={<BpRadio/>}
              label="Нет"
            />

          </RadioGroup>
        </FormControl>
      </div>
      {individual_verification && individual_verification.commercial_tours === 'yes' && (<>
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
                checked={individual_verification && individual_verification.commercial_tours_yearly === 'до 5'}
                value="до 5"
                control={<BpRadio/>}
                label="до 5"
              />
              <FormControlLabel
                checked={individual_verification && individual_verification.commercial_tours_yearly === '5-12'}
                value="5-12"
                control={<BpRadio/>}
                label="5-12"
              />
              <FormControlLabel
                checked={individual_verification && individual_verification.commercial_tours_yearly === '13-20'}
                value="13-20"
                control={<BpRadio/>}
                label="13-20"
              />
              <FormControlLabel
                checked={individual_verification && individual_verification.commercial_tours_yearly === '21-30'}
                value="21-30"
                control={<BpRadio/>}
                label="21-30"
              />
              <FormControlLabel
                checked={individual_verification && individual_verification.commercial_tours_yearly === '30+'}
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
            value={individual_verification && individual_verification.reviews_links}
            rows='7'
            error={error}
          />
        </SingleWrapper>

      </>)}


      <SingleWrapper margin={0} label={'В какие страны вы планируете организовывать туры?'} width={'100%'}>
        <SelectInput
          error={error}
          label={'В какие страны вы планируете организовывать туры?'}
          action={handleChange}
          name='tours_countries'
          val={individual_verification && individual_verification.tours_countries}
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
          value={individual_verification && individual_verification.tours_links}
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
              checked={individual_verification && individual_verification.conflicts === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={individual_verification && individual_verification.conflicts === 'no'}
              value={'no'}
              control={<BpRadio/>}
              label="Нет"
            />

          </RadioGroup>
        </FormControl>
      </div>
      {individual_verification && individual_verification.conflicts === 'yes' &&
        <SingleWrapper
          label='Опишите вкратце ситуацию'
          comment=''
          name='conflicts_review'
        >
          <TextArea
            action={handleChange}
            name='conflicts_review'
            label=''
            value={individual_verification && individual_verification.conflicts_review}
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
              checked={individual_verification && individual_verification.legal_restrictions === 'yes'}
              value={'yes'}
              control={<BpRadio/>}
              label="Да"
            />
            <FormControlLabel
              checked={individual_verification && individual_verification.legal_restrictions === 'no'}
              value={'no'}
              control={<BpRadio/>}
              label="Нет"
            />

          </RadioGroup>
        </FormControl>
      </div>
      {individual_verification && individual_verification.legal_restrictions === 'yes' && <SingleWrapper
        label='Опишите вкратце ситуацию'
        comment=''
        name='legal_restrictions_review'
      >
        <TextArea
          action={handleChange}
          name='legal_restrictions_review'
          label=''
          value={individual_verification && individual_verification.legal_restrictions_review}
          rows='7'
          error={error}
        />
      </SingleWrapper>}
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error,
})

export default connect(mapStateToProps, {
  setPage,
  getUserInn,
  resetUserInn,
  update_local_user,
  getCountries,
  getRecipientInnData,
  resetRecipientInnData,
  updateLegalVerificationData,
  updateIndividualVerificationData,
  clear_verification_status,
  update_user,
  load_user,
  clear_errors,
})(Individual)
