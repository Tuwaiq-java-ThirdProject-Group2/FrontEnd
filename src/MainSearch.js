import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import line from "./images/line.png";
import Card from "./Components/Card";
import MainCard from "./Components/MainCard";
import SearchByName from "./SearchByName";
import SearchBySpecialties from "./SearchBySpecialties";
import DoctorProfile from "./Components/DoctorProfile";
import AddNewDoctorPage from "./AddNewDoctorPage";

function MainSearch() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="Searchpage-container">
          <h1 className="white">
            Find Doctors using the Most Important Criteria: Yours
          </h1>
          <Route exact path="/MainSearch/SearchByName" component={SearchByName}/>
          <Route exact path="/MainSearch/addNewDoctor" component={AddNewDoctorPage}/>

          <Route exact path="/MainSearch/SearchBySpecialties" component={SearchBySpecialties}/>
          <Route exact path="/MainSearch/doctorprofile/:doctorId" component={DoctorProfile}/>


        </div>
      </div>
    </>
  );
}

export default MainSearch;
