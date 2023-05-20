import Spotify from "@/assets/images/spotify.png";
import Netflix from "@/assets/images/netflix.png";
// import Arese from '@/assets/images/arese.png';
import Blog from "@/assets/images/blog.png";
import Ryter from "@/assets/images/ryter.png";
import Cleander from "@/assets/images/cleander.png";
import BusinessCard from "@/assets/images/business-card.png";
import DrumKit from "@/assets/images/drum.png";
import DiceGame from "@/assets/images/dice.png";
import StyleYourDiv from "@/assets/images/style-your-div.png";
import CV from "@/assets/images/portfolio.png";
import Google from "@/assets/images/google.png";
import joshuaGPT from "@/assets/images/joshuaGPT.png";
// import  from "@/assets/images/.png";

const cardData = [
  {
    img: { src: Spotify, alt: "Spotify Web App Clone" },
    title: "Spotify Clone",
    description: "A clone of the spotify web app, built with NextJs",
    href: "https://joshuaedo-spotify.vercel.app/",
  },
  {
    img: { src: joshuaGPT, alt: "joshuaGPT" },
    title: "joshuaGPT",
    description: `A Telegram Bot built with Node.js and powered by OpenAI's chatGPT model`,
    href: "https://t.me/joshuaedo_bot",
  },
  {
    img: { src: Netflix, alt: "Netflix Clone" },
    title: "Netflix Clone",
    description: "A clone of netflix built with React and the TMDB API",
    href: "https://joshuaedo-netflix.web.app/",
  },
  // {
  //   img: {
  //     src: Arese,
  //     alt: 'Arese Sylvester - Home',
  //   },
  //   title: 'Arese Sylvester',
  //   description: 'The portfolio website for Arese sylvester',
  //   href: 'https://www.aresesylvester.com/',
  // },
  {
    img: { src: Blog, alt: "Joshua Edo's Blog" },
    title: "My Blog",
    description: "A blog website built with GraphQL and NextJs",
    href: "https://joshuaedo-blog.vercel.app/",
  },
  {
    img: { src: Ryter, alt: "Ryter - Home " },
    title: "Ryter",
    description: "A productivity app for writers",
    href: "https://ryter.netlify.app/",
  },
  {
    img: { src: Google, alt: "Google Search Engine" },
    title: "Google",
    description: `A search engine made with Google's API and NextJs`,
    href: "https://joshuaedo-google.vercel.app/",
  },
  {
    img: { src: Cleander, alt: "Cleander" },
    title: "Cleander",
    description: "A landing page for Cleander",
    href: "https://thecleander.netlify.app/",
  },
  {
    img: {
      src: BusinessCard,
      alt: "Joshua Edo's Business Card",
    },
    title: "Business Card",
    description: "A business card made with react",
    href: "https://joshuaedocard.netlify.app/",
  },
  {
    img: { src: DrumKit, alt: "Drum Kit" },
    title: "Drum Kit",
    description: "A drum kit",
    href: "https://josh-drum.netlify.app/",
  },
  {
    img: { src: DiceGame, alt: "Dice Game" },
    title: "Dice Game",
    description: "A simple dice game",
    href: "https://thesimpledicegame.netlify.app/",
  },
  {
    img: {
      src: StyleYourDiv,
      alt: "Style Your Div",
    },
    title: "Style Your Div",
    description: "Style a Div by editing text directly in the DOM",
    href: "https://style-your-div.netlify.app/",
  },
  {
    img: {
      src: CV,
      alt: "Joshua Edo - Home",
    },
    title: "CV",
    description: "My first portfolio website",
    href: "https://joshuaedo-cv2.netlify.app/",
  },
];

export { cardData };
