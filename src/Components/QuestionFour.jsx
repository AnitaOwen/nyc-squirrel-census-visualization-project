import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

const QuestionFour = ({answer,  setAnswer }) => {
  const [toggleForm, setToggleForm] = useState(true)
  const [data, setData] = useState([])
  const [activityCount, setActivityCount] = useState({})

  // const activityEndpoints = {
  //   running: `${API}?running=true`,
  //   chasing: `${API}?chasing=true`,
  //   foraging: `${API}?foraging=true`,
  //   eating: `${API}?eating=true`,
  //   indifferent: `${API}?indifferent=true`,
  // }

  // const apiUrl = activityEndpoints[activity]

  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false)
    fetch(`${API}?${answer.activity}=true`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        calculateActivityCount(data)
      })
      .catch((error) => console.error(error))
  }

  function handleChange(event) {
    setAnswer({ ...answer, [event.target.name]: event.target.value })
  }

  function calculateActivityCount(data) {
    const count = {
      running: 0,
      chasing: 0,
      foraging: 0,
      eating: 0,
      indifferent: 0,
    }

    data.forEach((squirrel) => {
      if (squirrel.running) count.running++
      if (squirrel.chasing) count.chasing++
      if (squirrel.foraging) count.foraging++
      if (squirrel.eating) count.eating++
      if (squirrel.indifferent) count.indifferent++
    })

    setActivityCount(count)
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
            <label htmlFor="activity">
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
            <label htmlFor="activity">
              <input 
                type="radio" 
                id="chasing"
                name="activity"
                value="chasing"
                onChange={handleChange}
              />
              Playing tag
            </label>
            <label htmlFor="activity">
              <input 
                type="radio" 
                id="foraging"
                name="activity"
                value="foraging"
                onChange={handleChange}
              />
              Looking for food
            </label>
            <label htmlFor="activity">
              <input 
                type="radio" 
                id="eating"
                name="activity"
                value="eating"
                onChange={handleChange}
              />
              Eating
            </label>
            <label htmlFor="activity">
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
          <p>These are some of the things my friends are doing: </p>
          <ul>
            <li>Running: {activityCount.running}/{data.length}</li>
            <li>Playing tag: {activityCount.chasing}/{data.length}</li>
            <li>Looking for food: {activityCount.foraging}/{data.length}</li>
            <li>Eating: {activityCount.eating}/{data.length}</li>
            <li>Doing nothing: {activityCount.indifferent}/{data.length}</li>
          </ul>
          <Link to={`/question5`}>
            <button>Next Question</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default QuestionFour;
