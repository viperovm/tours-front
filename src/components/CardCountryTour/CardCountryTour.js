import React from 'react'
import styles from './CardCountryTour.module.css';
import Tag from '../Tag/Tag';
import Htag from '../Htag/Htag';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
    


const CardCountryTour = ({ data, language }) => {
    return (
        <Link to={`/${language}/${data?.public_url}`} className={styles.card_tour} >
            <Tag size='s' style={{}}>
                <div className={styles.card_tour_content}>
                    
                    <Htag tag='h4'>Россия</Htag>
                        
                </div>
            </Tag>     
             
        </Link>
    );
};

const mapStateToProps = state => ({
  language: state.languages.language,
})

export default connect(mapStateToProps)(CardCountryTour)