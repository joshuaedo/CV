import React, { useState, useRef } from "react";

import "./Card.css";

export default function Card(props) {
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
    <div className="col d-flex align-items-center justify-content-center">
      <a href={props.href} exact>
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
          <img src={props.imgSrc} alt={props.imgAlt} className="card--img" />
          <div className="card--text">
            <h3 className="card--title" ref={titleRef}>
              {props.title}
            </h3>
            <p className="card--description" ref={descRef}>
              {props.description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
