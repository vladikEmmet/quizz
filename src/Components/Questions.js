import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Preloader from "./Preloader";
import QuestionComponent from "./QuestionComponent";
import Result from "./Result";
import { Link } from "react-router-dom";

const Questions = ({ categories, difficulty }) => {
  const [questions, setQuestions] = useState([]);
  const [curQuestion, setCurQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const giveAnswer = (value) => {
    if (questions[curQuestion].correctAnswer === value)
      setCorrectAnswers((prev) => prev + 1);
    if (curQuestion === 9) {
      setIsGameFinished(true);
      return;
    }
    setCurQuestion((prev) => prev + 1);
  };

  const shuffle = (arr) => {
    let currentIndex = arr.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };

  useEffect(() => {
    const fetchData = async () => {
      const categoriesOfQuestion =
        categories.length <= 0
          ? ""
          : `categories=${
              categories.length === 1 ? categories[0] : categories.join(",")
            }`;
      const url = `https://the-trivia-api.com/api/questions?${categoriesOfQuestion}&limit=10${
        difficulty.length > 0 ? "&difficulty=" + difficulty : ""
      }`;

      const response = await fetch(url);
      const res = await response.json();
      return res;
    };

    try {
      fetchData().then((res) => setQuestions(res));
    } catch (e) {
      alert(`Oops! Error: ${e}
            Reload the page and try again.`);
    }
  }, [categories, difficulty]);

  useEffect(() => {
    document.title = `Question ${curQuestion}/10`;
  }, [curQuestion]);

  return (
    <div className="questions-display">
      <div
        className="progress-bar"
        style={{
          width:
            (document.documentElement.clientWidth * (curQuestion / 10) * 100) /
            100,
        }}
      ></div>
      <div className="goback-button-container">
        <Link to="/" className="goback-button">
          <FontAwesomeIcon icon={faAngleUp} />
          <span>Go back</span>
        </Link>
      </div>
      {questions.length > 0 ? (
        <QuestionComponent
          title={questions[curQuestion].question}
          correctAnswer={questions[curQuestion].correctAnswer}
          answers={shuffle([
            ...questions[curQuestion].incorrectAnswers,
            questions[curQuestion].correctAnswer,
          ])}
          numberOfQuestions={questions.length}
          numberOfAns={curQuestion}
          handleClick={giveAnswer}
        />
      ) : (
        <Preloader />
      )}
      {isGameFinished && <Result correctAnswers={correctAnswers} />}
    </div>
  );
};

export default Questions;
