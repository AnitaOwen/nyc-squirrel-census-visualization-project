import { useState } from "react";

const QuestionOne = () => {
  function handleSubmit(event){
    event.preventDefault()
  }

  return (
  <div>
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
  </div>
  )
};

export default QuestionOne;
