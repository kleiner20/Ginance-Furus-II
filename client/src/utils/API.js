import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";


export default {
  search: function() {
    return axios.get(BASEURL);
  },
  getStockPrices: function(symbol){
<<<<<<< HEAD
=======
    
>>>>>>> 7e6d049501e248049d6f6c609d1bc767cca811a4
    return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=CRYHQM0N0MNLSSX1`)
  },
  //this one gives you ticker when you give it the full company name
  getCompanySymbols: function(companyName){
    return axios.get(`https://api-v2.intrinio.com/companies/search?query=${companyName}&api_key=OmFmZTU0MmEwMGNkMWQ3MDU5ZGZlMzhjOGNlZjAyYzU4`)
  },
  getCompanyInfo: function(symbol){
    return axios.get(`https://api-v2.intrinio.com/companies/${symbol}?api_key=OmFmZTU0MmEwMGNkMWQ3MDU5ZGZlMzhjOGNlZjAyYzU4`)
  }
};