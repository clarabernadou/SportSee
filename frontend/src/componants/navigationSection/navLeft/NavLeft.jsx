import React from "react"; // Imports the React library
import "./navLeft.css" // Imports the styles

// Import images to be used as icons
import Yogi from "../../../assets/yogi.png"
import Swimmer from "../../../assets/swimmer.png"
import Cyclist from "../../../assets/cyclist.png"
import Dumbbell from "../../../assets/dumbbell.png"

export default function NavLeft() {
  return (
    <div className="navLeftContainer flex columnAlignment alignItemsCenter">
      <div className="navLeftIcons">
        <ul className="columnAlignment flex">
          <img href="" src={Yogi} alt="Yoga"/>
          <img href="" src={Swimmer} alt="Nageur"/>
          <img href="" src={Cyclist} alt="Cycliste"/>
          <img href="" src={Dumbbell} alt="Haltère"/>
        </ul>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}
