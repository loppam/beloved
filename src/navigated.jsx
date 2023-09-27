import React from "react";
import Homepage from "./assets/homepage";
import Getinvolved from "./assets/getinvolved";
import Navbar from "./navbar"; // Import your Navbar component
import Howwehelp from "./assets/howwehelp";
import Contact from "./assets/contact";
import Footer from "./footer";
const Navigated = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Homepage />
      </section>
      <section id="getinvolved">
        <Getinvolved />
      </section>
      <Howwehelp />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Navigated;
