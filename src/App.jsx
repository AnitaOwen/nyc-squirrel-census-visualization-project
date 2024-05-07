import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage";
import QuestionOne from "./Components/QuestionOne";
import QuestionTwo from "./Components/QuestionTwo";
import QuestionThree from "./Components/QuestionThree";
import QuestionFour from "./Components/QuestionFour";
import QuestionFive from "./Components/QuestionFive";
import NavBar from "./Components/NavBar";
import Squirrel from "./Components/Squirrel";
import { squirrels } from "../squirrelData";

const API = import.meta.env.VITE_API_URL;

const App = () => {
  const [sightings, setSightings] = useState([]);
  const [answer, setAnswer] = useState({
    color: "",
    location: "",
    sound: "",
    activity: "",
    feeling: "",
  });

  const fetchAllPages = async () => {
    try {
      let allSightings = [];
      for (let i = 0; i < 4; i++) {
        const data = await fetch(`${API}?$offset=${i * 1000}&$order=:id`).then(
          (res) => res.json()
        );
        // console.log(data)
        allSightings = allSightings.concat(data);
      }
      setSightings(allSightings);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAllPages();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/question1"
          element={
            <QuestionOne
              answer={answer}
              setAnswer={setAnswer}
              sightings={sightings}
            />
          }
        />
        <Route
          path="/question2"
          element={
            <QuestionTwo
              answer={answer}
              setAnswer={setAnswer}
              sightings={sightings}
            />
          }
        />
        <Route
          path="/question3"
          element={
            <QuestionThree
              answer={answer}
              setAnswer={setAnswer}
              sightings={sightings}
            />
          }
        />
        <Route
          path="/question4"
          element={
            <QuestionFour
              answer={answer}
              setAnswer={setAnswer}
              sightings={sightings}
            />
          }
        />
        <Route
          path="/question5"
          element={
            <QuestionFive
              answer={answer}
              setAnswer={setAnswer}
              sightings={sightings}
            />
          }
        />
        <Route
          path="/squirrel"
          element={<Squirrel answer={answer} squirrels={squirrels} />}
        />
      </Routes>
    </>
  );
};

export default App;
