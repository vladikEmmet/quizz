import React, { useCallback } from "react";
import { Link, Routes, Route } from "react-router-dom";
import CustomBtn from "../UI/CustomBtn/CustomBtn";
import Questions from "./Questions";

const QuestionSelection = ({
  categories,
  difficulty,
  handleSetCategory,
  handleSetDifficulty,
  startGame,
}) => {
  const checkIsSelected = useCallback(
    (value) => categories.includes(value),
    [categories]
  );

  return (
    <>
      <div className="question-selection">
        <h2>Choose a category(optional)</h2>
        <div className="categories">
          <CustomBtn
            handleClick={handleSetCategory}
            value="arts_and_literature"
            isSelected={checkIsSelected("arts_and_literature")}
          >
            Arts & literature
          </CustomBtn>
          <CustomBtn
            handleClick={handleSetCategory}
            value="films_and_tv"
            isSelected={checkIsSelected("films_and_tv")}
          >
            Film & TV
          </CustomBtn>
          <CustomBtn
            handleClick={handleSetCategory}
            value="food_and_drink"
            isSelected={checkIsSelected("food_and_drink")}
          >
            Food & Drink
          </CustomBtn>
          <CustomBtn
            handleClick={handleSetCategory}
            value="general_knowledge"
            isSelected={checkIsSelected("general_knowledge")}
          >
            General Knowledge
          </CustomBtn>
          <CustomBtn
            value="geography"
            isSelected={checkIsSelected("geography")}
            handleClick={handleSetCategory}
          >
            Geography
          </CustomBtn>
          <CustomBtn
            value="history"
            isSelected={checkIsSelected("history")}
            handleClick={handleSetCategory}
          >
            History
          </CustomBtn>
          <CustomBtn
            value="music"
            isSelected={checkIsSelected("music")}
            handleClick={handleSetCategory}
          >
            Music
          </CustomBtn>
          <CustomBtn
            value="science"
            isSelected={checkIsSelected("science")}
            handleClick={handleSetCategory}
          >
            Science
          </CustomBtn>
          <CustomBtn
            handleClick={handleSetCategory}
            value="society_and_culture"
            isSelected={checkIsSelected("society_and_culture")}
          >
            Society & culture
          </CustomBtn>
          <CustomBtn
            handleClick={handleSetCategory}
            value="sport_and_leisure"
            isSelected={checkIsSelected("sport_and_leisure")}
          >
            Sport & Leisure
          </CustomBtn>
        </div>
        <h2>Choose a difficulty(optional)</h2>
        <div className="difficulty">
          <CustomBtn
            value="easy"
            isSelected={difficulty === "easy"}
            handleClick={handleSetDifficulty}
          >
            Easy
          </CustomBtn>
          <CustomBtn
            value="medium"
            isSelected={difficulty === "medium"}
            handleClick={handleSetDifficulty}
          >
            Medium
          </CustomBtn>
          <CustomBtn
            value="hard"
            isSelected={difficulty === "hard"}
            handleClick={handleSetDifficulty}
          >
            Hard
          </CustomBtn>
        </div>
        <Link to="questions">
          <button
            className="start-game-btn"
            onClick={() => {
              setTimeout(
                () =>
                  window.scrollTo(0, document.documentElement.clientHeight * 2),
                100
              );
              startGame();
            }}
          >
            Play
          </button>
        </Link>
      </div>
      <Routes>
        <Route
          path="questions"
          element={
            <Questions categories={categories} difficulty={difficulty} />
          }
        />
      </Routes>
    </>
  );
};

export default QuestionSelection;
