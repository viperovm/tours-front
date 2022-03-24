import React, { useState, useEffect, useRef, Fragment } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import menu from '../../../assets/img/trash.svg'

const ObjectFileInput = ({ action, name, value, max, required }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)
  const [bubbleActive, setBubbleActive] = useState(null)
  const [preview, setPreview] = useState([])

  const inputFileRef = useRef(null)

  console.log(value)

  useEffect(() => {
    if (value) {
      setPreview(value)
    }
  }, [value])

  console.log(preview)

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
        required={required}
        // value={data}
        type='file'
        onChange={onFilechange}
        ref={inputFileRef}
        accept="image/png, image/jpeg, image/jpg"
        // accept='image/*'
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
        {preview && preview.map((item, index) => (
          <Fragment key={index}>
            <div
              key={index}
              className='fake-file-input image-container'
              style={{
                backgroundImage: 'url(' + item + ')',
                position: 'relative',
              }}
            >
              <div
                className='tour-menu-dots'
                style={{
                  padding: '5px',
                  position: 'absolute',
                  top: 15,
                  right: 15,
                  cursor: 'pointer',
                }}
                onMouseOver={() => setBubbleActive(index)}
                onMouseOut={() => setBubbleActive(null)}
                // onClick={handleMenu}
              >
                <img src={menu} alt='menu' />
              </div>

              {index === bubbleActive && (
                <>
                  <div
                    className='tour-menu'
                    // ref={myRef}
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 40,
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
                      borderRadius: 8,
                      backgroundColor: '#fff',
                    }}
                  >
                    <div
                      className='tour-item-top'
                      style={{
                        padding: 10,
                        lineHeight: '15px',
                        textAlign: 'right',
                      }}
                    >
                      Удалить
                    </div>
                  </div>
                </>
              )}
            </div>
          </Fragment>
        ))}
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

export default ObjectFileInput
