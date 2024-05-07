import { Link } from "react-router-dom";

const Squirrel = ({ squirrels, answer }) => {
    const result = squirrels.filter(squirrel => squirrel.resultColor === answer.color)[0];

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            {result && (
                <>
                    <img src={result.img} alt={result.persona} className="rounded-lg mb-4" />
                    <h2 className="text-xl font-semibold mb-2">You found {result.persona}!</h2>
                    <p><span className="font-semibold">Personality:</span> {result.personality}</p>
                    <p><span className="font-semibold">Background:</span> {result.background}</p>
                    <p><span className="font-semibold">Goals:</span> {result.goals}</p>
                    <p><span className="font-semibold">Species:</span> {result.species}</p>
                    <p className="mt-4">{result.description}</p>
                </>
            )}
            <div className="flex justify-between mt-6">
                <Link to={"/bonus"} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg">
                    Bonus Question
                </Link>
                <Link to={"/"} className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg">
                    Play Again
                </Link>
            </div>
        </div>
    );
};

export default Squirrel;
