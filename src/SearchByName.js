import { useState,useEffect  } from "react";
import axios from "axios";
import SearchByNameData from "./Components/SearchByNameData";

const SearchByName = () => {

  const [doctors,setDoctors] = useState([]);
  const[name,setName] = useState([]);

  const getName= (e) => {
    setName(e.target.value)
  }
  

  
  useEffect(() => {
    axios.get("http://localhost:8080/doctor")
      .then((r) => {
        setDoctors(r.data);
       
      })
      .catch((err)=> {
        console.log(err)
      });
  }, []);
  
  return (
    <>
    {doctors.map((e)=>{
        //  { لما تكتب حاجة بالخانة الاولى حقت الاسم الاول ويحصل ويكون نفس الاسم موجد بالداتا بيس راح ينطبع الاسم من الكمبوننت اللي اسمه تحت}
         if(e.name===name){
           return <SearchByNameData Data={name}/>
           
         }
             
             })}
            
      <form>
        <div className="form-searchbyname-container">
          <input onChange={getName} placeholder="Enter first name " />
          <input placeholder="Enter last name " />
          <button >Search</button>
        </div>
      </form>
      

    </>
  );
};
export default SearchByName;
