import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SearchBySpecialtiesData from "./Components/SearchBySpecialtiesData";
import DoctorsCardByspecialty from "./Components/DoctorsCardByspecialty";

const SearchBySpecialties = () => {
  // هنا نخزن كل التخصصات
  const [specialties, setSpecialties] = useState([]);
  const[search,setSearch] = useState("Segrey");
  const history = useHistory();

  //هنا تحط رابط  API  لكل التخصصات
  useEffect(() => {
    axios.get("http://localhost:8080/specialties").then((r) => {
      //   مثال
      console.log(r);
      console.log(r.data);

      setSpecialties(r.data);
      //console.log(r.data)
    });
  }, []);
  let a;
  return (
    <>
      <div className="form-searchbyname-container">
        <div className="select-container">
          <select id="specialty">
            {specialties.map((e) => {
              return <SearchBySpecialtiesData data={e} />;
            })}
          </select>
        </div>
        <button
          onClick={() => {
            a = document.getElementById("specialty").value;
            console.log(a);
            setSearch(a);
          }}
        >
          Search
        </button>
      </div>
      <div>
          
          <DoctorsCardByspecialty data={search}/></div>
    </>
  );
};
export default SearchBySpecialties;
