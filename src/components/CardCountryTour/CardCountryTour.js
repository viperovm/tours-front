import React from 'react'
import styles from './CardCountryTour.module.css';
import cn from 'classnames';
import Tag from '../Tag/Tag';
import Htag from '../Htag/Htag';
import {Link} from "react-router-dom";
    


const CardCountryTour = ({ data }) => {
    return (
        <Link to={`/${data?.public_url}`} className={styles.card_tour} >
            <Tag size='s' style={{}}>
                <div className={styles.card_tour_content}>
                    
                    <Htag tag='h4'>Россия</Htag>
                        
                </div>
            </Tag>     
             
        </Link>
    );
};

export default CardCountryTour