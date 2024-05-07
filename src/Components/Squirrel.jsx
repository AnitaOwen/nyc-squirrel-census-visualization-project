import React from 'react'

const Squirrel = ({ squirrels, answer }) => {
    console.log("ANSWER", answer)
    console.log("SQUIRRELS", squirrels)
    const result = squirrels.filter(squirrel => squirrel.resultColor === answer.color)[0]
  return (
    <div>
        {result && (
            <>
            <h4>You found {result.species}</h4>
            <p>{result.description}</p>
            </>
        )}
    </div>
  )
}

export default Squirrel