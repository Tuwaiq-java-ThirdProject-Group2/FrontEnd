import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import AdminPage from "./AdminPage";
// import Signup from "../../SecondProject/Twitter/src/Components/Signup";
import App from "./App";
import GetRequest from "./GetRequest";
import MainSearch from "./MainSearch";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   
    <Route path="/MainPage" component={App}/>
    <Route path="/MainSearch" component={MainSearch}/>
    <Route path="/requests" component={GetRequest}/>
    <Route path="/adminpage" component={AdminPage}/>
    {/* <Route path="/MainSearch" component={Login}/> */}
    {/* <Route path="/MainSearch" component={Signup}/> */}
   
   

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
