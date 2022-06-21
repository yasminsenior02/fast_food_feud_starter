import * as React from "react";
import "./Chip.css";

export function Chip({ label = "", isActive = false, imclick = () => {} }) {
  /*function exist but nothing in it until app.jsx .. adding to your map*/

  var buttonClassName = " ";
  /*if ((isActive = false)) {
    buttonClassName = "chip";
  }*/
  /*if ((isActive = true)) {
    buttonClassName = "chip active";
  }*/
  //calling the click button with onclick // //checks if active if true it uses the ative one if not use uses chip
  return (
    <button className={isActive ? "chip active" : "chip"} onClick={imclick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  );
}

export default Chip;
