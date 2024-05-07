import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionTwo = ({answer,  setAnswer, sightingsCount }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([])

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  const fetchAllPages = async () => {
    try {
      let allMatchingLocations = [];
      for (let i = 0; i < 4; i++) { 
        const data = await fetch(`${API}?location=${answer.location}&$offset=${i * 1000}&$order=:id`)
          .then((res) => res.json());
          console.log(data)
          allMatchingLocations = allMatchingLocations.concat(data)
      }
      setData(allMatchingLocations);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false)
    fetchAllPages()
    // fetch(`${API}?location=${answer.location}`)
    // .then((res) => res.json())
    // .then((data) => setData(data))
    // .catch((error) => console.error(error))
  }
  
  // console.log(sightingsCount.length)
  // average # number of times the same color was seen in this park
  function findPercentage(){
    return Math.ceil((data.length / sightingsCount.length) * 100)
  }
  const percentage = findPercentage()

  return (
    <div>
      {toggleForm && (
        <div>
          <p>When you first spotted the squirrel, where was it?</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="location">
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
              <label htmlFor="location">
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
