import { useState,useEffect  } from "react";
import axios from "axios";
import CardSearch from "./Components/CardSearch";

const SearchByName = () => {

  const [doctors,setDoctors] = useState([]);
  const[name,setName] = useState("m");

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
  let n
  return (
    <>
    <div className= "my_Container">
    {doctors.map((e)=>{
        //  { لما تكتب حاجة بالخانة الاولى حقت الاسم الاول ويحصل ويكون نفس الاسم موجد بالداتا بيس راح ينطبع الاسم من الكمبوننت اللي اسمه تحت}
         if(e.name===name){
           console.log(name); 
         }   
             })}
            
      <form>
        <div className="form-searchbyname-container">
        <div className="search-container">
          <input id="name" placeholder="Enter doctor name " />
          </div>
        </div>
      </form>
      <div>
        {/* طلعت الزر برى الفورم لانه كان يسوي مشاكل جوه */}
      <button  onClick={() => {
            n = document.getElementById("name").value;
            setName(n);
            //console.log(n);
          }}>Search</button>

      </div>

      {/* <CardSearch data={name}/>      الكمبوننت هذا يسوي خطأ لما تشيل الكومنت عنه */}
      </div>
    </>
  );
};
export default SearchByName;
