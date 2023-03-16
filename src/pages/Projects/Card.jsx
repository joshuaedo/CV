import "./Card.css";

export default function Card(props) {
  return (
    <div className="col d-flex align-items-center justify-content-center">
      <a href={props.href} exact>
        <div className="card">
          <img src={props.src} alt={props.alt} className="card--img" />
          <div className="card--text">
            <h3 className="card--title">{props.title}</h3>
            <p className="card--description">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
