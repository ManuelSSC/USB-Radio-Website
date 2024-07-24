import USB from "../img/footer-live.png";
import "../Styles/Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="container-footer">
          <img src={USB} />
          <p>
            En estos momentos esta sonando ...{" "}
            <span>Nombre de la canción/programa</span>
          </p>
        </div>

        <p className="footer-copyright">
          © 2024 USB Radio. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
