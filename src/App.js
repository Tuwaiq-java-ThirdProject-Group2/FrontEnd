import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import line from "./images/line.png";
import Card from "./Components/Card";
import MainCard from "./Components/MainCard";
import AddDoctorRecord from "./Components/AddDoctorRecord";


function App() {
  return (
    <>
      <div className="main-container">
        <div>
          <Hero />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="best-doctors">
          <div>
            <img className="line-style" src={line} />
            <h1 className="OBD">top doctors of the week</h1>
          </div>
          <div className ="mainpage-card-container">
            <MainCard />
            <Card />
            <Card />
            <AddDoctorRecord />
           
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
