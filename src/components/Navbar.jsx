import React, { useState } from "react";
import { Marquee } from "./Marquee";
import {
  FaInstagram,
  FaSpotify,
  FaDeezer,
  FaMicrophoneLines,
} from "react-icons/fa6";
import { BurgerButton } from "./BurgerButton";
import { SocialButton } from "./SocialButton";
import LogoImg1 from "../img/Logo_navbar-transparent.png";
import "../Styles/Navbar.css";

export function Navbar() {
  //---------------------------------------------------------
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // Cuando es true lo pasa a false y vice versa.
    setClicked(!clicked);
  };
  //---------------------------------------------------------
  return (
    <nav className="navbar">
      <div className="navbar-div-top-segment">
        <p>
          Siguenos en instagram y en nuestras redes sociales para estar
          pendiente de mas novedades.
        </p>
        <p>Contactanos en: usbradio@usbbog.edu.co</p>
      </div>
      <div className="navbar-div-segment"></div>
      <header className="navbar-header">
        <img src={LogoImg1} alt="USB RADIO - sitio oficial" />
        <nav className={`navbar-links ${clicked ? "active" : ""}`}>
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Noticias</a>
          <a href="#">Programas</a>
        </nav>
        <div className="navbar-social active">
          <a
            href="https://www.spreaker.com/user/usb-radio--8429931"
            target="_blank"
          >
            <SocialButton
              initialBgColor={null}
              hoverBgColor="#ff9900"
              initialColor={null}
              hoverColor="white"
              icon={<FaMicrophoneLines />}
            />
          </a>
          <a
            href="https://www.instagram.com/usb_radio?igsh=YW56ZGZzYTR6dG1k"
            target="_blank"
          >
            <SocialButton
              initialBgColor={null}
              hoverBgColor="#E4405F"
              initialColor={null}
              hoverColor="white"
              icon={<FaInstagram />}
            />
          </a>
          <a
            href="https://open.spotify.com/show/6PXeoziWiDG7nDO9IqO4lg?si=d3812d8504474e6a"
            target="_blank"
          >
            <SocialButton
              initialBgColor={null}
              hoverBgColor="#1DB954"
              initialColor={null}
              hoverColor="white"
              icon={<FaSpotify />}
            />
          </a>
          <a
            href="https://www.deezer.com/search/USB%20Radio/show"
            target="_blank"
          >
            <SocialButton
              initialBgColor={null}
              hoverBgColor="#BE3DAD"
              initialColor={null}
              hoverColor="white"
              icon={<FaDeezer />}
            />
          </a>
          <button className="navbar-login-button">Ingresar</button>
        </div>
        <div className="navbar-burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </header>
      <div className="navbar-div-segment"></div>
      <aside>
        <Marquee />
      </aside>
      <div className="navbar-div-segment"></div>
    </nav>
  );
}
