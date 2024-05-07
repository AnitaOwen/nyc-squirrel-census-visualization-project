import { Link } from "react-router-dom";

const Squirrel = ({ squirrels, answer }) => {

    const result = squirrels.filter(squirrel => squirrel.resultColor === answer.color)[0]
  return (
    <div>
        {result && (
            <>
            <img src={result.img} alt={result.persona} />
            <h2>You found {result.persona}!</h2>
            <p><span>Personality: </span>{result.personality}</p>
            <p><span>Background: </span>{result.background}</p>
            <p><span>Goals: </span>{result.goals}</p>
            <p><span>Species: </span>{result.species}</p>
            <p>{result.description}</p>
            </>
        )}
        <Link to={"/bonus"}><button>Bonus Question</button></Link>
        <Link to={"/"}><button>Play Again</button></Link>
    </div>
  )
}

export default Squirrel