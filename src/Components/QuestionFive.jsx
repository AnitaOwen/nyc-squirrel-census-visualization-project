import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionFive = ({ answer, setAnswer, sightings }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([]);

  const [runs, setRuns] = useState([]);
  const [forage, setForage] = useState([]);
  const [approaches, setApproaches] = useState([]);

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  // Runs_from function
  const fetchAllRuns = async () => {
    try {
      let allRuns = [];
      for (let i = 0; i < 4; i++) {
        const data = await fetch(`${API}?runs_from=true&$offset=${i * 1000}&$order=:id`)
          .then((res) => res.json());
        allRuns = allRuns.concat(data)
      }
      setRuns(allRuns);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Foraging function
  const fetchAllForaging = async () => {
    try {
      let allForaging = [];
      for (let i = 0; i < 4; i++) {
        const data = await fetch(`${API}?foraging=true&$offset=${i * 1000}&$order=:id`)
          .then((res) => res.json());
        allForaging = allForaging.concat(data)
      }
      setForage(allForaging);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Approaches function
  const fetchAllApproaches = async () => {
    try {
      let allApproaches = [];
      for (let i = 0; i < 4; i++) {
        const data = await fetch(`${API}?approaches=true&$offset=${i * 1000}&$order=:id`)
          .then((res) => res.json());
        allApproaches = allApproaches.concat(data)
      }
      setApproaches(allApproaches);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault()
    setToggleForm(false);

    fetchAllRuns();
    fetchAllForaging();
    fetchAllApproaches();
  }

  function calculatingRunsPercentage() {
    return Math.floor((runs.length / sightings.length) * 100);
  }
  const runsPercentage = calculatingRunsPercentage();

  function calculatingForagePercentage() {
    return Math.floor((forage.length / sightings.length) * 100);
  }
  const foragePercentage = calculatingForagePercentage();

  function calculatingApproachesPercentage() {
    return Math.floor((approaches.length / sightings.length) * 100);
  }
  const approachesPercentage = calculatingApproachesPercentage();

  useEffect(() => {
    console.log(data); // This will log whenever data changes
  }, [data])

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
      <div className="max-w-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-lg overflow-hidden p-6">
        {toggleForm && (
          <div>
            <p className="mb-6 text-lg">Squirrels are like people. Some can be shy or some can be very friendly. When you saw the squirrel, what was it doing?</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="runs_from" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="runs_from"
                    name="social"
                    value="runs_from"
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Hiding from humans
                </label>
                <label htmlFor="foraging" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="foraging"
                    name="social"
                    value="foraging"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Exploring and looking for food
                </label>
                <label htmlFor="approaches" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="approaches"
                    name="social"
                    value="approaches"
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Saying hi to human friends
                </label>
              </div>
              <button type='submit' className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded block mx-auto mb-6">Submit</button>
            </form>
          </div>
        )}
        {!toggleForm && (
          <div className="text-center">
            <p className="text-lg">{runsPercentage}% of squirrels in Central Park were found hiding away from humans.</p>
            <p className="text-lg">{foragePercentage}% of squirrels in Central Park were found foraging for food!</p>
            <p className="text-lg">{approachesPercentage}% of squirrels in Central Park were not afraid to say hi to other people.</p>
            <Link to={`/squirrel`} className="block mx-auto mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded inline-flex items-center">
                <span className="text-lg">Find my friend!</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 ml-2">
                  <path fillRule="evenodd" d="M19.707 9.293l-7-7a1 1 0 0 0-1.414 1.414L16.586 9H3a1 1 0 0 0 0 2h13.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionFive;
