import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionFive = ({ answer,  setAnswer, sightings }) => {
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
          console.log(data)
          allForaging= allForaging.concat(data)
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
          console.log(data)
          allApproaches= allApproaches.concat(data)
      }
      setApproaches(allApproaches);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false);
  
    fetchAllRuns();
    fetchAllForaging();
    fetchAllApproaches();
  }

  function calculatingRunsPercentage() {
    // console.log("runs", runs.length)
    return Math.floor((runs.length / sightings.length) * 100);
  }
  const runsPercentage = calculatingRunsPercentage();



  function calculatingForagePercentage() {
    // console.log("forage", forage.length )
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
    <div>
      {toggleForm && (
        <div>
          <p>Squirrels are like people. Some can be shy or some can be very friendly. When you saw the squirrel, what was it doing?</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="social">
                <input 
                  type="radio"
                  id="runs_from"
                  name="social"
                  value="runs_from"
                  onChange={handleChange}
                  required
                />
                hiding from humans 
              </label>
              <label htmlFor="social">
                <input
                  type="radio" 
                  id="foraging"
                  name="social"
                  value="foraging"
                  onChange={handleChange}
                />
                exploring and looking for food
              </label>
              <label htmlFor="social">
                <input 
                  type="radio"
                  id="approaches"
                  name="social"
                  value="approaches"
                  onChange={handleChange}
                  required
                />
                saying hi to human friends 
              </label>
              <button type='submit' className= "bg-green-400">Submit</button>
            </div>
          </form>
        </div>
      )}
      {!toggleForm && (
        <div>
          <p>
            {runsPercentage}% of squirrels in Central Park were found hiding away from humans.
          </p>
          <p>
            {foragePercentage}% of squirrels in Central Park were found foraging for food! 
          </p>
          <p>
            {approachesPercentage}% of squirrels in Central Park were brave enough to say hi to other people.
          </p>
          <Link to={'/squirrel'}><button>Let's see who you found!</button></Link>
        </div>
      )}
    </div>
  );

};


export default QuestionFive;

