import React from "react";
import { Link, useParams } from "react-router-dom";

function Survey() {
  const { numberOfQuestion } = useParams();

  return (
    <div>
      <h1>Survey</h1>
      <Link to={`/Survery/${numberOfQuestion}`}>Previous</Link>
      {parseInt(numberOfQuestion) === 10 ? (
        <Link to="/Results">Results</Link>
      ) : (
        <Link to={`/Survery/${numberOfQuestion}`}>Next</Link>
      )}

    </div>
  );
}

export default Survey;
