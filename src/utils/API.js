import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";


export default {
  search: function() {
    return axios.get(BASEURL);
  },
  getStockPrices: function(symbol){
    return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=OmE3MWIyM2I4Y2E4ZTg1YTU1NTdmZjlmZDllNmJlNzdh`)
  },
  getCompanySymbols: function(companyName){
    return axios.get(`https://api-v2.intrinio.com/companies/search?query=${companyName}&api_key=OmFmZTU0MmEwMGNkMWQ3MDU5ZGZlMzhjOGNlZjAyYzU4`)
  }
  };

