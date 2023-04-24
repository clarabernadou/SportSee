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
          <img src={Yogi}/>
          <img src={Swimmer}/>
          <img src={Cyclist}/>
          <img src={Dumbbell}/>
        </ul>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}
