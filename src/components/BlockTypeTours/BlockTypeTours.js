import React from 'react'
import styles from './BlockTypeTours.module.css';
import cn from 'classnames';
import InfoBlock from '../InfoBlock/InfoBlock';
import Htag from '../Htag/Htag';
import CardCollection from '../CardCollection/CardCollection';

const BlockTypeTours = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block',
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                    <InfoBlock border_color='orange_left_border'>
                        <Htag tag='h2'>
                            Туры по типам
                        </Htag>
                        <Htag tag='h4'>
                        Мы разделили туры на типы чтобы вам было удобнее выбрать нужный
                        </Htag>
                    </InfoBlock> 
                    <CardCollection name_block='type' />
            </div> 
            
        </div>
    );
};

export default BlockTypeTours