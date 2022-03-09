import React, { useState, useEffect, useRef, Fragment } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import menu from '../../../assets/img/trash.svg'
import { connect } from 'react-redux'

import { deleteTourWallpaper } from '../../../redux/actions/toursActions'

const FileInput = ({ action, name, value, max, tour, deleteTourWallpaper }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)
  const [bubbleActive, setBubbleActive] = useState(false)
  const [preview, setPreview] = useState(null)


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
      if (preview && preview.length >= max) {
        setActive(false)
      }
    }
  }, [max, preview])

  const handleDelete = () => {
    setLoading(true)
    if (name === 'wallpaper') {
      deleteTourWallpaper(tour.id)
      setPreview(null)
      setActive(true)
    }
    setLoading(false)
  }

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
                  onMouseOver={() => setBubbleActive(true)}
                  onMouseOut={() => setBubbleActive(false)}
                  onClick={handleDelete}
                >
                  <img src={menu} alt='menu' />
                </div>

                {bubbleActive && (
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
        {max === 1 && preview && (
          // <div
          //   className='fake-file-input image-container'
          //   style={{
          //     backgroundImage: 'url(' + preview + ')',
          //   }}
          // />
          <div
            className='fake-file-input image-container'
            style={{
              backgroundImage: 'url(' + preview + ')',
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
              onMouseOver={() => setBubbleActive(true)}
              onMouseOut={() => setBubbleActive(false)}
              onClick={handleDelete}
            >
              <img src={menu} alt='menu' />
            </div>
            {bubbleActive && (
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

const mapStateToProps = state => ({
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, { deleteTourWallpaper })(FileInput)
