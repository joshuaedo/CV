import Head from "next/head";
import Image from "next/image";
import joshua from "@/assets/images/joshua-edo.jpg";
import Navbar from "@/components/Navbar";
const currentYear = new Date().getFullYear();
const currentAge = currentYear - 2002;

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Edo - Home</title>
        <meta name="description" content="Joshua Edo's HomePage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="Hero">
        <div className="row">
          <div className="col w-100 d-block d-lg-inline">
            <Image
              src={joshua}
              alt="joshua edo"
              className="hero--img"
              priority
            />
          </div>
          <div className="col w-100 d-block d-lg-inline">
            <blockquote className="quote">
              <i>
                {" "}
                “The most innovative solution to a complex problem is often the
                simplest one. But as anyone who&apos;s devoted their time to big
                ideas knows, simple and easy are two very different things.”
              </i>
            </blockquote>
            <p className="quote"> - Mackey Saturday</p>

            <p className="bio">
              My name is Joshua. I&apos;m a {currentAge} year old frontend web
              developer living in West Africa, Nigeria. I love Dan Brown&apos;s
              books, Chelsea football club, How I met your mother,
              documentaries, pizza, solving complex problems, and silence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
