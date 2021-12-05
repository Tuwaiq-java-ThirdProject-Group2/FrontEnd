import { useState,useEffect  } from "react";
import axios from "axios";
import SearchByNameData from "./Components/SearchByNameData";
import DoctorsCardByName from "./Components/DoctorsCardByName";

const SearchByName = () => {
  const[search,setSearch] = useState();
  const [doctors,setDoctors] = useState([]);
  const[name,setName] = useState([]);

  const getName= (e) => {
    setName(e.target.value)
  }
  

  
  
  let a;

  return (
    <>
                
        <div className="form-searchbyname-container">
          <input id="name"  placeholder="Enter first name " />
          <button  onClick={() => {
            a = document.getElementById("name").value;
            console.log(a);
            setSearch(a);
          }}>Search</button>
        </div>
      <DoctorsCardByName data={search}/>

    </>
  );
};
export default SearchByName;
