const QuestionThree = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <div>
        <p>
          My friends can either be very chatty or quiet. What sounds did you
          hear from the squirrel you just saw?
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="quiet">
                <input
                  type="radio"
                  id="quiet"
                  name="sound"
                  value="quiet"
                  // onChange={handleChange}
                  required
                />
                Quiet
              </label>
            </div>

            <div>
              <label htmlFor="kukking">
                <input
                  type="radio"
                  id="kukking"
                  name="sound"
                  value="kukking"
                  // onChange={handleChange}
                />
                Chirpy/Kukking
              </label>
            </div>

            <div>
              <label htmlFor="quaaing">
                <input
                  type="radio"
                  id="quaaing"
                  name="sound"
                  value="quaaing"
                  // onChange={handleChange}
                />
                Quacking/Quaaing
              </label>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionThree;
