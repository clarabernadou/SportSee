import React from 'react';
import "./card.css"

import Card from './Card';

import Flame from '../../../assets/flame.png'
import Chicken from '../../../assets/chicken.png'
import Apple from '../../../assets/apple.png'
import Cheeseburger from '../../../assets/cheeseburger.png'

export default function childrenProps({ userData }) {
    return (
        <div className="cardsContainer columnAlignment">
            <Card>
                <img className='iconCard' src={Flame} alt='' style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}/>
                <div className='columnAlignment'>
                    <p className='avgNumber'>{userData?.calorieCount}kCal</p>
                    <p className='avgName'>Calories</p>
                </div>
            </Card>
            <Card>
                <img className='iconCard' src={Chicken} alt='' style={{backgroundColor: 'rgba(74, 184, 255, 0.1)'}}/>
                <div className='columnAlignment'>
                    <p className='avgNumber'>{userData?.proteinCount}g</p>
                    <p className='avgName'>Proteines</p>
                </div>
            </Card>
            <Card>
                <img className='iconCard' src={Apple} alt='' style={{backgroundColor: 'rgba(249, 206, 35, 0.1)'}}/>
                <div className='columnAlignment'>
                    <p className='avgNumber'>{userData?.carbohydrateCount}g</p>
                    <p className='avgName'>Glucides</p>
                </div>
            </Card>
            <Card>
                <img className='iconCard' src={Cheeseburger} alt='' style={{backgroundColor: 'rgba(253, 81, 129, 0.1)'}}/>
                <div className='columnAlignment'>
                    <p className='avgNumber'>{userData?.lipidCount}g</p>
                    <p className='avgName'>Lipides</p>
                </div>
            </Card>
        </div>  
  );
}
