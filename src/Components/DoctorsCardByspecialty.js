import { useEffect, useState } from "react";
import axios from "axios";
import CardSearch from "./CardSearch";
const DoctorsCardByspecialty=(data)=>{

const [doctor, setDoctor] = useState([]);

const [specialties, setSpecialties] = useState(data.data);
let url = "http://localhost:8080/specialties/findBySpecialties/"+data.data;
useEffect(() => {
    axios.get(url).then((r) => {
      setDoctor(r.data);
    console.log("doctor",r.data);


    }).catch((err)=> {
        console.log(err)
      });
  }, [data]);
  
return(
<>
{doctor.map((e)=>{
    return <CardSearch data={e}/>
})}
</>)
}
export default DoctorsCardByspecialty;