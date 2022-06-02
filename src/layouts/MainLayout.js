import Footer from "../wrappers/footer/Footer";
import Header from "../wrappers/header/Header";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";

const MainLayout = ({ isAuthenticated, children, page, background = 'transparent' }) => {

  const history = useHistory()

  useEffect(() => {

    // const timeout = 30
    const timeout = 3600

    const deleteUser = () => {
      localStorage.removeItem('access')
      history.push('/login')
      window.location.reload()
      // return <Redirect to={'/login'}/>
    }

    const outerIdle = () => {
      window.addEventListener('beforeunload', () => localStorage.setItem('oldTimeStamp', new Date().getTime().toString()))
      let old_timestamp = localStorage.getItem('oldTimeStamp') && parseInt(localStorage.getItem('oldTimeStamp'))
      let new_timestamp = new Date().getTime()
      if (old_timestamp && new_timestamp - old_timestamp > timeout * 1000) {
        deleteUser()
      } else {
        localStorage.removeItem('oldTimeStamp')
      }
    }

    if(isAuthenticated){
      if(!localStorage.getItem('remember_me')) {
        outerIdle()
        let timer = setTimeout(deleteUser, timeout * 1000)
        const resetTimer = () => {
          clearTimeout(timer)
          timer = setTimeout(deleteUser, timeout * 1000)
        }
        window.addEventListener('mousemove', resetTimer)
        window.addEventListener('keypress', resetTimer)
        return () => clearTimeout(timer)
      }
    }
  }, [isAuthenticated])

  return (
    <>
      <Header page={page}/>
      <main style={{backgroundColor: background, zIndex: '0'}}>{children}</main>
      <Footer/>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(MainLayout)
