import React from "react";
import Gustavo from "../assets/gustavo.png";
import Jesse from "../assets/jesse.jpeg";
import Saul from "../assets/saul.png";
import Mike from "../assets/mike.png";
import Walter from "../assets/walt.jpeg";
import Character from "./ui/Character";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="landing__title">Choose a character</h1>

      <div className="character__wrapper">
        <Link to="/walter">
          <Character name="Walter White" img={Walter} />
        </Link>
        <Link to="/jesse">
          <Character name="Jesse Pinkman" img={Jesse} />
        </Link>
        <Link to="/saul">
          <Character name="Saul Goodman" img={Saul} />
        </Link>
        <Link to="/gustavo">
          <Character name="Gustavo Fring" img={Gustavo} />
        </Link>
        <Link to="/mike">
          <Character name="Mike Ehrmantraut" img={Mike} /> 
        </Link>
      </div>
    </div>
  );
}
