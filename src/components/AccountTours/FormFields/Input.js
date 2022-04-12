import React, {useState, useEffect} from 'react'
import email from '../../../assets/img/message.svg'
import password from '../../../assets/img/padlock5.svg'
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";

const Input = ({
                 label,
                 action,
                 name,
                 type = 'text',
                 value,
                 required,
                 icon,
                 error = {},
                 margin = '0',
               }) => {
  const [data, setData] = useState('')
  const [currentError, setCurrentError] = useState([])

  useEffect(() => {
    if(isNotEmptyObject(error) && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if(isNotEmptyObject(error) && name === 're_password') {
      setCurrentError(error['password'])
    } else if(error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  useEffect(() => {
    if (value) {
      setData(value)
    }
  }, [value])

  const handleData = e => {
    setCurrentError([])
    setData(e.target.value)
    action(name, e.target.value)
  }
  // const handleSend = () => {
  //   action(name, data)
  // }


  return (
    <>
      <div className="with-errors-wrapper" style={{margin: margin}} id={name}>
      {type === 'date' && <input
        required={required}
        className={`custom-input-style ${currentError.length > 0 ? 'error' : 'ok'}`}
        placeholder={label}
        name={name}
        value={data}
        type={type}
        onChange={handleData}
        max="2999-12-31"
      />
      }
      {type !== 'date' &&
        <>

            {icon && <div className={`with-icon`}>
              <input
                required={required}
                className={`custom-input-style ${currentError.length > 0 ? 'error' : 'ok'}`}
                placeholder={label}
                name={name}
                value={data}
                type={type}
                onChange={handleData}
              />
              <div className='with-icon-image'>
                <img src={icon === 'email' ? email : password} alt="icon"/>
              </div>

            </div>}
            {!icon && <div>
              <input
                required={required}
                className={`custom-input-style ${currentError.length > 0 ? 'error' : 'ok'}`}
                placeholder={label}
                name={name}
                value={data}
                type={type}
                onChange={handleData}
              />
            </div>}


        </>
      }
        <div className="errors-list">
          {/*{currentError}*/}
          <ul>
            { Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
              <li key={index} >{item}</li>
            ))
            }
          </ul>
        </div>
      </div>
    </>

  )
}
export default Input