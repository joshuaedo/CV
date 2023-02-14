import React, { useState, useRef } from "react";

import "./Card.css";

export default function Card() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseEnter() {
    const title = titleRef.current;
    const desc = descRef.current;
    title.style.transform = "translateZ(150px)";
    desc.style.transform = "translateZ(75px)";
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const title = titleRef.current;
    title.style.transform = "translateZ(0px)";
  }

  return (
    <div className="col">
      <a href="https://www.aresesylvester.com" exact>
        <div
          className="card"
          ref={cardRef}
          style={{
            transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={require("./images/arese.png")}
            alt="Arese Sylvester's Website"
            className="card--img"
          />
          <div className="card--text">
            <h3 className="card--title" ref={titleRef}>
              Arese Sylvester
            </h3>
            <p className="card--description" ref={descRef}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eos fugit fugiat doloribus totam corrupti laboriosam
              mollitia eligendi tempora corporis.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
