import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionThree = ({ answer, setAnswer, sightings }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([]);

  function handleChange(event) {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  // all pages fetch
  const fetchAllPages = async () => {
    try {
      let allMatchingSounds = [];
      for (let i = 0; i < 4; i++) {
        const data = await fetch(
          `${API}?${answer.sound}=true&$offset=${i * 1000}&$order=:id`
        ).then((res) => res.json());
        allMatchingSounds = allMatchingSounds.concat(data);
      }
      setData(allMatchingSounds);
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
    return Math.ceil((data.length / sightings.length) * 100);
  }
  const percentage = findPercentage();

  useEffect(() => {
    console.log(data); // This will log whenever data changes
  }, [data]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
      <div className="max-w-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-lg overflow-hidden p-6">
        {toggleForm && (
          <div>
            <p className="mb-6 text-lg">My friends can either be very chatty or quiet. What sounds did you hear from the squirrel you just saw?</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="indifferent" className="flex items-center mb-2 text-lg">
                  <input
                    type="radio"
                    id="indifferent"
                    name="sound"
                    value="indifferent"
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  Quiet
                </label>
                <div className="mb-2">
                  <label htmlFor="kuks" className="flex items-center text-lg">
                    <input
                      type="radio"
                      id="kuks"
                      name="sound"
                      value="kuks"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Chirpy/Kukking
                  </label>
                </div>

                <div className="mb-2">
                  <label htmlFor="quaas" className="flex items-center text-lg">
                    <input
                      type="radio"
                      id="quaas"
                      name="sound"
                      value="quaas"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Quacking/Quaaing
                  </label>
                </div>
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded block mx-auto mb-6">Submit</button>
            </form>
          </div>
        )}
        {!toggleForm && (
          <div className="text-center">
            <p className="text-lg">{percentage}% of people who reported seeing a squirrel also heard a squirrel making the same noises!</p>
            <Link to={`/question4`} className="block mx-auto mt-6">
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

export default QuestionThree;