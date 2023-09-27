import React, { useState, useRef, useEffect } from "react";

import { FiPlus } from "react-icons/fi";

const accordion = () => {
    const [active, setActive] = useState(false);
    
    const contentRef = useRef(null);
    
    useEffect(() => {
      contentRef.current.style.maxHeight = active
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }, [contentRef, active]);
    
    const toggleAccordion = () => {
      setActive(!active);
    };
  return (
    <div className="accordion">
      <div>
        <button
          className={`question-section ${active}`}
          onClick={toggleAccordion}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                Offering Encouragement
              </h4>
              <FiPlus
                className={active ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef}
              className={active ? `answer answer-divider` : `answer`}
            >
              <p>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default accordion;
