import React from "react";
import "./style.css";

function CoSymForm(props, companies) {
  return (
    <div className="card text-center float">
      <div className="card-header">
        <h2>Search by Company or Symbol </h2>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="search">Ginance Furus</label>
          <input
            onChange={props.handleSymbolInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Symbol or Company name"
            id="search"
          />
          <br />
          <div className="form-group" style={{ padding: '22px' }}>      
        <label>
          <input type = "radio"  name="selectedOption" value="symbol" checked = {props.selectedOption === 'symbol'} onClick={props.onChange}/>
            Search Symbol
        </label>
        <label>
          <input type = "radio" name="selectedOption" value="company_name" checked = {props.selectedOption === 'company_name'}onClick={props.onChange}/>
            Search Company Name
        </label>
        </div>
          <button onClick={props.handleSymbolFormSubmit} className="btn btn-primary">
            Search
        </button>
        </div>
      </form>
    </div>

  );
}
export default CoSymForm;