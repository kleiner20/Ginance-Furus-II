import React from "react";
import "./style.css";

function CoSymForm(props, companies) {
  return (
    <div className="card text-center float">
      <div className="card-header">
        <h2>Company Symbol Search </h2>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="search">Company Symbol</label>
          <input
            onChange={props.comhandleSymbolInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            companies="text"
            className="form-control"
            placeholder="Search Symbols"
            id="search"
          />
          <br />
          <button onClick={props.handleSymbolFormSubmit} className="btn btn-primary">
            Search Company Symbol
        </button>
        </div>
      </form>
    </div>

  );
}
export default CoSymForm;
