import React, {useEffect, useState} from 'react'
import styles from './SliderBlock.module.scss';
import cn from 'classnames';
import CardTour from '../CardTour/CardTour';
import CardCountryTour from '../CardCountryTour/CardCountryTour';
import CardTourLarge from '../CardTourLarge/CardTourLarge';
import CardTypeTour from '../CardTypeTour/CardTypeTour';
import CardExpert from '../CardExpert/CardExpert';
import Rating from '../Rating/Rating';
import Sale from '../Sale/Sale';
import CardFeedback from '../CardFeedback/CardFeedback';
import CardAboutExpert from '../CardAboutExpert/CardAboutExpert';
import arrowIconLeft from '../../assets/img/left_arrow.svg';
import arrowIconRight from '../../assets/img/right_arrow.svg';

import wallpaper1 from '../../assets/img/tour_images/img.jpg';
import wallpaper2 from '../../assets/img/tour_images/img2.jpg';
import wallpaper3 from '../../assets/img/tour_images/img3.jpg';
import wallpaper4 from '../../assets/img/tour_images/img4.jpg';

import david from '../../assets/img/guides_images/david.jpg';
import mary from '../../assets/img/guides_images/mary.jpg';
import kriss from '../../assets/img/guides_images/kriss.jpg';

import CommonTourCard from "../CommonTourCard/CommonTourCard";
import {Link} from 'react-router-dom'

const SliderBlock = ({size, ...props}) => {

    let children = props.children ? props.children : [
        {
            tmb_wallpaper: wallpaper1,
            is_favourite: false,
            start_country: 'Тайланд',
            name: 'Все прелести Бангкока',
            rating: 4.9,
            reviews_count: 201,
            tour_days: 9,
            start_date: '2022-03-12',
            price: '64.000',
            team_member: {
                tmb_image: david,
                guide_name: 'Давид',
            }
        },
        {
            tmb_wallpaper: wallpaper2,
            is_favourite: true,
            start_country: 'Вьетнам',
            name: 'Неизведанные места и тропы',
            rating: 4.9,
            reviews_count: 132,
            tour_days: 7,
            start_date: '2022-03-15',
            price: '80.000',
            team_member: {
                tmb_image: mary,
                guide_name: 'Мария',
            }
        },
        {
            tmb_wallpaper: wallpaper3,
            is_favourite: true,
            start_country: 'Конго',
            name: 'Невероятные приключения в африке ...',
            rating: 4.7,
            reviews_count: 89,
            tour_days: 10,
            start_date: '2022-03-25',
            price: '75.000',
            team_member: {
                tmb_image: kriss,
                guide_name: 'Кристина',
            }
        },
        {
            tmb_wallpaper: wallpaper4,
            is_favourite: false,
            start_country: 'Армения',
            name: 'По горам на велосипеде',
            rating: 5.0,
            reviews_count: 201,
            tour_days: 9,
            start_date: '2022-03-12',
            price: '64.000',
            team_member: {
                tmb_image: david,
                guide_name: 'Давид',
            }
        },
    ]

    const [showMatrix, setShowMatrix] = useState([])
    const [startIndex, setStartIndex] = useState(0)




    const handleInc = () => {
        if(size === 2) {
            if(startIndex < children.length - 1 && startIndex + 1 !== children.length -1) {
                setStartIndex(startIndex+1)
                setShowMatrix([startIndex, startIndex+1])
            } else if (startIndex + 1 === children.length -1) {
                setStartIndex(startIndex+1)
                setShowMatrix([startIndex, 0])
            } else if (startIndex === children.length -1) {
                setStartIndex(0)
                setShowMatrix([0, 1])
            }
        }
        if(size === 3) {
            if(startIndex < children.length - 1 && startIndex + 2 !== children.length -1) {
                setStartIndex(startIndex+1)
                setShowMatrix([startIndex, startIndex+1, startIndex+2])
            } else if (startIndex + 2 === children.length -1) {
                setStartIndex(startIndex+1)
                setShowMatrix([startIndex, startIndex+1, 0])
            } else if (startIndex + 1 === children.length -1) {
                setStartIndex(startIndex+1)
                setShowMatrix([startIndex, 0, 1])
            } else if (startIndex === children.length -1) {
                setStartIndex(0)
                setShowMatrix([0, 1, 2])
            }
        }
    }

    const handleDec = () => {
        if(size === 2) {
            if(startIndex > 0) {
                setStartIndex(startIndex - 1)
                setShowMatrix([startIndex, startIndex+1])
            } else if (startIndex === 0) {
                setStartIndex(children.length -1)
                setShowMatrix([startIndex, 0])
            } else if (startIndex === children.length -1) {
                setStartIndex(children.length - 2)
                setShowMatrix([startIndex, startIndex + 1])
            }
        }
        if(size === 3) {
            if(startIndex > 0 && startIndex+2 <= children.length -1) {
                setStartIndex(startIndex-1)
                setShowMatrix([startIndex, startIndex+1, startIndex+2])
            } else if (startIndex === 0) {
                setStartIndex(children.length -1)
                setShowMatrix([startIndex, 0, 1])
            } else if (startIndex === children.length -1) {
                setStartIndex(children.length - 2)
                setShowMatrix([startIndex, children.length - 1, 0])
            }
        }
    }

    return (
        <>
            <div className={styles.slider_section}>
                <div className={styles.slider_wrapper}>

                    <div className={styles.slider_arrow_left} onClick={handleDec}><img src={arrowIconLeft} alt="Left arrow"/></div>
                    <div className={styles.slider_arrow_right} onClick={handleInc}><img src={arrowIconRight} alt="Right arrow"/></div>
                    <div className={styles.slider_elements_wrapper}>
                        {children.map((item, index) => (
                            <CommonTourCard key={index} size={size===2 && index===0 && 'big'} data={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default SliderBlock