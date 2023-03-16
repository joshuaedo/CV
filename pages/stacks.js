import { icons } from "@/lib/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Stacks() {
  return (
    <>
      <Head>
        <title>Joshua Edo - Stacks</title>
        <meta name="description" content="Joshua Edo's Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="stacks">
        <div className="carousel--description">
          <p>I have significant experience with these tools.</p>
          <hr></hr>
          <div className="scroll--container">
            <span className="scroll">
              {" "}
              {"< --"} Click and Hold the icons then Swipe left to see more{" "}
            </span>
          </div>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -4000 }}
          className="carousel"
        >
          {icons.map((icon, index) => {
            return (
              <motion.div className="item" key={index}>
                <Image src={icon} alt="" />
              </motion.div>
            );
          })}
          {icons.map((icon, index) => {
            return (
              <motion.div className="item" key={index}>
                <Image src={icon} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
