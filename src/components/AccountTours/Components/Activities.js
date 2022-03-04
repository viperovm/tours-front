import React, { useState, useEffect } from 'react'
import Button from './Button'

import CircularProgress from '@mui/material/CircularProgress'

import { connect } from 'react-redux'
import {
  updateTour,
  addActivity,
  setSecondaryNav
} from '../../../redux/actions/toursActions'

import TrippleWrapper from '../Wrappers/TrippleWrapper'
import Activity from './Activity'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function TabPanel({ children, value, index }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Activities = ({
  tour,
  addActivity,
}) => {
  
  const [value, setValue] = useState(0)

  const [activityData, setActivityData] = useState([])
  const [activities, setActivities] = useState([1])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (tour && !tour.plan) {
      addActivity({id: 1, image: {}, description: ''})
      setLoading(true)
    } else {
      setLoading(false)
      setActivityData(tour.plan)
      let arr = []
      for (let i = 1; i <= tour.plan.length; i++) {
        arr.push(i)
      }
      setActivities(arr)
    }
  }, [tour])

  const handleActivityInput = (value, id) => {
    let arr = activityData.filter(item => item.id !== id)
    arr.push(value)
    setActivityData(arr)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (activities && loading) {
      setLoading(false)
    }
  }, [activities, loading])

  const handleActivityAdd = () => {
    setLoading(true)
    let id = activities[activities.length-1] + 1
    addActivity({ id: id, image: {}, description: '' })
  }

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4 style={{ marginBottom: 10 }}>Активности во время тура</h4>
      </div>

      {!loading && activityData.length > 0 && (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              variant='scrollable'
              scrollButtons='auto'
            >
              {activities.map((item, index) => (
                <Tab
                  key={index}
                  label={`Активность ${item}`}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
          {activityData.map((item, index) => (
            <TabPanel key={index} value={value} index={index}>
              <Activity
                id={index + 1}
                action={handleActivityInput}
                activity={item}
              />
            </TabPanel>
          ))}
        </Box>
      )}
      {loading && (
        <div className='fake-file-input loader-spinner'>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      )}
      <Button
        active={true}
        action={handleActivityAdd}
        color='button-primary'
        text='Добавить активность'
      />
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  updateTour,
  addActivity,
  setSecondaryNav,
})(Activities)
