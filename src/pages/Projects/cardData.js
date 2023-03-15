import Arese from "./images/arese.png";

const cardData = [
  {
    id: 1,
    img: {
      src: Arese,
      alt: "Arese Sylvester - Home",
    },
    title: "Arese Sylvester",
    description: "The portfolio website for Arese sylvester",
    href: "https://www.aresesylvester.com/",
  },
  {
    id: 2,
    img: { src: require("./images/ryter.png").default, alt: "Ryter - Home " },
    title: "Ryter",
    description: "A productivity app for writers",
    href: "https://ryter.netlify.app/",
  },
  {
    id: 3,
    img: { src: require("./images/cleander.png").default, alt: "Cleander" },
    title: "Cleander",
    description: "A landing page for Cleander",
    href: "https://thecleander.netlify.app/",
  },
  {
    id: 4,
    img: {
      src: require("./images/business-card.png").default,
      alt: "Joshua Edo's Business Card",
    },
    title: "Business Card",
    description: "A business card made with react",
    href: "https://joshuaedocard.netlify.app/",
  },
  {
    id: 5,
    img: { src: require("./images/drum.png").default, alt: "Drum Kit" },
    title: "Drum Kit",
    description: "A drum kit",
    href: "https://josh-drum.netlify.app/",
  },
  {
    id: 6,
    img: { src: require("./images/dice.png").default, alt: "Dice Game" },
    title: "Dice Game",
    description: "A simple dice game",
    href: "https://thesimpledicegame.netlify.app/",
  },
  {
    id: 7,
    img: {
      src: require("./images/portfolio.png").default,
      alt: "Joshua Edo - Home",
    },
    title: "CV",
    description: "My first portfolio website",
    href: "https://joshuaedo-cv2.netlify.app/",
  },
  // {
  //   id: 1,
  //   img: { src: require("./images/"), alt: "" },
  //   title: "",
  //   description: "",
  //   href: ""
  // },
];

export { cardData };
