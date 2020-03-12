import React, {Component} from "react";
// import "./style.css";
import {Line} from 'react-chartjs-2';
import Chart from "react-google-charts";

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Apr 19', 'May 19', 'June 19', 'July 19', 'Aug 19', 'Sept 19', 'Oct 19', 'Nov 19','Dec 19', 'Jan 20', 'Feb 20', 'Current'],
                datasets:[
                    {
                    label:'Price',
                    data:{[
                        100,
                        200,
                        225,
                        300,
                        290,
                        260,
                        250,
                        235,
                        220,
                        275,
                        310,
                        225
                    ],
                    backgroundColor: '#fff',
                    }]
                }
            }
    }
    render(){
        return (
            <div className="chart">
            <Line
                data={this.state.chartData}
                width={100}
                height={50}
                options={{}}
            />
            </div>


        )   
    }
}

export default Chart;


// function ChartForm(props, companies) {
//   return (
//     var ctx = document.getElementById('myChart').getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }
//         }
//     });

//     // <div className="card text-center float">
//     //   <div className="card-header">
//     //     <h2>Search by Company or Symbol </h2>
//     //   </div>
//     //   <div className="card-body"></div>
//     //   <form>
//     //     <div className="form-group" style={{ padding: '22px' }}>
//     //       <label htmlFor="search">Ginance Furus</label>
//     //       <input
//     //         onChange={props.handleSymbolInputChange}
//     //         value={props.value}
//     //         searchtype={props.searchtype}
//     //         name="search"
//     //         type="text"
//     //         className="form-control"
//     //         placeholder="Search Symbol or Company name"
//     //         id="search"
//     //       />
//     //       <br />
//     //       <div className="form-group" style={{ padding: '22px' }}>      
//     //     <label>
//     //       <input type = "radio"  name="selectedOption" value="symbol" checked = {props.selectedOption === 'symbol'} onClick={props.onChange}/>
//     //         Search Symbol
//     //     </label>
//     //     <label>
//     //       <input type = "radio" name="selectedOption" value="company_name" checked = {props.selectedOption === 'company_name'}onClick={props.onChange}/>
//     //         Search Company Name
//     //     </label>
//     //     </div>
//     //       <button onClick={props.handleSymbolFormSubmit} className="btn btn-primary">
//     //         Search
//     //     </button>
//     //     </div>
//     //   </form>
//     // </div>

//   // );
// }
// export default ChartForm;