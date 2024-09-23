import { useContext } from "react"
import {QuizContext} from '../contexts/QuizContext'
//import { useQuiz } from "../contexts/QuizContext"

function StartScreen() {
    // const {numQuestions, dispatch} = useQuiz()
    const {numQuestions, dispatch} = useContext(QuizContext)
    return (
      <div className="start">
        <h2>Welcome to The React Quiz!</h2>
        <h3>{numQuestions} questions to test your React mastery</h3>
        <button className="btn btn-ui" onClick={()=> dispatch({type: 'start'})}>Let's start</button>
      </div>
    )
}

export default StartScreen
