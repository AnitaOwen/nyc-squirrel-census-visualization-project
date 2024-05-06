import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionFour = ({answer,  setAnswer }) => {
  const [activity, setActivity] = useState("")
  const [toggleForm, setToggleForm] = useState(true);
  const [data, setData] = useState([])

  // const activityEndpoints = {
  //   running: `${API}?running=true`,
  //   chasing: `${API}?chasing=true`,
  //   foraging: `${API}?foraging=true`,
  //   eating: `${API}?eating=true`,
  //   indifferent: `${API}?indifferent=true`,
  // };

  // const apiUrl = activityEndpoints[activity]

  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false)
    fetch(`${API}?${activity}=true`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }

  function handleChange(event) {
    setActivity(event.target.value)
    setAnswer({ ...answer, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    console.log(data); // This will log whenever data changes
  }, [data])

  return (
    <div>
      {toggleForm && (
      <div>
        <p>Some of my friends like to look for things to eat or hide or will make friends around the park. When you saw my friend, what were they doing?</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="running">
              <input 
                type="radio" 
                id="running"
                name="activity"
                value="running"
                onChange={handleChange}
                required
              />
              Running
            </label>
            <label htmlFor="tag">
              <input 
                type="radio" 
                id="chasing"
                name="activity"
                value="chasing"
                onChange={handleChange}
              />
              Playing tag
            </label>
            <label htmlFor="food">
              <input 
                type="radio" 
                id="foraging"
                name="activity"
                value="foraging"
                onChange={handleChange}
              />
              Looking for food
            </label>
            <label htmlFor="food">
              <input 
                type="radio" 
                id="eating"
                name="activity"
                value="eating"
                onChange={handleChange}
              />
              Eating
            </label>
            <label htmlFor="watching">
              <input 
                type="radio" 
                id="indifferent"
                name="activity"
                value="indifferent"
                onChange={handleChange}
              />
              Doing nothing
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      )}
        {!toggleForm && (
        <div>
          <p>Some calculations</p>
          <Link to={`/question5`}>
            <button>Next Question</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuestionFour;
