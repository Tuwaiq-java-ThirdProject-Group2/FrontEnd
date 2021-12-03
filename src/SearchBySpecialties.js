import { useState,useEffect  } from "react";
import axios from "axios";
import SearchBySpecialtiesData from "./Components/SearchBySpecialtiesData";

const SearchBySpecialties = () => {
    // هنا نخزن كل التخصصات
const [specialties,setSpecialties] = useState([]);

//هنا تحط رابط  API  لكل التخصصات
useEffect(() => {
    axios.get("http://localhost:8080/specialties")
      .then((r) => {
        //   مثال
        setSpecialties(r.data);
        //console.log(r.data)

      })
      .catch((err)=> {
        console.log(err)
      });
  }, []);

    return (
      <>
        <form>
          <div className="form-searchbyname-container">
              <div className="select-container">
          <select>
              {/* نسوي ماب عشان نرسل كل الداتا لكوموبينت  */}
              {specialties.map((e)=>{
          <SearchBySpecialtiesData Data={e.specialtyName}/>
          console.log(e.specialtyName)
              
              })}
             
        </select>
        </div>
            <button>Search</button>
          </div>
        </form>
      </>
    );
  };
  export default SearchBySpecialties;
  