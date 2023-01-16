import { useState } from "react";
import "./App.css";
import QuestionSelection from "./Components/QuestionSelection";

function App() {
  const [categories, setCategories] = useState([]);
  const [difficulty, setDifficulty] = useState("");

  const findCategory = (value) => categories.indexOf(value);

  const handleSetDifficulty = (value) =>
    difficulty === value ? setDifficulty("") : setDifficulty(value);

  const startGame = () => document.body.classList.add("non-scrolled");

  const handleSetCategory = (value) => {
    const category = findCategory(value);
    if (category === -1) {
      setCategories([...categories, value]);
    } else {
      const newArr = [...categories];
      newArr.splice(category, 1);
      setCategories(newArr);
    }
  };

  return (
    <div className="App">
      <div className="welcome-display">
        <h1>Are you smart?</h1>
        <h2>Let`s check it!</h2>
        <button
          onClick={() =>
            window.scrollTo(0, document.documentElement.clientHeight)
          }
        >
          Start
        </button>
      </div>
      <QuestionSelection
        categories={categories}
        difficulty={difficulty}
        handleSetCategory={handleSetCategory}
        handleSetDifficulty={handleSetDifficulty}
        startGame={startGame}
      />
    </div>
  );
}

export default App;
