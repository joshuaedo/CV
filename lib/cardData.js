import Spotify from '@/assets/images/spotify.png';
import Netflix from '@/assets/images/netflix.png';
// import Arese from '@/assets/images/arese.png';
import Blog from '@/assets/images/blog.png';
import Ryter from '@/assets/images/ryter.png';
import Cleander from '@/assets/images/cleander.png';
import BusinessCard from '@/assets/images/business-card.png';
import DrumKit from '@/assets/images/drum.png';
import DiceGame from '@/assets/images/dice.png';
import StyleYourDiv from '@/assets/images/style-your-div.png';
import PortfolioV1 from '@/assets/images/portfolio-v1.png';
import PortfolioV2 from '@/assets/images/portfolio-v2.png';
import PortfolioV3 from '@/assets/images/portfolio-v3.png';
import Google from '@/assets/images/google.png';
import joshuaGPT from '@/assets/images/joshuaGPT.png';
import Apple from '@/assets/images/apple.png';
// import  from "@/assets/images/.png";

const cardData = [
  {
    img: { src: Spotify, alt: 'Spotify Web App Clone' },
    title: 'Spotify Clone',
    description: 'A clone of the spotify web app built with NextJs',
    href: 'https://joshuaedo-spotify.vercel.app/',
  },
  {
    img: { src: joshuaGPT, alt: 'joshuaGPT' },
    title: 'joshuaGPT',
    description: `A Telegram Bot built with Node.js and powered by OpenAI's chatGPT model`,
    href: 'https://t.me/joshuaedo_bot',
  },
  {
    img: { src: Netflix, alt: 'Netflix Clone' },
    title: 'Netflix Clone',
    description: 'A clone of netflix built with React and the TMDB API',
    href: 'https://joshuaedo-binge.vercel.app/',
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
    img: { src: Apple, alt: "Apple's HomePage" },
    title: 'Apple',
    description: "A mockup of Apple's Landing Page built with NextJs",
    href: 'https://apple-joshuaedo.vercel.app/',
  },
  {
    img: { src: Blog, alt: "Joshua Edo's Blog" },
    title: 'My Blog',
    description: 'A blog website built with GraphQL and NextJs',
    href: 'https://joshuaedo-blog.vercel.app/',
  },
  {
    img: { src: Ryter, alt: 'Ryter - Home ' },
    title: 'Ryter',
    description: 'A productivity app for writers',
    href: 'https://ryter.netlify.app/',
  },
  {
    img: { src: Google, alt: 'Google Search Engine' },
    title: 'Google',
    description: `A search engine made with Google's API and NextJs`,
    href: 'https://joshuaedo-google.vercel.app/',
  },
  {
    img: { src: Cleander, alt: 'Cleander' },
    title: 'Cleander',
    description: 'A landing page for the Cleander startup',
    href: 'https://thecleander.netlify.app/',
  },
  {
    img: {
      src: BusinessCard,
      alt: "Joshua Edo's Business Card",
    },
    title: 'Business Card',
    description: 'A business card made with react',
    href: 'https://joshuaedocard.netlify.app/',
  },
  {
    img: { src: DrumKit, alt: 'Drum Kit' },
    title: 'Drum Kit',
    description: 'A drum kit',
    href: 'https://josh-drum.netlify.app/',
  },
  {
    img: { src: DiceGame, alt: 'Dice Game' },
    title: 'Dice Game',
    description: 'A simple dice game',
    href: 'https://thesimpledicegame.netlify.app/',
  },
  {
    img: {
      src: StyleYourDiv,
      alt: 'Style Your Div',
    },
    title: 'Style Your Div',
    description: 'Style a Div by editing text directly in the DOM',
    href: 'https://style-your-div.netlify.app/',
  },
  {
    img: {
      src: PortfolioV3,
      alt: 'Joshua Edo - Home(V3)',
    },
    title: 'Portfolio V3',
    description: 'My official website (Third Edition)',
    href: 'https://joshuaedo.vercel.app/',
  },
  {
    img: {
      src: PortfolioV2,
      alt: 'Joshua Edo - Home(V2)',
    },
    title: 'Portfolio V2',
    description: 'My official website (Second Edition)',
    href: 'https://joshuaedo-v2.vercel.app/',
  },
  {
    img: {
      src: PortfolioV1,
      alt: 'Joshua Edo - Home(V1)',
    },
    title: 'Portfolio V1',
    description: 'My official website (First Edition)',
    href: 'https://joshuaedo-v1.vercel.app/',
  },
];

export { cardData };
