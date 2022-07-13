import React, {useEffect} from 'react'

import MainLayout from "../layouts/MainLayout";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

const Page404 = ({languages, language, match}) => {

  const history = useHistory()

  useEffect(() => {
    if(match.params[0]) {
      const lang = match.params[0].split('/')[0]
      if(lang !== 'ru') {
        history.push(`/${language}${match.params[0]}`)
      }
    }
  }, [match])

  return (
    <MainLayout>
      <>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 150,
          flexDirection: 'column'
        }}>
          <div style={{fontSize: 100, fontWeight: '600', marginBottom: 20}}>404</div>
          <div style={{fontSize: 26, fontWeight: '300'}}>Страница не найдена</div>
        </div>
      </>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  languages: state.languages.languages,
  language: state.languages.language
})

export default connect(mapStateToProps)(Page404)
