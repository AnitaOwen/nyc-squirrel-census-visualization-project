import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionThree = ({ answer, setAnswer, sightings }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([]);
  // const allSightings = sightingsCount.length;

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
    <div>
      {toggleForm && (
        <div>
          <p>
            My friends can either be very chatty or quiet. What sounds did you
            hear from the squirrel you just saw?
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="indifferent">
                <input
                  type="radio"
                  id="indifferent"
                  name="sound"
                  value="indifferent"
                  onChange={handleChange}
                  required
                />
                Quiet
              </label>
              <div>
                <label htmlFor="kuks">
                  <input
                    type="radio"
                    id="kuks"
                    name="sound"
                    value="kuks"
                    onChange={handleChange}
                  />
                  Chirpy/Kukking
                </label>
              </div>

              <div>
                <label htmlFor="quaas">
                  <input
                    type="radio"
                    id="quaas"
                    name="sound"
                    value="quaas"
                    onChange={handleChange}
                  />
                  Quacking/Quaaing
                </label>
              </div>

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
      {!toggleForm && (
        <div>
          <p>
            {percentage}% of people who reported seeing a squirrel also heard a
            squirrel making the same noises!
          </p>
          <Link to={`/question4`}>
            <button>Next Question</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuestionThree;
