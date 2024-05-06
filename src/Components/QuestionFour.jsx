import { useState } from "react";

const QuestionFour = ({answer,  setAnswer }) => {
  const [activity, setActivity] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event){
    event.preventDefault()
    setFormSubmitted(true)
  }

  function handleChange(event) {
    setActivity(event.target.value)
  }

  return (
    <div>
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
        {formSubmitted && <button>Next Question</button>}
      </div>
    </div>
  );
};

export default QuestionFour;
