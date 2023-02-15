import Card from "./Card";
// import cardData from "./cardData";

export default function Projects() {
  return (
    <div className="Projects page--background container">
      <div className="row">
        {/* Map Function */}
        {/* {cardData.map((props) => {
          return (
            <Card
              key={props.id}
              src={props.img.src}
              alt={props.img.alt}
              title={props.title}
              description={props.description}
              href={props.href}
            />
          );
        })} */}
        <Card
          key={1}
          imgSrc={require("./images/arese.png")}
          imgAlt="Arese Sylvester - Home"
          title="Arese Sylvester"
          description="A portfolio website tailor-made for Arese sylvester"
          href="https://www.aresesylvester.com/"
        />
        <Card
          key={2}
          imgSrc={require("./images/ryter.png")}
          imgAlt="Ryter - Home"
          title="Ryter"
          description="A productivity app for writers"
          href="https://ryter.netlify.app/"
        />
        <Card
          key={3}
          imgSrc={require("./images/cleander.png")}
          imgAlt="Cleander"
          title="Cleander"
          description="A single  page website for a pseudo housekeeping company"
          href="https://thecleander.netlify.app/"
        />
        <Card
          key={4}
          imgSrc={require("./images/business-card.png")}
          imgAlt="Joshua Edo's Business Card"
          title="Business Card"
          description="A business card made out of reusable components"
          href="https://joshuaedocard.netlify.app/"
        />
        <Card
          key={5}
          imgSrc={require("./images/drum.png")}
          imgAlt="Drum Kit"
          title="Drum Kit"
          description="A web app that plays different drum sounds"
          href="https://josh-drum.netlify.app/"
        />
        <Card
          key={6}
          imgSrc={require("./images/dice.png")}
          imgAlt="Dice Game"
          title="Dice Game"
          description="A decision making website built on Math.random()"
          href="https://thesimpledicegame.netlify.app/"
        />
        <Card
          key={7}
          imgSrc={require("./images/portfolio.png")}
          imgAlt="Joshua Edo - Home"
          title="CV - Demo"
          description="A portfolio website made with HTML and CSS"
          href="https://joshuaedo-cv2.netlify.app/"
        />
      </div>
    </div>
  );
}
