import questions from "../../data/questions";
import { useState } from "react";
import { API_URL } from "../../../constants.js"
import './Form.css'


const Form = () => {

  const [currentStep, setCurrentStep] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const isLastStep = currentStep === questions.length - 1;

  const incrementStep = () => {
    if (userAnswers[currentStep]) {
      setCurrentStep(currentStep + 1)
      if (isLastStep) return sendUserAnswers()
    } else {
      setErrorMessage('Veuillez choisir au moins une réponse')
    }
  }

  const sendUserAnswers = async() => {
    try {
      const response = await fetch(`${API_URL}/api/v1/mapping`, {
        method: 'POST',
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify({ user_answers: userAnswers})
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log("an occured error:", error)
    }
  }

  const backButton = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...userAnswers]
    updatedAnswers[currentStep] = answer
    setUserAnswers(updatedAnswers)
    setErrorMessage("")
  }

  return (
    <>
        <div className="form">
          { currentStep < questions.length ? (
            <div>
              <div className="form-header" >
                <h2 className="question">{questions[currentStep].question}</h2>
                <p className="error-message">{errorMessage}</p>
              </div>
              <div className="answers">
                { questions[currentStep].answers.map((answer, index) =>
                <div
                  onClick={() => handleAnswerSelect(answer)}
                  className={ userAnswers[currentStep] === answer ? 'selected' : "selection" }
                  key={index}
                >
                  {answer}
                </div>
                )}
              </div>
              <div className="buttons-container">
                { currentStep > 0 ? (
                <button onClick={backButton} className="back-button">Retour</button>
                ) : (
                  <div style={{width: '86px'}}></div>
                )}
                <div className="question-step" >
                  <span className="label">Question</span> {currentStep + 1} / {questions.length}
                </div>
                  <button onClick={incrementStep} className="next-button" >Suivant</button>
              </div>
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
        </div>
    </>
  )
}

export default Form
