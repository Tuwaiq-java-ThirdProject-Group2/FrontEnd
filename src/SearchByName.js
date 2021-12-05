import { useState,useEffect  } from "react";
import axios from "axios";
import SearchByNameData from "./Components/SearchByNameData";
import DoctorsCardByName from "./Components/DoctorsCardByName";
import CardSearch from "./Components/CardSearch";


const SearchByName = () => {
  const[search,setSearch] = useState();
  const [doctors,setDoctors] = useState([]);
  const[name,setName] = useState("m");

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


      {/* <CardSearch data={name}/>      الكمبوننت هذا يسوي خطأ لما تشيل الكومنت عنه */}
      </div>
    </>
  );
};
export default SearchByName;
