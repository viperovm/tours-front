import React, { useState, useEffect, useRef, Fragment } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const FileInput = ({ action, name, value, max }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)
  const [preview, setPreview] = useState([])

  const inputFileRef = useRef(null)

  useEffect(() => {
    if (value) {
      if (max === 1) {
        setPreview(value)
      } else {
      let arr = preview
      arr.push(value)
      setPreview(arr)
      }
    }
  }, [value])

  useEffect(() => {
    if (max) {
      if (preview.length >= max) {
        setActive(false)
      }
    }
  }, [max, preview])

  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click()
  }

  const onFilechange = e => {
    console.log(e.target.files)
    setLoading(true)
    if (e.target.files[0]) {
      setData(e.target.files[0])
      action(e.target.files[0])
    }
    
  }

  useEffect(() => {
    if (preview && loading) {
      setLoading(false)
    }
  }, [preview, loading])

  return (
    <>
      <input
        name={name}
        // value={data}
        type='file'
        onChange={onFilechange}
        ref={inputFileRef}
        accept='image/*'
      />
      <div className='fake-file-input-wrapper'>
        <div
          className={`fake-file-input file-input ${
            active ? 'file-input-active' : 'file-input-inactive'
          }`}
          onClick={onBtnClick}
        >
          <div className='camera-image' />
          <div className='fake-file-input-text'>Добавить новое фото</div>
        </div>
        {max !== 1 &&
          preview.map((item, index) => (
            <Fragment key={index}>
              <div
                key={index}
                className='fake-file-input image-container'
                style={{
                  backgroundImage: 'url(' + item + ')',
                }}
              />
              {/* {index === 1 || (index - 1) % 3 === 0 ? (
                <div className={'fake-file-input-break'} />
              ) : (
                ''
              )} */}
            </Fragment>
          ))}
        {max === 1 && (
          <div
            className='fake-file-input image-container'
            style={{
              backgroundImage: 'url(' + preview + ')',
            }}
          />
        )}
        {loading && (
          <div className='fake-file-input loader-spinner' onClick={onBtnClick}>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        )}
      </div>
    </>
  )
}

export default FileInput
