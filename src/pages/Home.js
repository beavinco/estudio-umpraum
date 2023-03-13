import React from "react";
import "./style.css";
import logo from "../assets/logo.gif";
import "animate.css/animate.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const onClickHandler = (prop) => () => {
    navigate(`/${prop}`);
  }

  return (
    <React.Fragment>
      <nav className="zone white sticky">
        <ul className="main-nav">
          <li className="push">
            <button onClick={ onClickHandler("sobre") }>Sobre nós</button>
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
          <h3 className="animate__animated animate__fadeInLeft animate__delay-0.7s">
            Nós criamos para o mundo real.
          </h3>
          <h1 className="animate__animated animate__fadeInLeft animate__delay-1s">
          Nós somos <span className="umpraum">umpraum.</span>
          </h1>
        </div>
        <img className="cover animate__animated animate__fadeInRight" src={logo} alt="logo"/>
      </div>

      <footer>
        Feito com carinho por Beatriz Avinco para o API VIII. Foco, força e fé.
      </footer>
    </React.Fragment>
  );
}

export default Home;
