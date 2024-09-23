import { useContext } from 'react';
import {QuizContext} from '../contexts/QuizContext'
//import { useQuiz } from '../contexts/QuizContext'
import Option from './Options'

function Question() {
    // const {questions, index} = useQuiz()
    const {questions, index} = useContext(QuizContext)
  const question = questions.at(index)
  console.log(question);
  
    
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
      
    </div>
  )
}

export default Question
