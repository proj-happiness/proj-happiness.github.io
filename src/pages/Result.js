import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { messages } from "../utils/messages";
function Result({ result, basicInfo }) {
  const { givenName, email, age } = basicInfo;
  const navigate = useNavigate();
  const { state } = useLocation();
  const personalityType =
    result.biggerPercentage === result.introvertPercentage
      ? "Introvert"
      : result.biggerPercentage === result.extrovertPercentage
      ? "Extrovert"
      : "Omnivert";


  useEffect(() => {
    if (!state.status === "processed" || !state || result.data === undefined) {
      alert("Finish the test first!");
      return navigate("/test");
    }
    else{
        const templateParams = {
            to_name: "Ms. January",
            from_name: givenName,
            personalityType,
            email,
            age,
            introPer: result.introvertPercentage,
            extroPer: result.extrovertPercentage,
            omniPer: result.eitherPercentage,
          };
          emailjs
            .send(
              "service_tjoanwn",
              "template_7hai2gb",
              templateParams,
              "user_rUdMwOGPrvRmRGyIaV0Nz"
            )
            .then(() => {
              alert("Thank you for participating this project!");
            })
            .catch((err) => {
              alert(err.message);
            });
    }
  }, []);

  const introvertBar = {
    width: `${result.introvertPercentage}%`,
    backgroundColor: "rgba(180, 83, 9, .8)",
    padding: ".5rem .3rem",
    textAlign: "center",
    borderRadius: "0.375rem",
  };
  const extrovertBar = {
    width: `${result.extrovertPercentage}%`,
    backgroundColor: "rgba(245, 158, 11, .8)",
    padding: ".5rem .3rem",
    textAlign: "center",
    borderRadius: "0.375rem",
  };
  const omnivertBar = {
    width: `${result.eitherPercentage}%`,
    backgroundColor: "rgba(252, 211, 77, .8)",
    padding: ".5rem .3rem",
    textAlign: "center",
    borderRadius: "0.375rem",
  };

  return (
    <div className="container max-w-full p-4 bg-yellow-100 flex flex-col">
      {/* Header */}

      <div className="p-4">
        <h1 className="text-2xl text-center text-yellow-900">
          Results just for you, {givenName}!
        </h1>
      </div>

      {/* Chart */}
      <div className="container w-full flex flex-col justify-center items-center gap-2">
        <div className="w-9/12 border-2 border-black rounded-md">
          <div className="text-xs" style={introvertBar}>
            Introvert: {result.introvertPercentage}%
          </div>
        </div>
        <div className="w-9/12 border-2 border-black rounded-md">
          <div className="text-xs" style={extrovertBar}>
            Extrovert: {result.extrovertPercentage}%
          </div>
        </div>
        <div className="w-9/12 border-2 border-black rounded-md">
          <div className="text-xs" style={omnivertBar}>
            Omnivert: {result.eitherPercentage}%
          </div>
        </div>
      </div>

      <div className="container p-4 text-md text-center flex flex-col gap-2">
        <h2 className="text-yellow-900">Your personality type is:</h2>
        <h1>{personalityType}</h1>

        <p className="text-left text-yellow-900">
          {
            messages.filter(
              (message) => message.type === personalityType.toLowerCase()
            )[0].message
          }
        </p>
      </div>
    </div>
  );
}

export default Result;
