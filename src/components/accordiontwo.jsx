import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

const accordiontwo = () => {
  const [activetwo, setActivetwo] = useState(false);

  const contentReftwo = useRef(null);

  useEffect(() => {
    contentReftwo.current.style.maxHeight = activetwo
      ? `${contentReftwo.current.scrollHeight}px`
      : "0px";
  }, [contentReftwo, activetwo]);

  const toggleAccordiontwo = () => {
    setActivetwo(!activetwo);
  };

  return (
    <div>
      <button
        className={`question-section ${activetwo}`}
        onClick={toggleAccordiontwo}
      >
        <div>
          <div className="question-align">
            <h4 className="question-style">Sharing comfort & joy</h4>
            <FiPlus
              className={activetwo ? `question-icon rotate` : `question-icon`}
            />
          </div>
          <div
            ref={contentReftwo}
            className={activetwo ? `answer answer-divider` : `answer`}
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

export default accordiontwo;
