import React, { useState, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import data from "./AccordionData.js";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef(null);
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <div className="arrow-container">
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
        </div>
      </button>
      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
