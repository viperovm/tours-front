import React from 'react';
import styles from './Tours.module.css';
import {Link} from "react-router-dom";

const ButtonsSet = () => {
  return (
    <>
      <section>
        <div className='wrapper'>
          <div className={styles.buttons_set}>
            <button>Тип тура</button>
            <button>Язык группы</button>
            <button>Цена</button>
            <button>Туры с кешбеком</button>
            <button>Средний возраст группы</button>
            <button>Длительность (дни)</button>
            <button>Осталось мест</button>
            <button>Проживание</button>
            <button>Активность</button>
            <button>Рейтинг</button>
            <button>Гарантированные даты</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ButtonsSet;