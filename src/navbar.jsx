import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Scrolltosection from "./scrolltosection"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrollClass, setScrollClass] = useState("");
  const [scrolllClass, setScrolllClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = 20;
      if (window.scrollY >= scrollPosition) {
        setScrollClass("on-scroll");
        setScrolllClass("on-scrolll");
      } else {
        setScrollClass("");
        setScrolllClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollt = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");

      // Create an array to store the section positions
      const sectionPositions = Array.from(sections).map((section) => ({
        id: section.id,
        offsetTop: section.offsetTop,
        offsetBottom: section.offsetTop + section.clientHeight,
      }));

      // Determine which section is currently in view
      const currentSection = sectionPositions.find(
        (section) =>
          scrollY >= section.offsetTop && scrollY < section.offsetBottom
      );

      if (currentSection) {
        setActiveLink(currentSection.id);
      } else {
        setActiveLink("");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScrollt);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollt);
    };
  }, []);

  return (
    <div className={`navbar ${scrollClass}`}>
      <div className={`content ${scrolllClass}`}>
        <div className="flex">
          <img
            src="/web-logo.png"
            width="147"
            height="55"
            alt="Sneaklin Logo"
            className="logo"
          />
          <nav
            className={Mobile ? "mobile-link" : "lol"}
            onClick={() => setMobile(false)}
          >
            <Link
              to="/#home"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => Scrolltosection("home")}
            >
              Home
            </Link>
            <Link
              to="/#getinvolved"
              className={activeLink === "getinvolved" ? "active" : ""}
              onClick={() => Scrolltosection("getinvolved")}
            >
              Get Involved
            </Link>
            <Link to="/#contact"
              onClick={() => Scrolltosection("contact")}
            className={activeLink === "contact" ? "active" : ""}>Contact</Link>
            <Link to="https://wa.link/bv8ivn" target="_blank" className="btn">
              Donate Now
            </Link>
          </nav>
          <button className="mobile" onClick={() => setMobile(!Mobile)}>
            {Mobile ? <FaTimes /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
