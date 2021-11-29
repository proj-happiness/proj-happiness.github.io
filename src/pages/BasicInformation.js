import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function BasicInformation({testAnswers, setBasicInfo}) { 
  const navigate = useNavigate();
  const [givenName, setGivenName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

useEffect(() => {
    if(testAnswers.length !== 10){
      navigate("/");
    }
}, [testAnswers.length])

    const handleSubmit = (e) => {
        e.preventDefault();
        setBasicInfo({
            givenName,
            age,
            email
        });
        navigate("/process");
    }

  return (
    <form className="max-w-full h-full bg-yellow-100" onSubmit={handleSubmit}>
      <Header />

      <div className="container p-4 bg-yellow-100 max-w-xl flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          Given Name
          <input
            type="text"
            className="w-full py-2 px-4 rounded-lg"
            placeholder="ex. Andrew"
            value={givenName}
            onChange={(e) => setGivenName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          Email
          <input
            type="email"
            className="w-full py-2 px-4 rounded-lg"
            placeholder="ex. user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          Age
          <input
            type="text"
            className="w-full py-2 px-4 rounded-lg"
            placeholder="ex. 18"
            value={age}
            pattern="[0-9]*"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="w-full flex flex-row justify-around">
        <button onClick={() => navigate(-1)}>Back</button>
        <button
          className="py-2 px-4 bg-yellow-900 text-yellow-50 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default BasicInformation;
