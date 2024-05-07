import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionOne = ({answer,  setAnswer }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  function handleSubmit(event){
    event.preventDefault();
    setToggleForm(false);
    fetch(`${API}?primary_fur_color=${answer.color}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }

  // useEffect(() => {
  //   console.log(data); // This will log whenever data changes
  // }, [data])

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
      <div className="max-w-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-lg overflow-hidden p-6">
        {toggleForm && (
          <div>
            <p className="mb-6 text-lg">Each of my friends have different color fur. What color is the squirrel you just saw?</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="black" className="flex items-center mb-2 text-lg">
                  <input 
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Black
                </label>
                <label htmlFor="cinnamon" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio" 
                    id="cinnamon"
                    name="color"
                    value="cinnamon"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Cinnamon
                </label>
                <label htmlFor="gray" className="flex items-center mb-2 text-lg">
                  <input 
                    type="radio" 
                    id="gray"
                    name="color"
                    value="gray"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Gray
                </label>
              </div>
              <button type='submit' className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded block mx-auto mb-6">Submit</button>
            </form>
          </div>
        )}
        {!toggleForm && (
          <div className="text-center">
            <p>Some calculations</p>
            <Link to={`/question2`} className="block mx-auto mt-6">
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

export default QuestionOne;
