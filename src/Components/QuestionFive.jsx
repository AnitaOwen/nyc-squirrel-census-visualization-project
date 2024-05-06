
import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionFive = ({ answer,  setAnswer }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([])

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false);
    fetch(`${API}?${answer.social}=true`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error))
  }

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
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      )}
      {!toggleForm && (
        <div>
          <p>Some calculations</p>
          <Link to={`/bonus`}>Next Question</Link>
        </div>
      )}
    </div>
  );

};


export default QuestionFive;

