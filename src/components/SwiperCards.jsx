import { SwiperCard } from "./SwiperCard";
import "../Styles/SwiperCards.css";

export function SwiperCards() {
  //---------------------------------------------------------
  const numberOfCards = 10; // Definimos el número de tarjetas
  const cardData = Array.from({ length: numberOfCards }, (v, i) => ({
    id: `c${i + 1}`,
    icon: `${i + 1}`,
    image: `../img/Visuales_Spreaker/Imagen_${i + 1}.jpg`, // Ruta de la imagen para cada tarjeta
  }));
  //---------------------------------------------------------
  return (
    <div className="swipercards-wrapper">
      <div className="swipercards-container">
        {cardData.map((card) => (
          <SwiperCard
            key={card.id}
            id={card.id}
            icon={card.icon}
            backgroundImage={card.image}
          />
        ))}
      </div>
    </div>
  );
}
