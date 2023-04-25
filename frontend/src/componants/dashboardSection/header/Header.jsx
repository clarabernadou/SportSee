import React from 'react';
import "./header.css"

function Header({ userData }) {
  const firstName = userData?.firstName; // Use the safety operator to avoid errors
  console.log(firstName);
  return (
    <div className='headerContainer'>
      <h1>Bonjour <span style={{color: "#FF0101"}}>{firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Header;
