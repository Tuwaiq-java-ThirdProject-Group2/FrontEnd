import { useState,useEffect  } from "react";
import axios from "axios";
import SearchBySpecialtiesData from "./SearchBySpecialtiesData";
const SearchHero = () => {
  const [specialties, setSpecialties] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/specialties").then((r) => {
      //   مثال
      console.log(r);
      console.log(r.data);

      setSpecialties(r.data);
      //console.log(r.data)
    });
  }, []);
  return (
    <>
      <div className="select-container">
        <select>
        {specialties.map((e) => {
              return <SearchBySpecialtiesData data={e} />;
            })}
        </select>
      </div>
      <div className="form-search-container">
            <input placeholder="Enter first name "/>
            <button>Search</button>
      </div>
    </>
  );
};
export default SearchHero;
