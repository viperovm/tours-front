import React, {useState, useEffect, useRef, Fragment} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import menu from '../../../assets/img/trash.svg'
import {deletePropertyImage, deleteTourImage, deleteTourWallpaper,} from "../../../redux/actions/toursActions";
import {delete_avatar} from "../../../redux/actions/authActions";
import {connect} from "react-redux";
import PopUp from "../../PopUp/PopUp";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";

const ObjectFileInput = ({
                           tour, action, name, value=[], max, required, position, deleteTourImage,
                           deleteTourWallpaper,
                           delete_avatar, deletePropertyImage, delete_action, error
                         }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)
  const [bubbleActive, setBubbleActive] = useState(null)
  const [preview, setPreview] = useState([])
  const [activePopUp, setActivePopUp] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [item, setItem] = useState('')
  const [currentError, setCurrentError] = useState([])

  useEffect(() => {
    if(deleted) {
      window.location.reload(false)
      setDeleted(false)
    }
  }, [deleted])



  const inputFileRef = useRef(null)


  useEffect(() => {
    if(error && isNotEmptyObject(error) && error.detail) {
      let arr = []
      arr.push(error.detail)
      setCurrentError(arr)
    } else if(error[name]) {
      setCurrentError(error[name])
    }
  }, [error, name])

  useEffect(() => {
    if (loading && value.length > 0) {
      setLoading(false)
    }
  }, [value, loading])

  useEffect(() => {
    if (max) {
      if (value.length >= max) {
        setActive(false)
      }
    }
  }, [max, value])

  const handleSetItem = image => {
    setItem(image)
    setActivePopUp(true)
  }

  const handleDelete = () => {
    setLoading(true)
    if (name === 'wallpaper') {
      deleteTourWallpaper(tour.id)
      setPreview(null)
      setActive(true)
    }
    if (name === 'avatar') {
      delete_avatar()
      setPreview(null)
      setActive(true)
    }
    if (name === 'day_photo') {
      delete_action(item)
      setPreview(null)
      setActive(true)
    }
    if (position === 'gallery') {
      deleteTourImage(item, tour.id)

    }
    if (position === 'accommodation') {
      deletePropertyImage(item, tour.id)
    }
    setLoading(false)
    setActivePopUp(false)
    setDeleted(true)
  }


  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click()
  }

  const onFilechange = e => {
    setLoading(true)
    if (e.target.files[0]) {
      setCurrentError([])
      setData(e.target.files[0])
      action(e.target.files[0])
    }
  }

  return (
    <>
      {activePopUp && <PopUp status={'danger'}
                             title={'Уверены, что хотите удалить?'}
                             text={'Картинка будет удалена навсегда.'}
                             button={'Отменить'}
                             button2={'Удалить'}
                             action={() => setActivePopUp(false)}
                             second_action={() => handleDelete(item)}/>}
      <div className='fake-file-input-component' id={name}>
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
          <div className='camera-image'/>
          <div className='fake-file-input-text'>Добавить новое фото</div>
        </div>
        {currentError.length > 0 && <div className="errors-list">
          {/*{currentError}*/}
          <ul>
            {Array.isArray(currentError) && currentError.length > 0 && currentError.map((item, index) => (
              <li key={index}>{item}</li>
            ))
            }
          </ul>
        </div>}
        {name === 'day_photo' && value.length > 0 && value.map((item, index) => (
          <Fragment key={index}>
            <div
              key={index}
              className='fake-file-input image-container'
              style={{
                backgroundImage: 'url(' + item.tmb_image + ')',
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
                onClick={() => handleSetItem(item)}
              >
                <img src={menu} alt='menu'/>
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
        { name !== 'day_photo' && value.length > 0 && value.map((item, index) => (
          <Fragment key={index}>
            <div
              key={index}
              className='fake-file-input image-container'
              style={{
                backgroundImage: 'url(' + item.tmb_image + ')',
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
                onClick={() => handleSetItem(item)}
              >
                <img src={menu} alt='menu'/>
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
            <Box sx={{display: 'flex'}}>
              <CircularProgress/>
            </Box>
          </div>
        )}
      </div>
      </div>
    </>
  )
}

export default connect(null, {
  deleteTourImage,
  deleteTourWallpaper,
  delete_avatar,
  deletePropertyImage,
})(ObjectFileInput)
