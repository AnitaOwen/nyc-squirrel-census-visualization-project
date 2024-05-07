import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionOne = ({ answer, setAnswer, sightings }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [colorData, setColorData] = useState([]);

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  };

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
      }
      setColorData(allMatchingColors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToggleForm(false);
    fetchAllPages();
  };

  const findPercentage = () => {
    return Math.ceil((colorData.length / sightings.length) * 100);
  };
  const percentage = findPercentage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
      <div className="max-w-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-lg overflow-hidden p-6">
        {toggleForm && (
          <div>
            <p className="mb-6 text-lg">
              Each of my friends have different color fur. What color is the
              squirrel you just saw?
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="color" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="Black"
                    name="color"
                    value="Black"
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Black
                </label>
                <label htmlFor="color" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="Cinnamon"
                    name="color"
                    value="Cinnamon"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Cinnamon
                </label>
                <label htmlFor="color" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="Gray"
                    name="color"
                    value="Gray"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Gray
                </label>
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded block mx-auto mb-6">Submit</button>
            </form>
          </div>
        )}
        {!toggleForm && (
          <div>
            <p className="text-lg">
              {percentage}% of people reported seeing a squirrel with this
              color fur in Central Park!
            </p>
            <Link to={`/question2`} className="block mx-auto mt-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded inline-flex items-center">Next Question</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionOne;