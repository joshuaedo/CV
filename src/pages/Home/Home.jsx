import React, { Component } from "react";
import Hero from "./Hero";
import Stacks from "../Stacks/Stacks";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        {/* <Stacks />
        <Projects />
        <Contact /> */}
      </>
    );
  }
}
