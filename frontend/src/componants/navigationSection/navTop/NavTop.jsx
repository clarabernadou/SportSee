import React from "react"; // Imports the React library
import "./navTop.css" // Imports the styles

import Logo from "../../../assets/logo.png" // Imports the image file for the logo

export default function NavTop() {

  // Defines a function that redirects the user to the home page when the logo is clicked
  const home = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="navTopContainer flex alignItemsCenter">
      <img className="navTopLogo" src={Logo} onClick={home} alt="Logo de SportSee" />
      <ul>
        <a href="/">Accueil</a>
        <a href="/profile">Profil</a>
        <a href="/setting">Réglage</a>
        <a href="/community">Communauté</a>
      </ul>
    </div>
  );
}
