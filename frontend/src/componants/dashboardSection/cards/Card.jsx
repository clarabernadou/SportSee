import React from 'react'; // Imports the React library
import "./card.css"; // Imports the styles

export default function card({ children }) {
    return (
    <div className='card flex alignItemsCenter'>
        {/* Adding the first child of the component */}
        {children[0]}
        <div className='columnAlignment'>
            {/* Adding the second and third children of the component */}
            {children[1]}
            {children[2]}            
        </div>
    </div>
  );
}
