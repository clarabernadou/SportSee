import React from 'react'; // Imports the React library
import "./header.css" // Imports the styles

export default function Header({ userData }) {
  const firstName = userData?.firstName; // Use the safety operator to avoid errors
  return (
    <div className='headerContainer'>
      <h1>Bonjour <span style={{color: "#FF0101"}}>{firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
