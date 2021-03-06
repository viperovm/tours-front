import React from 'react'
import styles from './CardAboutExpert.module.css';
import cn from 'classnames';
import Tag from '../Tag/Tag'
import Htag from '../Htag/Htag'
    


const CardAboutExpert = ({ block_style, children, className, ...props }) => {    
    return (
      <div
        className={cn(styles.card_expert, className, {
          [styles.card_tour]: block_style == 'card_tour',
        })}
        {...props}
      >
        {children}
        <Tag size='about_expert'>
          <div className={styles.card_about_expert_image}></div>
          <div className={styles.card_about_expert_name}>Максим Орлов</div>
          <div className={styles.card_about_expert_text}>
            Любитель адреналина, рассветов и закатов. Между собой мы его зовём
            «ГурманДЭнис». Он знает , где вас вкусно накормить в любо ...
          </div>
          <div className={styles.card_about_expert_more}>подробнее</div>
        </Tag>
      </div>
    )
};

export default CardAboutExpert