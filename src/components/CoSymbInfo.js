import React from "react";
import Companies from "../data/companies.json";

function CoSymbInfo(props, {companies}) {
  console.log(props)

  const results = companies && companies.filter(emp => emp.company.toLowerCase().includes(props.search.toLowerCase()));
console.log (results)
  return (
    <div className="text-center results">
      { results && results.length > 0 ? (
        <ul className="list-group">
          <h2>Company Name</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <b> {result.company} {result.symbol} </b>- {result.company}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default CoSymbInfo;
