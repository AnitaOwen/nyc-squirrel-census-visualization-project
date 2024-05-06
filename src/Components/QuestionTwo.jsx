import React, { useState } from 'react';
const QuestionTwo = () => {
  const [toggleForm, setToggleForm] = useState(true);

  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false);
  }


  return (
    <div>
      {toggleForm && (
        <div>
          <p>When you first spotted the squirrel, where was it?</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="ground">
                <input 
                  type="radio"
                  id="ground"
                  name="location"
                  value="ground"
                  // onChange={handleChange}
                  required
                />
                on the ground
              </label>
              <label htmlFor="tree">
                <input
                  type="radio" 
                  id="tree"
                  name="location"
                  value="tree"
                  // onChange={handleChange}
                />
                in a tree
              </label>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      )}
      {!toggleForm && (
        <div>
          <p>Some calculation</p>
        </div>
      )}
    </div>
  );
};


export default QuestionTwo;
