import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestItems from "../components/TestItems";
import Header from "../components/Header";
import { questionnaire } from "../utils/questionnaire";

function Test({testAnswers, setTestAnswers, setFormData}) {

    const navigate = useNavigate();
  // we store answers in an array
  const [userAnswers, setUserAnswers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // we check if the user has answered all questions
    if (userAnswers.length === questionnaire.length){
        setTestAnswers(userAnswers);
        setFormData(e.target)
        navigate("/lastStep");
    }
    else{
      alert("Please answer all questions.");
    }
  }
  const handleAnswer = (answer) => {
    const { id } = answer;
    const ansIndex = userAnswers.findIndex((item) => item.id === id);

    if (ansIndex === -1) {
      return setUserAnswers([...userAnswers, answer]);
    }

    return setUserAnswers((prev) => {
      prev[ansIndex].answer = answer.answer;
      return [...prev];
    });
  };

  return (
    <form className="max-w-full h-auto gap-4 bg-yellow-100" onSubmit={handleSubmit}>
      <Header />
      {questionnaire.map((item, index) => (
        <TestItems
          key={index}
          questionNumber={item.questionNumber}
          question={item.questionText}
          type={item.questionType}
          handleAnswer={handleAnswer}
        />
      ))}

      <div className="w-full flex flex-row justify-around">
        <a href="/"
          className="px-4 py-1 bg-yellow-100 border-2 rounded-md"
        >
          Cancel
        </a>
        <button
          className="px-4 py-1 bg-yellow-900 rounded-md text-yellow-50"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default Test;
