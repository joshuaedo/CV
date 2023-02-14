import "./Hero.css";
import joshua from "./joshua-edo.jpg";

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - 2002;

  return (
    <div className="Hero container">
      <div className="row">
        <div className="col w-100 d-block d-lg-inline">
          <img src={joshua} alt="joshua edo" className="hero--img" />
        </div>
        <div className="col w-100 d-block d-lg-inline">
          <p className="quote">
            “The most innovative solution to a complex problem is often the
            simplest one. But as anyone who’s devoted their time to big ideas
            knows, simple and easy are two very different things.”
            {/* <br> - Mackey Saturday</br> */}
          </p>

          <p className="bio">
            My name is Joshua. I’m a {currentAge} year old frontend web
            developer living in West Africa, Nigeria. I love Dan Brown's books,
            the show - How I met your mother, documentaries, pizza, solving
            complex problems, and silence.
          </p>
        </div>
      </div>
    </div>
  );
}
