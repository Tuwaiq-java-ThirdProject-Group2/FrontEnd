import { useEffect, useState } from "react";
import axios from "axios";

const GetDoctor=()=>{

const[Doctor,setDoctor] =useState(0);

useEffect(() => {
    axios.get("http://localhost:8080/doctor/numbersOfDoctors").then((r) => {
      setDoctor(r.data);
     
    });
  }, []);


  return(<><p>{Doctor}</p></>)

}
export default GetDoctor;