(this["webpackJsonpfinance-app"]=this["webpackJsonpfinance-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(27),s=a.n(o),c=a(13),r=a(23),i=(a(74),a(75),a(76),a(16)),m=a(17),h=a(22),u=a(18),p=a(21),d=a(104),E=a(106),g=a(103),f=a(105),v=a(64),b=a(63);var k=function(e){return l.a.createElement(d.a,{bg:"dark",expand:"lg",class:"navbar"},l.a.createElement(d.a.Brand,{href:"#home"},"Ginance Furu"),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(E.a.Link,{href:"#home"},"Home"),l.a.createElement(E.a.Link,{href:"#link"},"Link"),l.a.createElement(g.a,{title:"Dropdown",id:"basic-nav-dropdown"},l.a.createElement(g.a.Item,{href:"#action/3.1"},"Add Stock"),l.a.createElement(g.a.Item,{href:"#action/3.2"},"About"),l.a.createElement(g.a.Item,{href:"#action/3.3"},"Login"),l.a.createElement(g.a.Divider,null),l.a.createElement(g.a.Item,{href:"#action/3.4"},"About"))),l.a.createElement(f.a,{inline:!0},l.a.createElement(v.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(b.a,{variant:"outline-success"},"Search"))))};var y=a(9),C=a.n(y),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={stocks:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/api/stocks").then((function(t){e.setState({stocks:t.data}),console.log(e.state.stocks),console.log("butt")})),setInterval((function(){C.a.get("/api/stocks").then((function(t){e.setState({stocks:t.data}),console.log(e.state.stocks),console.log("butt")}))}),3e4)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},"My Portfolio")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(c.b,{to:"/create"},l.a.createElement("span",{class:"glyphicon glyphicon-plus-sign","aria-hidden":"true"})," Add Stock")),l.a.createElement("table",{class:"table table-stripe"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ticker"),l.a.createElement("th",null,"Buy/Sell Meter"),l.a.createElement("th",null,"Chart"))),l.a.createElement("tbody",null,this.state.stocks.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(c.b,{to:"/show/".concat(e._id)},e.ticker)),l.a.createElement("td",null,"Low: $",e.low,l.a.createElement("br",null),"Close $",e.close,l.a.createElement("br",null),"High $",e.high,l.a.createElement("br",null)),l.a.createElement("td",null,e.investors_notes))}))))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=ServiceWorker,w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=a.state.stocks;t[e.target.name]=e.target.value,a.setState({stocks:t})},a.onSubmit=function(e){e.preventDefault();var t=a.state.stocks,n=t.ticker,l=t.name,o=t.close,s=t.short_description,c=t.earnings_date,r=t.high,i=t.low;C.a.put("/api/stocks/"+a.props.match.params.id,{ticker:n,name:l,close:o,short_description:s,earnings_date:c,high:r,low:i}).then((function(e){a.props.history.push("/show/"+a.props.match.params.id)}))},a.state={stocks:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/api/stocks/"+this.props.match.params.id).then((function(t){e.setState({stocks:t.data}),console.log(e.state.stocks)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-name"},"EDIT stocks")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(c.b,{to:"/show/".concat(this.state.stocks._id)},l.a.createElement("span",{class:"glyphicon glyphicon-eye-open","aria-hidden":"true"})," Portfolio")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"ticker"},"ticker:"),l.a.createElement("input",{type:"text",class:"form-control",name:"ticker",value:this.state.stocks.ticker,onChange:this.onChange,placeholder:"ticker"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"Name:"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:this.state.stocks.name,onChange:this.onChange,placeholder:"name"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"close"},"close:"),l.a.createElement("input",{type:"text",class:"form-control",name:"close",value:this.state.stocks.close,onChange:this.onChange,placeholder:"close"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"investors_notes"},"Investors Notes:"),l.a.createElement("input",{type:"text",class:"form-control",name:"investors_notes",value:this.state.stocks.investors_notes,onChange:this.onChange,placeholder:"investors_notes"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"short_description"},"Description:"),l.a.createElement("input",{type:"text",class:"form-control",name:"short_description",value:this.state.stocks.short_description,onChange:this.onChange,placeholder:"short_description"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"published_date"},"Earnings Date:"),l.a.createElement("input",{type:"number",class:"form-control",name:"earnings_date",value:this.state.stocks.earnings_date,onChange:this.onChange,placeholder:"Published Year"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"high"},"high:"),l.a.createElement("input",{type:"text",class:"form-control",name:"high",value:this.state.stocks.high,onChange:this.onChange,placeholder:"high"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"low"},"low:"),l.a.createElement("input",{type:"text",class:"form-control",name:"low",value:this.state.stocks.low,onChange:this.onChange,placeholder:"low"})),l.a.createElement("button",{type:"submit",class:"btn btn-default"},"Submit")))))}}]),t}(n.Component),O=a(67),j=function(e){return C.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=".concat(e,"&apikey=OmE3MWIyM2I4Y2E4ZTg1YTU1NTdmZjlmZDllNmJlNzdh"))},D=function(e){return C.a.get("https://api-v2.intrinio.com/companies/search?query=".concat(e,"&api_key=OmFmZTU0MmEwMGNkMWQ3MDU5ZGZlMzhjOGNlZjAyYzU4"))};a(100);var x=function(e,t){return l.a.createElement("div",{className:"card text-center float"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h2",null,"Company Symbol Search ")),l.a.createElement("div",{className:"card-body"}),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group",style:{padding:"22px"}},l.a.createElement("label",{htmlFor:"search"},"Company Symbol"),l.a.createElement("input",{onChange:e.comhandleSymbolInputChange,value:e.value,searchtype:e.searchtype,name:"search",type:"text",className:"form-control",placeholder:"Search Symbols",id:"search"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:e.handleSymbolFormSubmit,className:"btn btn-primary"},"Search Company Symbol"))))},I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.ticker,l=a.name,o=a.close,s=a.investors_notes,c=a.short_description,r=a.earnings_date,i=a.high,m=a.low;C.a.post("/api/stocks",{ticker:n,name:l,close:o,investors_notes:s,short_description:c,earnings_date:r,high:i,low:m}).then((function(t){e.props.history.push("/")}))},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(O.a)({},n,a))},e.handleSymbolInputChange=function(t){var a=t.target.value;console.log("Keith's tracking 1"),console.log(a),e.setState({ticker:a})},e.handleSymbolFormSubmit=function(t){t.preventDefault(),console.log("Keith's tracking 2"),e.stockPriceSearch(e.state.ticker)},e.handleFormSubmit=function(t){t.preventDefault(),D(e.state.ticker).then((function(t){e.stockPriceSearch(t.something)})),console.log("Get Co. Symbols")},e.companySearch=function(t){D("Apple Inc").then((function(t){e.setState({companies:t.data.companies})})),console.log("company search 2")},e.stockPriceSearch=function(t){j(t).then((function(t){console.log("Keith symbol tracking 3"),console.log(t.data);var a=t.data["Monthly Adjusted Time Series"];console.log(a);var n=Object.keys(a);n=n.slice(0,12),console.log(n),console.log(n.length);var l=0,o=99999999;n.forEach((function(e){a[e]["2. high"]>l&&(l=a[e]["2. high"]),a[e]["3. low"]<o&&(o=a[e]["3. low"])})),console.log("high",l),console.log("low",o);var s=a[n[0]]["4. close"];console.log("close",s),e.setState({high:l,low:o,close:s})})).catch((function(e){console.log(e)}))},e.state={result:[],search:"",searchtype:"Company",companies:"",error:"",ticker:"",name:"",close:null,investors_notes:"",short_description:"",earnings_date:"",high:null,low:null,stock_status:"",meter_percentage:""},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.ticker,a=e.name,n=e.close,o=e.investors_notes,s=e.short_description,r=e.earnings_date,i=e.high,m=e.low;return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-name"},"ADD STOCK")),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Back to Portfolio")),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement(x,{searchtype:this.state.searchtype,value:this.state.ticker,handleSymbolInputChange:this.handleSymbolInputChange,handleSymbolFormSubmit:this.handleSymbolFormSubmit,searchJobs:this.searchJobs}),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"ticker"},"ticker:"),l.a.createElement("input",{type:"text",class:"form-control",name:"ticker",value:t,onChange:this.onChange,placeholder:"ticker"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"name:"),l.a.createElement("input",{type:"text",class:"form-control",name:"name",value:a,onChange:this.onChange,placeholder:"name"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"close"},"close:"),l.a.createElement("input",{type:"text",class:"form-control",name:"close",value:n,onChange:this.onChange,placeholder:"close"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"investors_notes"},"Investors Notes:"),l.a.createElement("textArea",{class:"form-control",name:"investors_notes",onChange:this.onChange,placeholder:"investors_notes",cols:"80",rows:"3"},o)),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"short_description"},"short_description:"),l.a.createElement("textArea",{class:"form-control",name:"short_description",onChange:this.onChange,placeholder:"short_description",cols:"80",rows:"3"},s)),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"earnings_date"},"Earnings Date:"),l.a.createElement("input",{type:"number",class:"form-control",name:"earnings_date",value:r,onChange:this.onChange,placeholder:"Earnings Date"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"high"},"high:"),l.a.createElement("input",{type:"text",class:"form-control",name:"high",value:i,onChange:this.onChange,placeholder:"high"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"low"},"low:"),l.a.createElement("input",{type:"text",class:"form-control",name:"low",value:m,onChange:this.onChange,placeholder:"low"})),l.a.createElement("button",{type:"submit",class:"btn btn-default"},"Submit")))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={stocks:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/api/stocks/"+this.props.match.params.id).then((function(t){e.setState({stocks:t.data}),console.log(e.state.stocks)}))}},{key:"delete",value:function(e){var t=this;console.log(e),C.a.delete("/api/stocks/"+e).then((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{class:"panel-heading"},l.a.createElement("h3",{class:"panel-title"},this.state.stocks.title)),l.a.createElement("div",{class:"panel-body"},l.a.createElement("h4",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("span",{class:"glyphicon glyphicon-th-list","aria-hidden":"true"})," Portfolio")),l.a.createElement("dl",null,l.a.createElement("dt",null,"Tickers:"),l.a.createElement("dd",null,this.state.stocks.ticker),l.a.createElement("dt",null,"Name:"),l.a.createElement("dd",null,this.state.stocks.name),l.a.createElement("dt",null,"Investors Notes:"),l.a.createElement("dd",null,this.state.stocks.investors_notes),l.a.createElement("dt",null,"Description:"),l.a.createElement("dd",null,this.state.stocks.short_description),l.a.createElement("dt",null,"Earnings Date:"),l.a.createElement("dd",null,this.state.stocks.earnings_date),l.a.createElement("dt",null,"Close:"),l.a.createElement("dd",null,this.state.stocks.close),l.a.createElement("dt",null,"High:"),l.a.createElement("dd",null,this.state.stocks.high),l.a.createElement("dt",null,"Low:"),l.a.createElement("dd",null,this.state.stocks.low)),l.a.createElement(c.b,{to:"/edit/".concat(this.state.stocks._id),class:"btn btn-success"},"Edit"),"\xa0",l.a.createElement("button",{onClick:this.delete.bind(this,this.state.stocks._id),class:"btn btn-danger"},"Delete"))))}}]),t}(n.Component);s.a.render(l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(r.a,{exact:!0,path:"/",component:S}),l.a.createElement(r.a,{path:"/edit/:id",component:w}),l.a.createElement(r.a,{path:"/create",component:I}),l.a.createElement(r.a,{path:"/show/:id",component:N}))),document.getElementById("root")),_()},69:function(e,t,a){e.exports=a(101)},76:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.e9db177e.chunk.js.map