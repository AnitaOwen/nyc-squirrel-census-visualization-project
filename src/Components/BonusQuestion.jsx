import React, { useState } from 'react';

const BonusQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  }

  function handleSubmit(event){
    event.preventDefault()
    setToggleForm(false);
    fetch(`${API}?location=${answer.social}`)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    console.log(data); // This will log whenever data changes
  }, [data])


  const closeModal = () => {
    setSelectedOption(null);
  };

  return (
    <div>
      <p>Bonus: Good job scout! Now that our search is over, how did you feel about meeting my squirrel friends?</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="scared">
            <input 
              type="radio"
              id="scared"
              name="emotion"
              value="scared"
              onChange={handleChange}
              required
            />
            Scared
          </label>
          <label htmlFor="curious">
            <input
              type="radio" 
              id="curious"
              name="emotion"
              value="curious"
              onChange={handleChange}
            />
            Curious
          </label>
          <label htmlFor="excited">
            <input 
              type="radio"
              id="excited"
              name="emotion"
              value="excited"
              onChange={handleChange}
              required
            />
            Excited
          </label>
          <button type='submit'>Submit</button>
        </div>
      </form>

      {selectedOption === 'scared' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>You selected: Scared
            Don't worry! Our squirrel friends help balance the ecosystem
            </p>
            
          </div>
        </div>
      )}

      {selectedOption === 'curious' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>You selected: Curious
            Hey there, ranger! There's a lot more you can learn about squirrels if you click this link: 
            </p>
            
          </div>
        </div>
      )}

      {selectedOption === 'excited' && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>You selected: Excited
            Woohoo! Join me on another adventure to find more squirrel friends.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BonusQuestion;
