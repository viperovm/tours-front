import React from 'react'

const SingleWrapper = ({children, label, comment, margin='0 30px 0 0', full}) => {
  return (
    // <div className='my-tours-input-section'>
    //   <div className='input-label'>{label}</div>
    //   <div className='my-tours-input-full'>
    //     {children}
    //     <div className='my-tours-input-explanations'>{comment}</div>
    //   </div>
    // </div>
    <>
      <div className='single-input-label'>{label}</div>
      <div className='tour-input-wrapper'>
        <div className={`single-input-input ${full ? 'full' : ''}`} style={{margin: margin}}>
          {children}
        </div>
        <div className='tour-input-comment'>
          <div className="tour-input-comment-content">
            {comment}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleWrapper
