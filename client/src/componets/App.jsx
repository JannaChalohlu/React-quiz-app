import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useContext } from "react";
import {QuizContext} from '../contexts/QuizContext'

function App() {
 
  const {status} = useContext(QuizContext)
 

  return (
    <div className="app">
      <Header />

      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen  />
        )}

        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
            <Timer />
            <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen />
        )}
      </Main>
    </div>
  );
}

export default App
