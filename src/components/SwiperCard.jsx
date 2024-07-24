export function SwiperCard({ id, icon, backgroundImage, checked }) {
  //---------------------------------------------------------
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    /* Puedes añadir más estilos según sea necesario */
  };
  console.log("url de la imagen: ", cardStyle.backgroundImage);
  //---------------------------------------------------------
  return (
    <>
      <input type="radio" name="slide" id={id} checked={checked} />
      <label htmlFor={id} className="card">
        <div className="row">
          <div className="icon">{icon}</div>
          <a
            href="https://www.spreaker.com/user/usb-radio--8429931"
            target="_blank"
          >
            <button>Mas Información 👈🏻</button>
          </a>
          <div className="description"></div>
        </div>
      </label>
    </>
  );
}
