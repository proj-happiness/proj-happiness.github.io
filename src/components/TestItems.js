function TestItems({ questionNumber, question, type, handleAnswer }) {
  const handleChange = (e) => {
    const answer = {
      id: questionNumber,
      answer: e.target.value,
    };
    handleAnswer(answer);
  };

  return (
    <div className="container p-4 bg-yellow-100 max-w-xl flex flex-col">
      <div className="w-full">
        {/* Here goes question text */}
        <p>
          {questionNumber}.) {question}
        </p>
      </div>
      <div className="w-full flex flex-col p-2 gap-2">
        {/* Here goes choices */}
        <label className={labelStyle}>
          <input
            type="radio"
            name={questionNumber}
            value={type + "-yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className={labelStyle}>
          <input
            type="radio"
            name={questionNumber}
            value={type + "-no"}
            onChange={handleChange}
          />
          No
        </label>
        <label className={labelStyle}>
          <input
            type="radio"
            name={questionNumber}
            value={type + "-either"}
            onChange={handleChange}
          />
          Either
        </label>
      </div>
    </div>
  );
}
const labelStyle = "p-2 bg-yellow-50 rounded-md flex gap-2 weight"
export default TestItems;
