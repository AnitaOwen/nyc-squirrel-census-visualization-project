import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionTwo = ({answer,  setAnswer, sightings }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [locationData, setLocationData] = useState([]);

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  };

  const fetchAllPages = async () => {
    try {
      let allMatchingLocations = [];
      for (let i = 0; i < 4; i++) { 
        const data = await fetch(`${API}?location=${answer.location}&$offset=${i * 1000}&$order=:id`)
          .then((res) => res.json());
        allMatchingLocations = allMatchingLocations.concat(data);
      }
      setLocationData(allMatchingLocations);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  function handleSubmit(event){
    event.preventDefault();
    setToggleForm(false);
    fetchAllPages();
  }
  
  function findPercentage(){
    return Math.ceil((locationData.length / sightings.length) * 100);
  }
  const percentage = findPercentage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
      <div className="max-w-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-lg overflow-hidden p-6">
        {toggleForm && (
          <div>
            <p className="mb-6 text-lg">When you first spotted the squirrel, where was it?</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="location" className="flex items-center mb-2 text-lg">
                  <input 
                    type="radio"
                    id="Ground Plane"
                    name="location"
                    value="Ground Plane"
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  on the ground
                </label>
                <label htmlFor="location" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio" 
                    id="Above Ground"
                    name="location"
                    value="Above Ground"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  in a tree
                </label>
              </div>
              <button type='submit' className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded block mx-auto mb-6">Submit</button>
            </form>
          </div>
        )}
        {!toggleForm && (
          <div className="text-center">
            <p className="text-lg">{percentage}% of people who reported seeing a squirrel in Central also saw them in this place!</p>
            <Link to={`/question3`} className="block mx-auto mt-6">
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

export default QuestionTwo;
