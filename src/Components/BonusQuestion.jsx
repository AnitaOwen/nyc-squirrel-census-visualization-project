import { useState } from 'react';
import { Link } from 'react-router-dom';

const BonusQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission if needed
  };

  const closeModal = () => {
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
      <div className="max-w-xl bg-opacity-50 backdrop-filter backdrop-blur-lg bg-white shadow-md rounded-lg overflow-hidden p-6">
        <p className="mb-6 text-lg">Bonus: Good job scout! Now that our search is over, how did you feel about meeting my squirrel friends?</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="scared" className="flex items-center mb-2 text-lg">
              <input 
                type="radio"
                id="scared"
                name="emotion"
                value="scared"
                onChange={handleChange}
                required
                className="mr-2"
              />
              Scared
            </label>
            <label htmlFor="curious" className="flex items-center mb-2 text-lg">
              <input
                type="radio" 
                id="curious"
                name="emotion"
                value="curious"
                onChange={handleChange}
                className="mr-2"
              />
              Curious
            </label>
            <label htmlFor="excited" className="flex items-center mb-2 text-lg">
              <input 
                type="radio"
                id="excited"
                name="emotion"
                value="excited"
                onChange={handleChange}
                required
                className="mr-2"
              />
              Excited
            </label>
          </div>
          {/* <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded block mx-auto mb-6">Submit</button> */}
        </form>

        {selectedOption === 'scared' && (
          <div className="text-center">
            <p>You selected: Scared</p>
            <p>Don't worry! Our squirrel friends help balance the ecosystem</p>
            <a  className="font-bold text-green-700 hover:text-green-400 shadow-2xl"href={"https://kids.nationalgeographic.com/animals/mammals/facts/eastern-gray-squirrel"} target="_blank" rel="noreferrer">Show me more!</a>
          </div>
        )}

        {selectedOption === 'curious' && (
          <div className="text-center">
            <p>You selected: Curious</p>
            <p>Hey there, ranger! There's a lot more you can learn about squirrels if you click the link below</p>
            <a  className="font-bold text-green-700 hover:text-green-400 shadow-2xl"href={"https://kids.nationalgeographic.com/animals/mammals/facts/eastern-gray-squirrel"} target="_blank" rel="noreferrer">Show me more!</a>
          </div>
        )}

        {selectedOption === 'excited' && (
          <div className="text-center">
            <p>You selected: Excited</p>
            <p>Woohoo! Join me on another adventure to find more squirrel friends.</p>
            <a  className="font-bold text-green-700 hover:text-green-400 shadow-2xl"href={"https://kids.nationalgeographic.com/animals/mammals/facts/eastern-gray-squirrel"} target="_blank" rel="noreferrer">Show me more!</a>
          </div>
        )}
        
        <Link to={"/"} className="block mx-auto mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 ml-30 rounded-lg text-center"><button>Play Again</button></Link>
      </div>
    </div>
  );
};

export default BonusQuestion;