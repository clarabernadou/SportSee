import React from 'react'; // Imports the React library
import "./card.css"; // Imports the styles

import Card from './Card'; // // Imports cards

// Import images to be used as icons
import Flame from '../../../assets/flame.png'
import Chicken from '../../../assets/chicken.png'
import Apple from '../../../assets/apple.png'
import Cheeseburger from '../../../assets/cheeseburger.png'

export default function childrenProps({ userData }) {
    return (
        <div className="cardsContainer columnAlignment">

            {/* Card for displaying calorie count */}
            <Card>
                <img className='iconCard' src={Flame} alt='' style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}/>
                <div className='columnAlignment'>
                <p className='avgNumber'>{userData?.calorieCount >= 1000 ? (userData?.calorieCount/1000).toLocaleString('fr-FR', {maximumFractionDigits: 3, minimumFractionDigits: 3}) + "kCal" : userData?.calorieCount + "kCal"}</p>
                    <p className='avgName'>Calories</p>
                </div>
            </Card>

            {/* Card for displaying protein count */}
            <Card>
                <img className='iconCard' src={Chicken} alt='' style={{backgroundColor: 'rgba(74, 184, 255, 0.1)'}}/>
                <div className='columnAlignment'>
                    <p className='avgNumber'>{userData?.proteinCount}g</p>
                    <p className='avgName'>Proteines</p>
                </div>
            </Card>

            {/* Card for displaying carbohydrate count */}
            <Card>
                <img className='iconCard' src={Apple} alt='' style={{backgroundColor: 'rgba(249, 206, 35, 0.1)'}}/>
                <div className='columnAlignment'>
                    <p className='avgNumber'>{userData?.carbohydrateCount}g</p>
                    <p className='avgName'>Glucides</p>
                </div>
            </Card>

            {/* Card for displaying lipid count */}
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
