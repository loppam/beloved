import React from "react";
import Accordion from "../components/accordion";
import Accordiontwo from "../components/accordiontwo";
import Accordionthree from "../components/accordionthree";
import Swiper from "../components/swiper";
const howwehelp = () => {
  return (
    <div className="howwehelp">
      <div className="content">
        <div className="flex">
          <div className="left">
            <h2>How we help?</h2>
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money. Your lunch will not be imported, cassava garri
              ewa and ehhh ehhhhnn. The farmer will make money, the dinner would
              be cassava, eba, ewa and everything.
            </p>
            <div className="gap">
              <Accordion />
              <Accordiontwo />
              <Accordionthree />
            </div>
          </div>
          <Swiper />
        </div>
      </div>
    </div>
  );
};

export default howwehelp;
