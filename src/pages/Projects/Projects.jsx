import Card from "./Card";
import { cardData } from "./cardData";

export default function Projects() {
  console.log(cardData);
  return (
    <div className="Projects container">
      <div className="row">
        {/* Map Function */}
        {cardData.map((props) => (
          <Card
            key={props.id}
            src={props.img.src}
            alt={props.img.alt}
            title={props.title}
            description={props.description}
            href={props.href}
          />
        ))}
      </div>
    </div>
  );
}
