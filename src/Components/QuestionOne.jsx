import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionOne = ({ answer, setAnswer, sightings }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [colorData, setColorData] = useState([]);

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  };

  // function to fecth all pages
  const fetchAllPages = async () => {
    try {
      let allMatchingColors = [];
      for (let i = 0; i < 4; i++) {
        const data = await fetch(
          `${API}?primary_fur_color=${answer.color}&$offset=${
            i * 1000
          }&$order=:id`
        ).then((res) => res.json());
        allMatchingColors = allMatchingColors.concat(data);
        console.log(data);
      }
      setColorData(allMatchingColors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    setToggleForm(false);
    fetchAllPages();
  }

  function findPercentage() {
    return Math.ceil((colorData.length / sightings.length) * 100);
  }
  const percentage = findPercentage();

  return (
    <div>
      {toggleForm && (
        <div>
          <p>
            Each of my friends have different color fur. What color is the
            squirrel you just saw?
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="color">
                <input
                  type="radio"
                  id="Black"
                  name="color"
                  value="Black"
                  onChange={handleChange}
                  required
                />
                Black
              </label>
              <label htmlFor="color">
                <input
                  type="radio"
                  id="Cinnamon"
                  name="color"
                  value="Cinnamon"
                  onChange={handleChange}
                />
                Cinnamon
              </label>
              <label htmlFor="color">
                <input
                  type="radio"
                  id="Gray"
                  name="color"
                  value="Gray"
                  onChange={handleChange}
                />
                Gray
              </label>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
      {!toggleForm && (
        <div>
          <p>
            {percentage}% of people who reported seeing a squirrel with this
            color fur in Central Park!
          </p>
          <Link to={`/question2`}>
            <button>Next Question</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuestionOne;
