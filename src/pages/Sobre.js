import React from "react";
import "./style.css";
import "animate.css/animate.css"
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.gif";
import bia from "../assets/bia.png";
import lucca from "../assets/lucca.png";
import matheus from "../assets/matheus.png";
import luana from "../assets/luana.png";

function Sobre() {

  const navigate = useNavigate();

  const onClickHandler = (prop) => () => {
    navigate(`/${prop}`);
  }

    return (
    <React.Fragment>
      
      <nav className="zone white sticky">
        <ul className="main-nav">
          <li className="push">
            <button onClick={ onClickHandler("home") }>Home</button>
          </li>
          <li>
          <button onClick={ onClickHandler("projetos") }>Projetos</button>
          </li>
          <li>
            <button onClick={ onClickHandler("contato") }>Contato</button>
          </li>
        </ul>
      </nav>

      <div className="container zone red">
        <div className="container zone pink">
          <h1 className="animate__animated animate__fadeInLeft animate__delay-1s">
          Projetos para o mundo <span className="umpraum">real.</span>
          </h1>
        </div>
        <div className="presentation animate__animated animate__fadeInRight animate__delay-1s">
          <h4>Ser umpraum significa pensar o espaço na sua escala real. E quando pensamos na escala real das coisas, estamos pensando no usuário e na cidade. Por isso, nossa missão é criar uma arquitetura responsável e consciente de onde ela se encaixa. Nossa missão é ser, sempre e acima de tudo, umpraum.</h4>
        </div>
      </div>


      <div className="buffer">
          <h1>Conheça a equipe</h1>
      </div> 

        <div class="zone blue grid-wrapper">
          <div class="box zone">
            <img src={matheus} alt="peep1"/>
            <figcaption>Matheus</figcaption>
          </div>
          <div class="box zone">
            <img src={luana} alt="peep2"/>
            <figcaption>Luana</figcaption>
          </div>
          <div class="box zone">
            <img src={lucca} alt="peep3"/>
            <figcaption>Lucca</figcaption>
          </div>
          <div class="box zone">
            <img src={bia} alt="peep4"/>
            <figcaption>Beatriz</figcaption>
          </div>
        </div>

    </React.Fragment>
  );
}

export default Sobre;