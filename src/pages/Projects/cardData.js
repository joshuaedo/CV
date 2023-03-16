import Spotify from "./images/spotify.png";
import Netflix from "./images/netflix.png";
import Arese from "./images/arese.png";
import Blog from "./images/blog.png";
import Ryter from "./images/ryter.png";
import Cleander from "./images/cleander.png";
import BusinessCard from "./images/business-card.png";
import DrumKit from "./images/drum.png";
import DiceGame from "./images/dice.png";
import StyleYourDiv from "./images/style-your-div.png";
import CV from "./images/portfolio.png";
// import  from "./images/.png";

const cardData = [
  {
    id: 1,
    img: { src: Spotify, alt: "Spotify Web App Clone" },
    title: "Spotify Clone",
    description: "A clone of the spotify web app, built with NextJs",
    href: "https://joshuaedo-spotify.vercel.app/",
  },
  {
    id: 2,
    img: { src: Netflix, alt: "Netflix Clone" },
    title: "Netflix Clone",
    description: "A clone of netflix built with React and the TMDB API",
    href: "https://joshuaedo-netflix.web.app/",
  },
  {
    id: 3,
    img: {
      src: Arese,
      alt: "Arese Sylvester - Home",
    },
    title: "Arese Sylvester",
    description: "The portfolio website for Arese sylvester",
    href: "https://www.aresesylvester.com/",
  },
  {
    id: 4,
    img: { src: Blog, alt: "Joshua Edo's Blog" },
    title: "My Blog",
    description: "A blog website built with GraphQL and NextJs",
    href: "https://joshuaedo-blog.vercel.app/",
  },
  {
    id: 5,
    img: { src: Ryter, alt: "Ryter - Home " },
    title: "Ryter",
    description: "A productivity app for writers",
    href: "https://ryter.netlify.app/",
  },
  {
    id: 6,
    img: { src: Cleander, alt: "Cleander" },
    title: "Cleander",
    description: "A landing page for Cleander",
    href: "https://thecleander.netlify.app/",
  },
  {
    id: 7,
    img: {
      src: BusinessCard,
      alt: "Joshua Edo's Business Card",
    },
    title: "Business Card",
    description: "A business card made with react",
    href: "https://joshuaedocard.netlify.app/",
  },
  {
    id: 8,
    img: { src: DrumKit, alt: "Drum Kit" },
    title: "Drum Kit",
    description: "A drum kit",
    href: "https://josh-drum.netlify.app/",
  },
  {
    id: 9,
    img: { src: DiceGame, alt: "Dice Game" },
    title: "Dice Game",
    description: "A simple dice game",
    href: "https://thesimpledicegame.netlify.app/",
  },
  {
    id: 10,
    img: {
      src: StyleYourDiv,
      alt: "Style Your Div",
    },
    title: "Style Your Div",
    description: "Style a Div by editing text directly in the DOM",
    href: "https://style-your-div.netlify.app/",
  },
  {
    id: 11,
    img: {
      src: CV,
      alt: "Joshua Edo - Home",
    },
    title: "CV",
    description: "My first portfolio website",
    href: "https://joshuaedo-cv2.netlify.app/",
  },
  // {
  //   id: ,
  //   img: { src: require("./images/"), alt: "" },
  //   title: "",
  //   description: "",
  //   href: ""
  // },
];

export { cardData };
