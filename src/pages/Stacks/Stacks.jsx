import "./Stacks.css";
import { icons } from "./icons";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Stacks() {
  const carousel = useRef();
  console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
  const width = carousel.current.scrollWidth - carousel.current.offsetWidth;
  return (
    <div className="stacks page--background">
      <div className="container">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div className="carousel--description">
            <h5>I have significant experience with these tools.</h5>
          </motion.div>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {icons.map((icon) => {
              return (
                <motion.div className="item" key={icon}>
                  <img src={icon} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
