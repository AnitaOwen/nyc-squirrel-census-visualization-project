import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionThree = ({ answer, setAnswer }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setToggleForm(false);
    fetch(`${API}?${answer.sound}=false`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }

  function handleChange(event) {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  // useEffect(() => {
  //   console.log(data); // This will log whenever data changes
  // }, [data]);

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
          <p>CALCULATIONS</p>
          <Link to={`/question4`}>
            <button>Next Question</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuestionThree;
