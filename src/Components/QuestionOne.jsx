import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionOne = ({answer,  setAnswer }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([])

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false);
    fetch(`${API}?primary_fur_color=${answer.color}`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error))
  }

  // useEffect(() => {
  //   console.log(data); // This will log whenever data changes
  // }, [data])

  return (
  <div>
    {toggleForm && (
    <div>
      <p>Each of my friends have different color fur. What color is the squirrel you just saw?
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="black">
            <input 
            type="radio"
            id="black"
            name="color"
            value="black"
            // onChange={handleChange}
            required
            />
            Black
          </label>
          <label htmlFor="cinnamon">
            <input
            type="radio" 
            id="cinnamon"
            name="color"
            value="cinnamon"
            // onChange={handleChange}
            />
            Cinnamon
          </label>
          <label htmlFor="gray">
            <input 
            type="radio" 
            id="gray"
            name="color"
            value="gray"
            // onChange={handleChange}
            />
            Gray
          </label>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
    )}
    {!toggleForm && (
      <div>
        <p>Some calculations</p>
        <Link to={`/question2`}>
          <button>Next Question</button>
        </Link>
    </div>
    )}
  </div>
  )
};

export default QuestionOne;
