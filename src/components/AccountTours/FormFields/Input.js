import React, {useState, useEffect} from 'react'
import email from '../../../assets/img/message.svg'
import password from '../../../assets/img/padlock5.svg'

const Input = ({
                 label,
                 action,
                 name,
                 type = 'text',
                 value,
                 required,
                 icon,
                 error = [],
                 margin = '0',
               }) => {
  const [data, setData] = useState('')
  const [currentError, setCurrentError] = useState([])

  console.log(error)
  console.log(name)
  console.log(currentError)
  console.log(error[name])

  useEffect(() => {
    if(error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  console.log(currentError)

  useEffect(() => {
    if (value) {
      setData(value)
    }
  })

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
      {type === 'date' && <input
        required={required}
        className='custom-input-style'
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
          <div className="with-errors-wrapper" style={{margin: margin}}>
            {icon && <div className={`with-icon`}>
              <input
                required={required}
                className='custom-input-style'
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
                className='custom-input-style'
                placeholder={label}
                name={name}
                value={data}
                type={type}
                onChange={handleData}
              />
            </div>}
            <div className="errors-list">
              <ul>
                {currentError.map((item, index) => (
                  <li key={index} >{item}</li>
                ))
                }
              </ul>
            </div>
          </div>

        </>


      }
    </>
  )
}

export default Input