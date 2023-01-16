import React, { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Result = ({ correctAnswers }) => {
  const [showGrade, setShowGrade] = useState(false);
  const grade =
    correctAnswers >= 9
      ? "Amazing"
      : correctAnswers >= 7
      ? "Brilliant"
      : correctAnswers >= 5
      ? "Could be better"
      : correctAnswers >= 3
      ? "Deep knowledge (but we do not see)"
      : "Empty head";

  return (
    <div className="result-wrap">
      <div className="result-container">
        <h4>
          <CountUp
            start={0}
            end={correctAnswers}
            delay={0}
            duration={1}
            onEnd={() => setShowGrade(true)}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />/<span>10</span>
              </div>
            )}
          </CountUp>
        </h4>
        <h3 className={showGrade ? "visible" : ""}>{grade}</h3>
        <Link to="/" className="play-again-link">
          <button>Play again</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
