import "./Stacks.css";
import icons from "./icons";
import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

export default function Stacks() {
  console.log(icons);

  return (
    <div className="stacks page--background">
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {icons.map((icon) => {
            return (
              <motion.div>
                <img src={icon} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
