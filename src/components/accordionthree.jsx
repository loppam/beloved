import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

const accordionthree = () => {
  const [activethree, setActivethree] = useState(false);

  const contentRefthree = useRef(null);

  useEffect(() => {
    contentRefthree.current.style.maxHeight = activethree
      ? `${contentRefthree.current.scrollHeight}px`
      : "0px";
  }, [contentRefthree, activethree]);

  const toggleaccordionthree = () => {
    setActivethree(!activethree);
  };

  return (
    <div>
      <button
        className={`question-section ${activethree}`}
        onClick={toggleaccordionthree}
      >
        <div>
          <div className="question-align">
            <h4 className="question-style">Promoting positive living</h4>
            <FiPlus
              className={activethree ? `question-icon rotate` : `question-icon`}
            />
          </div>
          <div
            ref={contentRefthree}
            className={activethree ? `answer answer-divider` : `answer`}
          >
            <p>
              A town hall different from bala blu, blue blu bulaba. broom broom
              broom brooooooooom. Bala blu blue blu bulaba. The farmers will
              make more money. Your lunch will not be imported, cassava garri
              ewa and ehhh ehhhhnn. The farmer will make money, the dinner would
              be cassava, eba, ewa and everything.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default accordionthree;
