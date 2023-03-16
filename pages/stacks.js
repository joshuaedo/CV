import { icons } from "@/lib/icons";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Stacks() {
  return (
    <div className="stacks container">
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
            <motion.div className="item">
              <Image src={icon} alt="" key={index} />
            </motion.div>
          );
        })}
        {icons.map((icon, index) => {
          return (
            <motion.div className="item">
              <Image src={icon} alt="" key={index} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
