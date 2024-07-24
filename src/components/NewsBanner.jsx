import Img1News from "../img/News-banner/microfono-abierto.jpeg";
import Img2News from "../img/News-banner/itinerario-temporada3.jpeg";
import Img3News from "../img/News-banner/la-musica-que-nos-hace.jpeg";
import Img4News from "../img/News-banner/expo-sanbuena.jpeg";

import "../Styles/NewsBanner.css";

export function NewsBanner() {
  return (
    <section className="newsbanner-container">
      <div className="newsbanner-slider-wrapper">
        <div className="newsbanner-slider">
          <img id="slide-1" src={Img1News} alt="Noticias 1" />
          <img id="slide-2" src={Img2News} alt="Noticias 2" />
          <img id="slide-3" src={Img3News} alt="Noticias 3" />
          <img id="slide-4" src={Img4News} alt="Noticias 4" />
        </div>
        <div className="newsbanner-slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
        </div>
      </div>
    </section>
  );
}
