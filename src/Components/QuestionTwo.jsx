import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionTwo = ({answer,  setAnswer, sightingsCount }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([])

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false);
    fetch(`${API}?location=${answer.location}`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error))
  }

  console.log(sightingsCount.length)
  // average # number of times the same color was seen in this park in a year
  function findPercentage(){
    return Math.ceil((data.length / 3023) * 100)
  }
  const percentage = findPercentage()

  // useEffect(() => {
  //   console.log(data); // This will log whenever data changes
  // }, [data])

  return (
    <div>
      {toggleForm && (
        <div>
          <p>When you first spotted the squirrel, where was it?</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Ground Plane">
                <input 
                  type="radio"
                  id="Ground Plane"
                  name="location"
                  value="Ground Plane"
                  onChange={handleChange}
                  required
                />
                on the ground
              </label>
              <label htmlFor="Above Ground">
                <input
                  type="radio" 
                  id="Above Ground"
                  name="location"
                  value="Above Ground"
                  onChange={handleChange}
                />
                in a tree
              </label>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      )}
      {!toggleForm && (
        <div>
          <p>{percentage}% of people who reported seeing a squirrel also saw them in this place!</p>
          <Link to={`/question3`}>
            <button>Next Question</button>
          </Link>
        </div>
      )}
    </div>
  );
};


export default QuestionTwo;
