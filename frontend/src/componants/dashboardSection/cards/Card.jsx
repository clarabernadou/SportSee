import React from 'react';
import "./card.css"

export default function card({ children }) {
    return (
    <div className='card flex alignItemsCenter'>
        {children[0]}
        <div className='columnAlignment'>
            {children[1]}
            {children[2]}            
        </div>
    </div>
  );
}
