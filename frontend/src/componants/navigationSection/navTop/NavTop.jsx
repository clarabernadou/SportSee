import React from "react";
import Logo from "../../../assets/logo.png"
import "./navTop.css"

export default function NavTop() {
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
