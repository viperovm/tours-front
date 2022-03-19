import React, { useState, useEffect } from 'react'

const TextArea = ({
  label,
  action,
  name,
  value,
  rows = 5,
}) => {
  const [data, setData] = useState('')

  useEffect(() => {
    if (value) {
      setData(value)
    }
  }, [value])

  const handleData = e => {
    setData(e.target.value)
    action(name, e.target.value)
  }

  return (
    <textarea
      placeholder={label}
      name={name}
      value={data}
      onChange={handleData}
      rows={rows}
    />
  )
}

export default TextArea
