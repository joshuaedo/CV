import Card from '@/components/Card';
import { cardData } from '@/lib/cardData';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Joshua Edo - Projects</title>
        <meta name='description' content="Joshua Edo's Projects" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <div className='Projects'>
        <div className='row'>
          {cardData.map((props) => (
            <Card
              key={props.title}
              src={props.img.src}
              alt={props.img.alt}
              title={props.title}
              description={props.description}
              href={props.href}
            />
          ))}
        </div>
      </div>
    </>
  );
}
