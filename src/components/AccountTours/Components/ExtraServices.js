import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import RadioInput from '../FormFields/RadioInput'
import TextEditor from '../FormFields/TextEditor'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'
import ExtraServicesComponent from './ExtraServicesComponent'

import { connect } from 'react-redux'
import {
  getTourTypes,
  getTourPropertyTypes,
  getTourAccomodations,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  setSecondaryNav,
  tourToServer,
} from '../../../redux/actions/toursActions'

const ExtraServices = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  tourToServer,
}) => {
  
  // useEffect(() => {
  //   if (tour) {
  //     if (tour.day && tour.day.length > 0) {
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'day') {
  //             return {
  //               ...item,
  //               active: true,
  //             }
  //           } else {
  //             return item
  //           }
  //         })
  //       )
  //     } else {
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'day') {
  //             return {
  //               ...item,
  //               active: false,
  //             }
  //           } else {
  //             return item
  //           }
  //         })
  //       )
  //     }
  //   }
  // }, [tour])

  const handleButtonSubmit = () => {
    tourToServer(tour, tour.id)
    action('important')
  }

  const handleButtonBack = () => {
    action('conditions')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Доп. услуги</h4>
      </div>

      <ExtraServicesComponent />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '66%',
        }}
      >
        <Button
          color='button-primary'
          active={true}
          action={handleButtonBack}
          text='Назад'
        />
        <Button active={true} action={handleButtonSubmit} />
      </div>
      {/* <Button active={completed} /> */}
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  tour_property_types: state.tours.tour_property_types,
  tour_accomodations: state.tours.tour_accomodations,
  languages: state.tours.languages,
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  getTourPropertyTypes,
  getTourAccomodations,
  tourToServer,
})(ExtraServices)

// import React, { useState, useEffect } from 'react'
// import SingleWrapper from '../Wrappers/SingleWrapper'
// import DoubleWrapper from '../Wrappers/DoubleWrapper'
// import Input from '../FormFields/Input'
// import TextEditor from '../FormFields/TextEditor'
// import TextArea from '../FormFields/TextArea'
// import SelectInput from '../FormFields/SelectInput'
// import Button from './Button'

// import { connect } from 'react-redux'

// import {
//   setSecondaryNav,
//   updateTour,
// } from '../../../redux/actions/toursActions'

// const ExtraServices = ({
//   tour,
//   action,
//   toursTypes,
//   secondary_nav,
//   setSecondaryNav,
//   updateTour,
//   currencies,
// }) => {
//   const [data, setData] = useState()

//   const handleInput = (name, value) => {
//     setData({
//       ...data,
//       [name]: value,
//     })
//   }

//   useEffect(() => {
//     let arr = secondary_nav
//     setSecondaryNav(
//       arr.map(item => {
//         if (item.value === 'services') {
//           return {
//             ...item,
//             active: true,
//           }
//         } else {
//           return item
//         }
//       })
//     )
//   }, [])

//   const handleButtonSubmit = () => {
//     // updateTour(data, tour.id)
//     action('important')
//   }

//   const handleButtonBack = () => {
//     action('conditions')
//   }

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   return (
//     <>
//       <div className='my-tours-section-heading'>
//         <h4>Доп. услуги</h4>
//       </div>

//       <SingleWrapper label='Дополнительно (необязательно)' comment=''>
//         <TextEditor
//           action={handleInput}
//           name='extra_text'
//           old_data={data}
//           // multiple
//         />
//       </SingleWrapper>
//       <SingleWrapper label='Стоимость услуги (необязательно)' comment=''>
//          <Input
//           action={handleInput}
//           name='extra_service_price'
//           label=''
//           old_data={data}
//           // type=''
//           // multiple
//         />
//       </SingleWrapper>

//       <Button
//         active={true}
//         // action={handleDayAdd}
//         color='button-primary'
//         text='Добавить услугу'
//       />

//       {/* <SingleWrapper label='Комментарий' comment=''>
//         <TextArea
//           action={handleInput}
//           name='extra_comment'
//           label=''
//           old_data={data}
//           rows='7'
//         />
//       </SingleWrapper> */}

//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           width: '66%',
//         }}
//       >
//         <Button
//           color='button-primary'
//           active={true}
//           action={handleButtonBack}
//           text='Назад'
//         />
//         <Button active={true} action={handleButtonSubmit} />
//       </div>
//     </>
//   )
// }

// const mapStateToProps = state => ({
//   toursTypes: state.tours.tour_types,
//   secondary_nav: state.tours.secondary_nav,
//   currencies: state.tours.currencies,
//   tour: state.tours.current_tour,
// })

// export default connect(mapStateToProps, {
//   setSecondaryNav,
//   updateTour,
// })(ExtraServices)
