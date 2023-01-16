import React from "react";
import CustomBtn from "../UI/CustomBtn/CustomBtn";

const QuestionComponent = ({
  title,
  answers,
  correctAnswer,
  numberOfAns,
  numberOfQuestions,
  handleClick,
}) => {
  return (
    <div className="border-wrap">
      <div className="question-container">
        <div className="numbers">
          <span>{numberOfAns + 1}</span>/<span>{numberOfQuestions}</span>
        </div>
        <h3>{title}</h3>
        <div className="answers-container">
          {answers.map((ans, index) => (
            <CustomBtn
              key={index}
              value={ans}
              isSelected={correctAnswer === ans}
              handleClick={handleClick}
            >
              {ans}
            </CustomBtn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
