import React from 'react'

const DoubleWrapper = ({ children, ratio='1-2', comment }) => {
  return (
    // <div className={`double-wrapper ratio-${ratio}`}>
    //   <div className={`children-wrapper ratio-${ratio}`}>
    //     {children &&
    //       children.map((el, index) => (
    //         <div key={index} className='double-wrapper-item'>
    //           <div className='input-label'>{el.props.label}</div>
    //           {el}
    //         </div>
    //       ))}
    //   </div>
    // </div>

    <div className='tour-input-wrapper'>
      <div className={`double-input-input ratio-${ratio}`}>
        {children &&
          children.map((el, index) => (
            <div key={index} className='double-input-item'>
              <div className='input-label'>{el.props.label}</div>
              {el}
            </div>
          ))}
      </div>
      <div className='tour-input-comment'>
        <div className="tour-input-comment-content">
          {comment}
        </div>
      </div>

    </div>
  )
}

export default DoubleWrapper
