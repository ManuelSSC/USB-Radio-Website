import "../Styles/Layout.css";
import { NewsBanner } from "./NewsBanner";

export function Layout() {
  return (
    <div className="layout-container">
      <div className="main-info">
        <div className="main-info-title ">
          <h1>Bienvenido a nuestra web oficial </h1>
        </div>
        <p>
          👉 Mantente informado con las últimas noticias y novedades de la
          comunidad Bonaventuriana. 💬
        </p>
        <NewsBanner />
      </div>
      <div className="mp3-player">
        <h3>🎧｡˚ Ahora Escuchando... ｡˚🎧</h3>
        <iframe src="https://a6.asurahosting.com/public/usb_radio/embed?theme=dark"></iframe>
      </div>
      <div className="history">
        <h3>Historial </h3>
        <iframe src="https://a6.asurahosting.com/public/usb_radio/history?theme=dark"></iframe>
      </div>
    </div>
  );
}
