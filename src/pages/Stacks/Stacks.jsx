import "./Stacks.css";
import { icons } from "./icons";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Stacks() {
  console.log(icons);

  return (
    <div className="stacks page--background">
      <div className="container">
        <motion.div className="carousel">
          <motion.div className="carousel--description">
            <h5>I have significant experience with these tools</h5>
          </motion.div>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0 }}
            className="inner-carousel"
          >
            {icons.map((icon) => {
              return (
                <motion.div className="item">
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
