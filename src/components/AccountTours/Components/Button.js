import React from "react";

const Button = ({active=true, action, color='button-success', text='Продолжить', width}) => {
    return (
      <button
        onClick={action}
        className={`add-tour-button ${
          active ? color : 'button-disabled'
        }`}
        style={{width: width ? width : 'auto', marginRight: width ? '30px' : '0'}}
      >
        {text}
      </button>
    )
}

export default Button