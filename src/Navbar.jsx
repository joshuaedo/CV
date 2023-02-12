// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar--container">
//           <Link to="/" className="navbar--logo">
//             Joshua Edo
//           </Link>
//           <Link to="/stacks" className="">
//             Stacks
//           </Link>
//           <Link to="/projects" className="">
//             Projects
//           </Link>
//           <Link to="/contact" className="">
//             Contact
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// Bootstrap Navbar
// import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  // function animation() {
  //   var tabsNewAnim = $("#navbarSupportedContent");
  //   var activeItemNewAnim = tabsNewAnim.find(".active");
  //   var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  //   var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  //   var itemPosNewAnimTop = activeItemNewAnim.position();
  //   var itemPosNewAnimLeft = activeItemNewAnim.position();
  //   $(".hori-selector").css({
  //     top: itemPosNewAnimTop.top + "px",
  //     left: itemPosNewAnimLeft.left + "px",
  //     height: activeWidthNewAnimHeight + "px",
  //     width: activeWidthNewAnimWidth + "px",
  //   });
  //   $("#navbarSupportedContent").on("click", "li", function (e) {
  //     $("#navbarSupportedContent ul li").removeClass("active");
  //     $(this).addClass("active");
  //     var activeWidthNewAnimHeight = $(this).innerHeight();
  //     var activeWidthNewAnimWidth = $(this).innerWidth();
  //     var itemPosNewAnimTop = $(this).position();
  //     var itemPosNewAnimLeft = $(this).position();
  //     $(".hori-selector").css({
  //       top: itemPosNewAnimTop.top + "px",
  //       left: itemPosNewAnimLeft.left + "px",
  //       height: activeWidthNewAnimHeight + "px",
  //       width: activeWidthNewAnimWidth + "px",
  //     });
  //   });
  // }

  // useEffect(() => {
  //   animation();
  //   $(window).on("resize", function () {
  //     setTimeout(function () {
  //       animation();
  //     }, 500);
  //   });
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Link className="logo" to="/" exact>
        Joshua Edo
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-home"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/stacks" exact>
              <i className="fas fa-server"></i>Stacks
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/projects" exact>
              <i className="fas fa-code"></i>Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="fas fa-address-book"></i>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
