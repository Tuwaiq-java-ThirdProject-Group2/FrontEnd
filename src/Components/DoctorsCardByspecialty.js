import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./MainCard";
const DoctorsCardByspecialty=(data)=>{
console.log("data is",data.data);

const [doctor, setDoctor] = useState([]);

const [specialties, setSpecialties] = useState(data.data);
let url = "http://localhost:8080/specialties/findBySpecialties/"+data.data;
console.log(url);
useEffect(() => {
    axios.get(url).then((r) => {
      setDoctor(r);
      console.log(r);
      console.log(url,specialties);
      console.log(specialties);


    }).catch((err)=> {
        console.log(err)
      });
  }, [data]);
  console.log(url,data.data);

  console.log(doctor);
return(
<>
<Card/>
</>)
}
export default DoctorsCardByspecialty;