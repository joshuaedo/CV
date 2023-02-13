import "./Stacks.css";
import { icons } from "./icons";
import { motion } from "framer-motion";

export default function Stacks() {
  return (
    <div className="stacks page--background">
      <div className="container">
        <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div className="carousel--description">
            <h5>I have significant experience with these tools.</h5>
          </motion.div>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -2000 }}
            className="inner-carousel"
          >
            {icons.map((icon) => {
              return (
                <motion.div className="item">
                  <img src={icon} alt="" key={icon} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
