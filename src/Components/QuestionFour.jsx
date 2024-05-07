import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionFour = ({ answer, setAnswer, sightings }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([]);
  const [activityCount, setActivityCount] = useState({});

  const fetchAllPages = async () => {
    try {
      let allMatchingActivities = [];
      for (let i = 0; i < 4; i++) {
        const data = await fetch(`${API}?${answer.activity}=true&$offset=${i * 1000}&$order=:id`)
          .then((res) => res.json());
        allMatchingActivities = allMatchingActivities.concat(data);
      }
      calculateActivityCount(allMatchingActivities);
      setData(allMatchingActivities);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    setToggleForm(false);
    fetchAllPages();
  }

  function handleChange(event) {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  function calculateActivityCount(data) {
    const count = {
      running: 0,
      chasing: 0,
      foraging: 0,
      eating: 0,
      indifferent: 0,
    };

    data.forEach((squirrel) => {
      if (squirrel.running) count.running++;
      if (squirrel.chasing) count.chasing++;
      if (squirrel.foraging) count.foraging++;
      if (squirrel.eating) count.eating++;
      if (squirrel.indifferent) count.indifferent++;
    });

    setActivityCount(count);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
      <div className="max-w-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-lg overflow-hidden p-6">
        {toggleForm && (
          <div>
            <p className="mb-6 text-lg">Some of my friends like to look for things to eat or hide or will make friends around the park. When you saw my friend, what were they doing?</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="activity" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="running"
                    name="activity"
                    value="running"
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Running
                </label>
                <label htmlFor="activity" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="chasing"
                    name="activity"
                    value="chasing"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Playing tag
                </label>
                <label htmlFor="activity" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="foraging"
                    name="activity"
                    value="foraging"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Looking for food
                </label>
                <label htmlFor="activity" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="eating"
                    name="activity"
                    value="eating"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Eating
                </label>
                <label htmlFor="activity" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="indifferent"
                    name="activity"
                    value="indifferent"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Doing nothing
                </label>
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded block mx-auto mb-6">Submit</button>
            </form>
          </div>
        )}
        {!toggleForm && (
          <div className="text-center">
            <p className="text-lg">While they were {answer.activity}, this is how many of my friends were also doing other activities! Who says we can't multi-task?</p>
            <ul>
              <li>Running: {activityCount.running}/{sightings.length}</li>
              <li>Playing tag: {activityCount.chasing}/{sightings.length}</li>
              <li>Looking for food: {activityCount.foraging}/{sightings.length}</li>
              <li>Eating: {activityCount.eating}/{sightings.length}</li>
              <li>Doing nothing: {activityCount.indifferent}/{sightings.length}</li>
            </ul>
            <Link to={`/question5`} className="block mx-auto mt-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded inline-flex items-center">
                <span className="text-lg">Next Question</span>
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

export default QuestionFour;
