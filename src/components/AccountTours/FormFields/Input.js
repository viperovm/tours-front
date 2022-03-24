import React, {useState, useEffect} from 'react'

const Input = ({
                 label,
                 action,
                 name,
                 type = 'text',
                 value,
                 required
               }) => {
  const [data, setData] = useState('')


  useEffect(() => {
    if (value) {
      setData(value)
    }
  })

  const handleData = e => {
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
      />}

      {type !== 'date' && <input
        required={required}
        className='custom-input-style'
        placeholder={label}
        name={name}
        value={data}
        type={type}
        onChange={handleData}
      />}
    </>
  )
}

export default Input