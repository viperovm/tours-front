import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import TeamCard from "./TeamCard";
import {getTeamMembers} from "../../../redux/actions/profileActions";

const TeamList = ({ members, getTeamMembers }) => {

  useEffect(() => {
    getTeamMembers()
  }, [])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(members.length>0 && loading){
      setLoading(false)
    }
  }, [members, loading])

  const handleAction = () => {
    setLoading(true)
  }

  return (
    <>
      <div
        className={`tours-wrapper`}
      >
        {!loading && members.map((item, index) => <TeamCard key={index} member={item} action={handleAction} />)}
        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  members: state.profile.members,
})

export default connect(mapStateToProps, { getTeamMembers })(TeamList)