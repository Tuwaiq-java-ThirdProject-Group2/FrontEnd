import { useState,useEffect  } from "react";
import axios from "axios";

import SearchBySpecialtiesData from "./Components/SearchBySpecialtiesData";

const SearchBySpecialties = () => {
    // هنا نخزن كل التخصصات
const [specialties,setSpecialties] = useState(["fahad","abdullah"]);

//هنا تحط رابط  API  لكل التخصصات
useEffect(() => {
    axios.get("")
      .then((r) => {
        //   مثال
        setSpecialties("fahad");

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
          <SearchBySpecialtiesData data={e}/>

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
  