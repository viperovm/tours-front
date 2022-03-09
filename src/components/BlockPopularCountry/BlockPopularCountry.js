import React from 'react'
import styles from './BlockPopularCountry.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';

const BlockPopularCountry = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={styles.block_viewed + ' ' + styles[block_style]}
        >
            
            <div className={styles.wrapper}>
                {children}
                    <InfoBlock border_color='blue'>
                        <Htag tag='h2'>
                            Популярные направления
                        </Htag>
                        <Htag tag='h4'>
                            Мы тщательно следим за открытием границ и подбираем проверенные варианты
                        </Htag>
                    </InfoBlock> 
                    <CardCollection name_block='popular' />
            </div> 
            
        </div>
    );
};

export default BlockPopularCountry
