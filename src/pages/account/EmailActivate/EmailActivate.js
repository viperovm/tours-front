import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {email_confirm} from "../../../redux/actions/authActions";
import {Redirect} from "react-router-dom";
import Button from "../../../components/AccountTours/Components/Button";
import MainLayout from "../../../layouts/MainLayout";

const EmailActivate = ({match, email_confirm, status}) => {
  const [requestSuccess, setRequestSuccess] = useState(true)
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if(status !== 'error' && status >= 200 && status < 300) {
      setRequestSuccess(true)
    } else {
      setRequestSuccess(false)
    }
    let timer = setTimeout(() => {return <Redirect to='/'/>}, 5000)
    return () => clearTimeout(timer)
  }, [status])

  const verify_email = () => {
    const data = {
      uid: match.params.uid,
      token: match.params.token,
    }
    email_confirm(data);
    setVerified(true)
  };

  return (
    <>
      <MainLayout>
        <div className="verification-page">
          {verified ? (
              <>
                {requestSuccess ?
                  <div className="verification-text green">Почта успешно подтверждена!</div>
                  :
                  <div className="verification-text red">Ошибка подтверждения. Попробуйте еще раз.</div>
                }
                <div className="verification-subtext">Скоро вы будете перенаправлены на главную страницу</div>
              </>
            )
            :
            <div className='verification-button'>
              <Button color='primary' action={verify_email} text='Подтвердить почту'/>
            </div>
          }
        </div>
      </MainLayout>
    </>
  )
}

const mapStateToProps = state => ({
  status: state.auth.email_confirm_request,
})

export default connect(mapStateToProps, {email_confirm})(EmailActivate)