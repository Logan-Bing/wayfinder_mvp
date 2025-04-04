import questions from "../../data/questions";
import { useState } from "react";
import './Form.css'


const Form = () => {

  const [currentStep, setCurrentStep] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  const incrementStep = () => {
    if (userAnswers[currentStep]) {
      setCurrentStep(currentStep + 1)
    }
  }

  const backButton = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleAnswerSelect = (answer) => {
    const updateAnswers = [...userAnswers]
    updateAnswers[currentStep] = answer
    setUserAnswers(updateAnswers)
  }

  return (
    <>
      { currentStep < questions.length ? (
        <div>
          <h2>{questions[currentStep].question}</h2>
          { questions[currentStep].answers.map((answer, index) =>
          <div
            onClick={() => handleAnswerSelect(answer)}
            className={ userAnswers[currentStep] === answer ? 'selected' : "selection" }
            key={index}
          >
            {answer}
          </div>
          )}
          <button onClick={incrementStep}>Suivant</button>
          { currentStep > 0 && (
            <button onClick={backButton}>Retour</button>
          )}
        </div>
      ) : (
        <div>Le formulaire est terminé
          {userAnswers.map((answer) =>
          <div>
            <p>{answer}</p>
          </div>
          )}
        </div>
      )}
    </>
  )

}

export default Form
