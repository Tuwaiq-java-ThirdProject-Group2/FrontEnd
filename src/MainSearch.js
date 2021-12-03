import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import line from "./images/line.png";
import Card from "./Components/Card";
import MainCard from "./Components/MainCard";
import SearchByName from "./SearchByName";
import SearchBySpecialties from "./SearchBySpecialties";

function MainSearch() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="Searchpage-container">
          <h1 className="white">
            Find Doctors using the Most Important Criteria: Yours
          </h1>
          <Route exact path="/MainSearch" component={SearchByName}/>
          <Route exact path="/MainSearch/SearchBySpecialties" component={SearchBySpecialties}/>


        </div>
      </div>
    </>
  );
}

export default MainSearch;
