import { useContext } from "react";
import {QuizContext} from '../contexts/QuizContext'
//import { useQuiz } from "../contexts/QuizContext";

function Options({question}) {
    // const {dispatch, answer} = useQuiz()
    const {dispatch, answer} = useContext(QuizContext)
  const hasAnswered = answer !== null;

  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? answer : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options
