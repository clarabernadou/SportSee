import React from "react";
import "./navLeft.css"

import Yogi from "../../../assets/yogi.png"
import Swimmer from "../../../assets/swimmer.png"
import Cyclist from "../../../assets/cyclist.png"
import Dumbbell from "../../../assets/dumbbell.png"

export default function NavLeft() {
  return (
    <div className="navLeftContainer">
      <div className="navLeftIcons">
        <ul>
          <img src={Yogi} alt="Yoga"/>
          <img src={Swimmer} alt="Nageur"/>
          <img src={Cyclist} alt="Cycliste"/>
          <img src={Dumbbell} alt="Haltère"/>
        </ul>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}
