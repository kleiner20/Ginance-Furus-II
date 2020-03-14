import React, {Component} from "react";
// import "./style.css";
import {Line} from 'react-chartjs-2';
import API from "../utils/API.js";


class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: [],
                datasets:[
                    {
                    label:'Price',
                    data:[],
                    backgroundColor: '#0a0a0a',
                    }]
                }
            }
    }

    

    componentDidMount() {
        const symbol = this.props.stock.ticker
        const { chartData } = { ...this.state };
        const newChartLabel = chartData;
        const newChartPoints = chartData
//   console.log(this.props.stock, "stocky stock stock")
this.props.stock.ticker.length > 0 ? 
API.getStockPrices(symbol)
.then(res=>{
  console.log("Keith symbol tracking 3")
  console.log((res.data))
  let monthsObject = res.data["Monthly Adjusted Time Series"]

  console.log(monthsObject, "Months")

  // for(let month in monthsObject){
  //   console.log(month)
  //   //monthsObject[month]
  // }

  let keysArr = Object.keys(monthsObject);
  keysArr = keysArr.slice(0,12);
  console.log(keysArr)
  console.log(keysArr.length)

  newChartLabel["labels"] = keysArr.reverse()
  this.setState({chartData: newChartLabel})

  let high = 0;
  let low = 99999999;
  keysArr.forEach(date=>{
    // console.log(monthsObject[date]["2. high"])
    if(monthsObject[date]["2. high"] > high){
      high = monthsObject[date]["2. high"]
    }
    if(monthsObject[date]["3. low"] < low){
      low = monthsObject[date]["3. low"]
    }
  })

  let closePriceArray = []

  for(let i = 0; i < 12; i++) {
    closePriceArray.push(monthsObject[keysArr[i]]["4. close"])
  }

  console.log(closePriceArray, this.props.stock.ticker + " last twelve close prices")
//   const { chartData } = { ...this.state };
  
  newChartPoints["datasets"][0].data = closePriceArray
  this.setState({chartData: newChartPoints})

  let close = monthsObject[keysArr[0]]["4. close"]
  console.log('close', close)

//   API.getCompanyInfo(symbol).then(info=>{
//     console.log("info", info)
//     this.setState({
//         high: high, 
//         low: low,
//         close: close,
//         short_description: info.data.short_description,
//         name: info.data.legal_name
//       });
//   })
})
.catch(err=>{
  console.log(err)
  //do something to let the user know its not a real stock symbol
  //have an error message in the state
}) : console.log("waiting");
}
        // API.getStockPrices(this.props.stock.ticker)
        // .then(res=>{
        //   console.log("Keith chart tracking")
        //   console.log((res.data))
        //   let monthsObject = res.data["Monthly Adjusted Time Series"]
    
        //   console.log(monthsObject, "Months")
    
          // for(let month in monthsObject){
          //   console.log(month)
          //   //monthsObject[month]
          // }
    
        //   let keysArr = Object.keys(monthsObject);
        //   keysArr = keysArr.slice(0,12);
        //   console.log(keysArr)
        //   console.log(keysArr.length)
        
    
    //     let closePriceArray = []

    //   for(let i = 0; i < 12; i++) {
    //     closePriceArray.push(monthsObject[keysArr[0]]["4. close"])
    //   }
    // })
     

    

    render(){
        return (
            <div className="chart" style={{height:'200px', width:'250px'}} >
            <Line
                data={this.state.chartData}
                width={300}
                height={150}
                options={{maintainAspectRatio: true }}
            />
            </div>


        )   
    }
}

export default Chart;


