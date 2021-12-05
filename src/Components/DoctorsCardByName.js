import { useEffect, useState } from "react";
import axios from "axios";
import CardSearch from "./CardSearch";
const DoctorsCardByName=(data)=>{

const [doctor, setDoctor] = useState([]);

let url = "http://localhost:8080/doctor/name/"+data.data;
useEffect(() => {
    axios.get(url).then((r) => {
      setDoctor(r.data);
    console.log("doctor",r);


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
export default DoctorsCardByName;